<script lang="ts" setup>
import { ref, onBeforeMount, nextTick, watch } from 'vue'
import PdfViewer from '@/components/PdfViewer/index.vue'
import VideoPlayer from '@/components/VideoPlayer/index.vue'
// import { archiveTable } from '@/api'

const detailTree: any = ref(null)
const actArchiveId: any = ref(0)
const clickArchiveId = ref(0)
const actDoc: any = ref(null)
const docDetailList: any = ref([])
const docTreeList = ref([])
const defaultProps = ref({
  children: 'children',
  label: 'name',
})
// 获取就诊文档目录
const getViewDocumentById = () => {
  // archiveTable.viewArchive(route.query.archiveId).then((res: any) => {
  //   if (res.success) {
  //     // if(res.data.length>0) {
  //     actArchiveId.value = res.data.archiveId
  //     clickArchiveId.value = res.data.archiveId
  //     docTreeList.value = res.data.content
  //     // }
  //     docDetailList.value = [res.data]
  //     const docObj = treeDataGetNode(res.data.content, true)[0]
  //     if (docObj) {
  //       actDoc.value = docObj
  //     }
  //   }
  // })
}
// 点击树形节点
const handleNodeClick = (data: any) => {
  if (data.children == null) {
    actDoc.value = data
  }
}
// 切换卡片折叠
const toggleCollapse = (item: any) => {
  docTreeList.value = item.content
  clickArchiveId.value = item.archiveId
  if (actArchiveId.value === item.archiveId) {
    actArchiveId.value = ''
  } else {
    actArchiveId.value = item.archiveId
  }
}

watch(
  actDoc,
  (newVal) => {
    if (newVal) {
      nextTick(() => {
        detailTree.value.setCurrentKey(newVal.id)
      })
    }
  },
  { deep: true }
)
onBeforeMount(() => {
  getViewDocumentById()
})
</script>

<template>
  <div class="doc_pdf_wrap">
    <div class="doc_pdf">
      <div class="doc_pdf_head">
        <h3>文档详情</h3>
      </div>
      <div class="doc_pdf_cont">
        <el-row style="height: 100%">
          <el-col :span="4" style="height: 100%">
            <el-scrollbar wrap-class="scrollbar-wrapper" style="height: 100%">
              <div
                v-for="(item, index) in docDetailList"
                :key="index"
                class="doc_list"
              >
                <div class="doc_head" @click="toggleCollapse(item)">
                  <!--<div class="title">{{item.patientName}}</div>-->
                  <!--<p>{{item.medicalRecordNumber}} {{item.disDepartment}}</p>-->
                  <p>文档名称：{{ item.archiveName }}</p>
                  <p>创建时间：{{ item.createDateTime }}</p>
                </div>
                <el-collapse-transition>
                  <div v-show="item.archiveId == actArchiveId" class="doc_cont">
                    <el-tree
                      ref="detailTree"
                      :data="item.content"
                      :props="defaultProps"
                      node-key="id"
                      :indent="12"
                      default-expand-all
                      highlight-current
                      :expand-on-click-node="false"
                      @node-click="handleNodeClick"
                    >
                      <template #default="{ node, data }">
                        <!--<el-icon v-show="data.children == null && data.scan" color="#909399"><Printer /></el-icon>-->
                        <el-icon
                          v-show="data.children == null"
                          :color="
                            data.mimeType == 'application/pdf'
                              ? '#f56c6c'
                              : '#409eff'
                          "
                          style="vertical-align: text-bottom"
                        >
                          <Document v-if="data.mimeType == 'application/pdf'" />
                          <VideoPlay
                            v-if="data.mimeType == 'application/mp4'"
                          />
                        </el-icon>
                        <span
                          class="label_title"
                          :style="{
                            color: data.disabled ? '#C0C4CC' : '#606266',
                            marginLeft: '2px',
                          }"
                          :title="node.label"
                          >{{ node.label }}</span
                        >
                      </template>
                    </el-tree>
                  </div>
                </el-collapse-transition>
              </div>
            </el-scrollbar>
          </el-col>
          <el-col :span="20" style="height: 100%">
            <VideoPlayer
              style="width: 100%; height: 100%"
              v-show="actDoc && actDoc.mimeType == 'application/mp4'"
              :act-doc="actDoc"
            />
            <PdfViewer
              v-show="actDoc && actDoc.mimeType == 'application/pdf'"
              :act-doc="actDoc"
              :tree-list="docTreeList"
            />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc_pdf_wrap {
  height: 100%;

  .doc_pdf {
    height: 100%;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    overflow: hidden;
    border-top: 3px solid #3c8dbc;
    border-radius: 3px;

    .doc_pdf_head {
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

    .doc_pdf_cont {
      padding: 10px;
      height: calc(100% - 49px);

      .med_act {
        height: 30px;
        margin-bottom: 10px;
      }

      .doc_list {
        padding-right: 9px;
        padding-bottom: 10px;

        .doc_head {
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

        .doc_cont {
          .label_title {
            vertical-align: middle;
          }
        }
      }

      .detail {
        height: 100%;

        .detail_head {
          height: 50px;
          line-height: 49px;
          font-size: 16px;
          border-bottom: 1px solid #f4f4f4;
          margin-bottom: 10px;
          margin-right: 10px;
        }

        .detail_cont {
          height: calc(100% - 60px);

          .card_item {
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

      .toggle_left_btn,
      .toggle_right_btn {
        position: absolute;
        top: 50%;
        right: 3px;
        width: 12px;
        height: 30px;
        cursor: pointer;
        margin-top: -15px;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background: #79cdfb;
        border-radius: 6px;
      }

      .toggle_left_btn {
        right: 0;
        left: 3px;
      }
    }
  }
}
</style>

<style lang="scss">
.doc_pdf_wrap {
  .el-input-group {
    .el-input__inner {
      height: 30px;
      line-height: 30px;
    }

    .el-input-group__append {
      padding: 0 10px;
    }
  }

  .detail {
    .detail_head {
      .el-input__inner {
        font-size: 16px;
        border: none;
      }

      .el-input__suffix {
        .el-input__icon {
          color: #606266;
        }
      }
    }
  }
}
</style>
