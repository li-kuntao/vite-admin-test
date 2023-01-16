<script lang="ts" setup>
import { ref, onBeforeMount, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { ElTree } from 'element-plus'
// import PdfViewer from '@/components/PdfViewer/index.vue'
import VideoPlayer from '@/components/VideoPlayer/index.vue'
import { archiveManage } from '@/api'
import { treeDataGetNode } from '@/utils'

const route: any = useRoute()
const actArchiveId = ref()
const clickArchiveId = ref()
const actDoc: any = ref(null)
const docDetail: Record<string, any> = ref({})
const docTreeList = ref([])
interface Meta {
  id: any
  key: string
  value: string
}
const metaDataList = ref<Meta[]>([])
const treeRef = ref<InstanceType<typeof ElTree>>()
// 获取就诊文档目录
const getViewDocumentById = () => {
  archiveManage.getArchiveInfo(route.query.archiveId).then((res: any) => {
    if (res.success) {
      actArchiveId.value = res.data.archiveId
      clickArchiveId.value = res.data.archiveId
      docTreeList.value = res.data.content
      docDetail.value = { ...res.data }
      const docObj = treeDataGetNode(res.data.content, true).filter(
        (itm: any) => itm.mimeType
      )[0]
      if (docObj) {
        actDoc.value = docObj
        nextTick(() => {
          treeRef.value!.setCurrentKey(docObj.id)
        })
      }
    }
  })
}
// 获取档案元数据
const getArchiveMetas = () => {
  archiveManage.getArchiveMetas(route.query.archiveId).then((res: any) => {
    if (res.success) {
      metaDataList.value = [...res.data] || []
    }
  })
}
// 点击树形节点
const handleNodeClick = (data: any) => {
  if (data.children == null) {
    actDoc.value = data
  }
}
// 切换卡片折叠
/* const toggleCollapse = (item: any) => {
  docTreeList.value = item.content
  clickArchiveId.value = item.archiveId
  if (actArchiveId.value === item.archiveId) {
    actArchiveId.value = ''
  } else {
    actArchiveId.value = item.archiveId
  }
} */
onBeforeMount(() => {
  getViewDocumentById()
  getArchiveMetas()
})
</script>

<template>
  <div class="doc-pdf-wrap">
    <div class="doc-pdf">
      <div class="doc-pdf-head">
        <h3>档案详情</h3>
      </div>
      <div class="doc-pdf-cont">
        <el-row style="height: 100%">
          <el-col :span="4" style="height: 100%">
            <el-scrollbar style="height: 100%" wrap-class="scrollbar-wrapper">
              <div class="doc-list">
                <div class="doc-head">
                  <!-- @click="toggleCollapse(docDetail)" -->
                  <!--<div class="title">{{item.patientName}}</div>-->
                  <!--<p>{{item.medicalRecordNumber}} {{item.disDepartment}}</p>-->
                  <p>文档名称：{{ docDetail.archiveName }}</p>
                  <p>创建时间：{{ docDetail.createDateTime }}</p>
                </div>
                <el-collapse-transition>
                  <div class="doc-cont">
                    <el-tree
                      ref="treeRef"
                      :data="docDetail.content"
                      node-key="id"
                      default-expand-all
                      highlight-current
                      :expand-on-click-node="false"
                      @node-click="handleNodeClick"
                    >
                      <template #default="{ data }">
                        <span class="custom-tree-node clearfix">
                          <el-icon
                            v-show="!data.children"
                            size="16px"
                            style="margin: 7px 2px 7px 0"
                            :color="
                              data.mimeType === 'application/pdf'
                                ? '#f56c6c'
                                : '#409eff'
                            "
                          >
                            <Document
                              v-if="data.mimeType == 'application/pdf'"
                            />
                            <VideoPlay
                              v-if="data.mimeType == 'application/mp4'"
                            />
                          </el-icon>
                          <span class="title-name" :title="data.name">{{
                            data.name
                          }}</span>
                        </span>
                      </template>
                    </el-tree>
                  </div>
                </el-collapse-transition>
              </div>
            </el-scrollbar>
          </el-col>
          <el-col :span="16" style="height: 100%">
            <VideoPlayer
              style="width: 100%; height: 100%"
              v-show="actDoc && actDoc.mimeType == 'application/mp4'"
              :act-doc="actDoc"
            />
            <!-- <PdfViewer
              v-show="actDoc && actDoc.mimeType == 'application/pdf'"
              :act-doc="actDoc"
              :tree-list="docTreeList"
            /> -->
          </el-col>
          <el-col :span="4" style="height: 100%">
            <div class="meta-title">档案元数据</div>
            <el-scrollbar
              style="height: calc(100% - 38px)"
              wrap-class="scrollbar-wrapper"
            >
              <div v-if="metaDataList.length" class="meta-list">
                <p v-for="itm in metaDataList" :key="itm.id">
                  <span class="bold">{{ itm.key }}：</span>
                  <span :title="itm.value">{{ itm.value }}</span>
                </p>
              </div>
              <el-empty v-else description="暂无文档元数据"></el-empty>
            </el-scrollbar>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-pdf-wrap {
  height: 100%;

  .doc-pdf {
    height: 100%;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    overflow: hidden;
    border-top: 3px solid #337ecc;
    border-radius: 3px;

    .doc-pdf-head {
      height: 49px;
      line-height: 48px;
      padding: 0 10px;
      color: #444;
      border-bottom: 1px solid #f4f4f4;

      h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 0;
      }
    }

    .doc-pdf-cont {
      padding: 10px;
      height: calc(100% - 49px);

      .med-act {
        height: 30px;
        margin-bottom: 10px;
      }

      .doc-list {
        padding-right: 9px;
        padding-bottom: 10px;

        .doc-head {
          cursor: pointer;
          padding: 10px 15px;
          background: #5bc0de;
          color: #fff;
          border-radius: 3px;

          .title {
            height: 40px;
            line-height: 40px;
            font-size: 18px;
          }

          p {
            font-size: 14px;
            line-height: 24px;
          }
        }

        .doc-cont {
          .label-title {
            vertical-align: middle;
          }
        }
      }

      .detail {
        height: 100%;

        .detail-head {
          height: 50px;
          line-height: 49px;
          font-size: 16px;
          border-bottom: 1px solid #f4f4f4;
          margin-bottom: 10px;
          margin-right: 10px;
        }

        .detail-cont {
          height: calc(100% - 60px);

          .card-item {
            /* border-top: 1px solid #f4f4f4; */
            border-radius: 3px;

            /* border-top: 3px solid #5bc0de; */
            box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
            margin-bottom: 5px;
            margin-right: 10px;

            .title {
              padding: 0 5px;
              height: 50px;
              line-height: 49px;
              font-size: 14px;
              font-weight: bold;

              /* border-bottom: 1px solid #f4f4f4; */
              border-left: 3px solid #5bc0de;
              cursor: pointer;
              position: relative;

              .check_btn {
                position: absolute;
                top: 14px;
                right: 5px;
              }
            }

            .cont {
              background: #ecf5ff;

              p {
                padding: 0 15px;
                line-height: 34px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;

                span:first-child {
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }

    .meta-title {
      margin-left: 10px;
      font-size: 18px;
      line-height: 37px;
      border-bottom: 1px solid #dcdfe6;
    }

    .meta-list {
      padding: 10px;

      p {
        padding: 0 10px;
        line-height: 38px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-shadow: 0 0 12px rgb(0 0 0 / 12%);
        border-left: 3px solid #409eff;
        border-radius: 4px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.doc-pdf-wrap {
  .el-tree {
    .el-tree-node__label {
      display: inline-flex;
      width: calc(100% - 26px);

      .custom-tree-node {
        display: inline-flex;
        width: 100%;

        .title-name {
          width: calc(100% - 30px);
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
