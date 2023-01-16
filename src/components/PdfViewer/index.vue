<script lang="ts" setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { archiveFileManage } from '@/api'

const props = defineProps<{
  actDoc: any
}>()
const docState = ref(0) // 记录当前文档的状态，0为未加载，1为加载完成
const pdfLoading = ref(true) // loading
const isLoaded = ref(false) // pdf.js是否加载
const verifyForm = ref({
  signCode: 200,
  signName: 'RSA测试单位证书',
  signDate: '2021-12-30 18:00:51',
  signMsg: '有效',
}) // 验签结果表单
const dialogVisible = ref(false) // 验签弹框
// docOpened事件
const docOpened = () => {
  docState.value = 1
}
// 点击签章事件
// const clickSignature = () => {
//   dialogVisible.value = true
// }
// 打开文档
const openDocument = (name: any, annot: any, wm: any, anConfig: any) => {
  const viewer: any = document.getElementById('pdfScanner') as HTMLIFrameElement
  if (!name) return
  /* if (!sensi) viewer.PDFViewerApplicationOptions.set("sensWords", sensi)
  else viewer.PDFViewerApplicationOptions.set("sensWords", null) */
  if (annot)
    viewer.contentWindow.PDFViewerApplicationOptions.set('annotArray', annot)
  else viewer.contentWindow.PDFViewerApplicationOptions.set('annotArray', null)
  if (wm)
    viewer.contentWindow.PDFViewerApplicationOptions.set('waterMarkOption', wm)
  else
    viewer.contentWindow.PDFViewerApplicationOptions.set(
      'waterMarkOption',
      null
    )
  if (anConfig)
    viewer.contentWindow.PDFViewerApplicationOptions.set(
      'annotConfig',
      anConfig
    )
  else viewer.contentWindow.PDFViewerApplicationOptions.set('annotConfig', null)

  // 让文档状态恢复为初始状态
  docState.value = 0
  isLoaded.value = true
  viewer.contentWindow.PDFViewerApplication.open(name)
}
// 加载pdf及水印
const loadPdfWater = (doc: any) => {
  pdfLoading.value = true
  archiveFileManage.getArchiveFileStream(doc.id).then((res: any) => {
    pdfLoading.value = false
    const waterMarkOption = {
      text: '',
      time: '',
      // dash表示水印文字的间隔
      dash: 40,
      color: 'rgba(100, 100, 100, 0.2)',
      // 字体大小，单位是像素
      fontSize: 30,
      fontName: '黑体',
      // 逆时针为正，顺时针为负
      rotation: 40,
      startX: 0,
      startY: 0,
      // 水印文字行距
      lineGap: 80,
    }
    if (res.data) {
      openDocument(
        window.URL.createObjectURL(new Blob([res.data])),
        null,
        waterMarkOption,
        null
      )
    }
    isLoaded.value = true // 不管文件是否存只加载一次
  })
}
// webviewerloaded事件
const webviewerloaded = () => {
  // 在webviewerloaded事件响应函数内我们可以做一些在显示框架构建完毕，但是pdf尚未render的一些工作
  // 比如，可以在这里设置如下的一些选项
  const viewerWnd: any = document.getElementById(
    'pdfScanner'
  ) as HTMLIFrameElement
  const viewerDoc: any = document.getElementById(
    'pdfScanner'
  ) as HTMLIFrameElement
  /**
   * 需要设置disablePreferences为true，preferences可以理解为全局配置（产品配置）， appoption可以理解为用户配置（项目配置）
   * disablePreferences的作用是让全局配置不生效，只使用用户配置；
   * 如果不设置disablePreferences为true，那么当用户配置与全局配置有相同配置的时候，全局配置覆盖用户配置
   * */
  viewerWnd.contentWindow.PDFViewerApplicationOptions.set(
    'defaultZoomValue',
    'page-width'
  )
  viewerWnd.contentWindow.PDFViewerApplicationOptions.set(
    'disablePreferences',
    true
  )
  // 默认关闭侧边栏
  viewerWnd.contentWindow.PDFViewerApplicationOptions.set(
    'sidebarViewOnLoad',
    0
  )
  // 禁止历史记录
  viewerWnd.contentWindow.PDFViewerApplicationOptions.set(
    'disableHistory',
    true
  )
  // 设置日志级别，0：关闭所有日志，1：error，2：warn，3：info，4：trace，5：debug；
  // 该日志级别仅影响bjca的日志，原有的pdf.js当中的日志并未影响；
  viewerWnd.contentWindow.PDFViewerApplicationOptions.set('LogLevel', 3)
  /**
   * The position in the document upon load.
   * -1 = Default (uses OpenAction if available, otherwise equal to `viewOnLoad = 0`).
   * 0 = The last viewed page/position.
   *  1 = The initial page/position.",
   * */
  viewerWnd.contentWindow.PDFViewerApplicationOptions.set('viewOnLoad', 1)
  // 隐藏上一页按钮
  viewerDoc.contentDocument.getElementById('previous').style.display = 'none'
  // 隐藏下一页按钮
  viewerDoc.contentDocument.getElementById('next').style.display = 'none'
  // 隐藏侧边栏开关按钮
  viewerDoc.contentDocument.getElementById('sidebarToggle').style.display =
    'none'
  // 隐藏搜索按钮
  viewerDoc.contentDocument.getElementById('viewFind').style.display = 'none'
  // 隐藏演示模式切换按钮
  viewerDoc.contentDocument.getElementById('presentationMode').style.display =
    'none'
  // 隐藏打开文件按钮
  viewerDoc.contentDocument.getElementById('openFile').style.display = 'none'
  // 隐藏打印按钮
  viewerDoc.contentDocument.getElementById('print').style.display = 'none'
  // 隐藏下载按钮
  viewerDoc.contentDocument.getElementById('download').style.display = 'none'
  // 隐藏选择工具按钮
  viewerDoc.contentDocument.getElementById('selectTool').style.display = 'none'
  // 隐藏批注按钮
  viewerDoc.contentDocument.getElementById('lineAnnot').style.display = 'none'
  // 隐藏收藏按钮
  viewerDoc.contentDocument.getElementById('viewBookmark').style.display =
    'none'
  // toolbarViewerRight目前不能隐藏，否则整个右侧工具栏都会隐藏，而批注按钮也在右侧工具栏上
  // viewerDoc.contentDocument.getElementById('toolbarViewerRight').style.display = 'none'
  // 隐藏第二工具栏开关按钮
  viewerDoc.contentDocument.getElementById(
    'secondaryToolbarToggle'
  ).style.display = 'none'

  // 加载pdf
  loadPdfWater(props.actDoc)
}
// 加载pdfjs
const pdfjsLoad = () => {
  const container = document.getElementById('pdf-wrap') as HTMLElement
  const iframe = document.createElement('iframe') as HTMLIFrameElement
  iframe.src = '/static/pdf/web/viewer.html'
  iframe.width = '100%'
  iframe.height = '100%'
  iframe.style.border = 'none'
  iframe.id = 'pdfScanner'
  container.appendChild(iframe)
  document.addEventListener('webviewerloaded', webviewerloaded)
  // 点击签章事件
  // document.addEventListener('clickSignature', clickSignature);
  // pdf打开成功
  document.addEventListener('docOpened', docOpened)
}
// 上一页
const prevPage = () => {
  if (docState.value === 0) return
  const viewer: any = document.getElementById('pdfScanner') as HTMLIFrameElement
  const curPage = viewer.contentWindow.PDFViewerApplication.page
  if (curPage !== 1) {
    viewer.PDFViewerApplication.page = curPage - 1
  }
}
// 下一页
const nextPage = () => {
  if (docState.value === 0) return
  const viewer: any = document.getElementById('pdfScanner') as HTMLIFrameElement
  const pageTotal = viewer.contentWindow.PDFViewerApplication.pagesCount
  const curPage = viewer.contentWindow.PDFViewerApplication.page
  if (curPage !== pageTotal) {
    viewer.PDFViewerApplication.page = curPage + 1
  }
}
watch(
  () => props.actDoc,
  (newVal: any) => {
    if (newVal && newVal.mimeType === 'application/pdf') {
      if (!isLoaded.value) {
        pdfjsLoad()
      } else {
        loadPdfWater(newVal)
      }
    }
  },
  { deep: true }
)
onBeforeUnmount(() => {
  document.removeEventListener('webviewerloaded', webviewerloaded)
  // document.removeEventListener('clickSignature', clickSignature)
  document.removeEventListener('docOpened', docOpened)
})
</script>

<template>
  <div id="pdf-wrap" v-loading="pdfLoading" class="pdf-viewer">
    <span class="pre-canvas" @click="prevPage">
      <el-icon :size="16">
        <CaretTop />
      </el-icon>
    </span>
    <span class="next-canvas" @click="nextPage">
      <el-icon :size="16">
        <CaretBottom />
      </el-icon>
    </span>
    <el-dialog
      v-model="dialogVisible"
      title="验签结果"
      width="400px"
      class="signature-dialog"
    >
      <div class="dialog-cont">
        <div class="sign-title">
          <i
            :class="
              verifyForm.signCode == 200 ? 'el-icon-success' : 'el-icon-error'
            "
          ></i>
          <span>{{
            verifyForm.signCode == 200 ? '验签通过' : '验签失败'
          }}</span>
        </div>
        <p><span class="title">签名名称：</span> {{ verifyForm.signName }}</p>
        <p><span class="title">签名时间：</span> {{ verifyForm.signDate }}</p>
        <p><span class="title">签名有效性：</span> {{ verifyForm.signMsg }}</p>
      </div>
      <template #footer>
        <el-button size="small" type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.pdf-viewer {
  width: 100%;
  height: 100%;
  position: relative;

  .pre-canvas,
  .next-canvas {
    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 7px;
    box-shadow: 0 0 6px rgb(0 0 0 / 12%);
    background: #fff;
    color: #409eff;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background: #f2f6fc;
    }
  }

  .pre-canvas {
    position: absolute;
    right: 20px;
    bottom: 70px;
    z-index: 1;
  }

  .next-canvas {
    position: absolute;
    right: 20px;
    bottom: 30px;
    z-index: 1;
  }
}
</style>
<style lang="scss">
.pdf-viewer {
  .signature-dialog {
    .dialog-cont {
      .sign-title {
        text-align: center;
        line-height: 58px;
        font-weight: bold;
        font-size: 18px;

        i {
          font-size: 24px;
          vertical-align: middle;

          &.el-icon-success {
            color: #67c23a;
          }

          &.el-icon-error {
            color: #f56c6c;
          }
        }
      }

      p {
        line-height: 38px;

        .title {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
