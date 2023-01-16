<script lang="ts" setup>
import { ref, onBeforeUnmount, watch, nextTick } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { archiveFileManage } from '@/api'

const props = defineProps({
  actDoc: Object,
})
videojs.addLanguage('zh-CN', {
  Play: '播放',
  Pause: '暂停',
  'Play Video': '播放视频',
  Fullscreen: '全屏',
  'Non-Fullscreen': '退出全屏',
  Mute: '静音',
  Unmute: '取消静音',
  Replay: '重新播放',
})
const player: any = ref(null)
const videoPlayer: any = ref(null)
// 加载video视频
const loadVideoPlayer = (doc: any) => {
  archiveFileManage.getArchiveFileStream(doc.id).then((res: any) => {
    nextTick(() => {
      const videoOptions = {
        language: 'zh-CN',
        autoplay: false,
        controls: true,
        bigPlayButton: true,
        controlBar: {
          pictureInPictureToggle: false,
        },
        sources: [
          {
            src: window.URL.createObjectURL(new Blob([res.data])),
            type: 'video/mp4',
          },
        ],
      }
      player.value = videojs(videoPlayer, videoOptions, () => {
        // this.player.log('onPlayerReady', this);
      })
    })
  })
}
watch(
  () => props.actDoc,
  (newVal) => {
    if (newVal && newVal.mimeType === 'application/mp4') {
      loadVideoPlayer(newVal)
    }
  },
  { deep: true }
)
onBeforeUnmount(() => {
  if (player.value) {
    player.value.dispose()
  }
})
</script>

<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<style lang="scss" scoped>
.video-js {
  width: 100%;
  height: 100%;
}
</style>
