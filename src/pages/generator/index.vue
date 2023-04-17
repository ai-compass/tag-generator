<script lang='ts' setup>
import { useClipboard } from '@vueuse/core'
import config, { goddessList } from './config'
import type { ConfigItem, ItemList } from './config'
type langue = 'zh' | 'en'
type sourceMode = 'normal' | 'goddess'
const configList = ref<ConfigItem[]>(config)
const actived = ref(0)
const showEnglish = ref(true)
const zhOrEn = ref<langue>('zh')
const mode = ref<sourceMode>('normal')
const input = ref('')
const { copy, copied } = useClipboard({ source: input })

const getInput = () => {
  const selectList: string[] = []
  configList.value.forEach((c) => {
    c.list.forEach((l) => {
      l.list.forEach((i) => {
        if (i.selected)
          selectList.push(zhOrEn.value === 'en' ? i.english : i.chinese)
      })
    })
  })
  const en_quality = 'UHD, ccurate, textured skin, super detail, high details, award winning, best quality, high quality, 8k'
  const zh_quality = '超高清，准确，质感皮肤，非常详细，高细节，屡获殊荣，最佳质量，高质量，8K'
  const quality = zhOrEn.value === 'en' ? `,${en_quality}` : `，${zh_quality}`
  let text = ''
  text = selectList.join(zhOrEn.value === 'en' ? ',' : '，')
  if (text && mode.value === 'goddess')
    text += quality
  input.value = text
}

watch(configList, getInput, { deep: true })

// 切换 Tab
const changeTab = (index: number) => {
  actived.value = index
}

// 选择
const selectItem = (item: ItemList) => {
  if (!item.selected)
    configList.value[actived.value].times += 1
  else
    configList.value[actived.value].times -= 1

  item.selected = !item.selected
}

// 切换语言
const changeLangue = (lang: langue) => {
  zhOrEn.value = lang
  getInput()
}

// 随机
const randomConfig = () => {
  configList.value.forEach((c) => {
    c.list.forEach((l) => {
      // 先清空所有选中
      l.list.forEach(i => i.selected = false)
    })

    c.times = 1
    const random = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1) + min)
    const cRandom = random(c.list.length - 1, 0)
    const l = c.list[cRandom]
    const lRandom = random(l.list.length - 1, 0)
    l.list[lRandom].selected = true
  })
}

const clearInput = () => {
  input.value = ''
  configList.value.forEach((c) => {
    c.times = 0
    c.list.forEach((l) => {
      // 先清空所有选中
      l.list.forEach(i => i.selected = false)
    })
  })
}

const changeMode = (m: sourceMode) => {
  mode.value = m
  if (mode.value === 'goddess')
    configList.value = goddessList
  else
    configList.value = config
  clearInput()
}
</script>

<template>
  <div class="tag-container max-w-1424px m-auto">
    <div class="tag-title flex items-center h-[56px] text-xl text-#777e90">
      咒语生成器
    </div>
    <main class="flex mt-4">
      <div class="w-[1080px] rounded-xl border-2 border-#202022 overflow-hidden" style="box-shadow: rgba(255, 255, 255, 0.08) 0px 1px 4px, rgba(255, 255, 255, 0.08) 0px 0px 16px;">
        <div class="tag-tabs flex justify-around bg-#24262e">
          <div v-for="(c, index) in configList" :key="c.name" :class="actived === index ? `bg-#141416` : ''" class="relative py-12px px-30px text-14px text-#beb5c4 cursor-pointer" @click="changeTab(index)">
            {{ c.name }}
            <span v-if="c.times > 0" class="text-xs leading-none px-1.2 py-0.5 bg-red rounded-full text-#fff absolute top-2 right-2">{{ c.times }}</span>
          </div>
        </div>
        <div class="tag-tab-container p-4">
          <div v-for="l in configList[actived].list" :key="l.type" class="text-#fff">
            <div class="mb-8px">
              {{ l.type }}
            </div>
            <div class="flex justify-start flex-wrap gap-2 mb-10px">
              <div v-for="i in l.list" :key="i.english" :class="i.selected ? `bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-#fff` : ''" class="text-12px px-8px py-4px text-#b1b5c4 bg-#23262f rounded-md cursor-pointer" @click="selectItem(i)">
                {{ i.chinese }}
                <template v-if="showEnglish">
                  {{ i.english }}
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 ml-4">
        <div class="sticky h-full top-[72px]" style="max-height: calc(100vh - 80px);">
          <div class="bg-#23262f rounded-xl p-4 pb-12 h-full min-h-fit text-neutral-800 text-sm relative" style="max-height: calc(100% - 64px);">
            <div class="text-input h-full">
              <textarea v-model="input" placeholder="请选择标签" class="text-area" />
            </div>
            <div class="flex justify-between items-center absolute bottom-3 left-4 right-4 text-neutral-500">
              <div class="flex justify-start items-center">
                <div class="p-[2px] rounded bg-#353945 flex items-center text-xs leading-4 text-center cursor-pointer mr-3">
                  <div :class="'zh' === zhOrEn ? 'bg-#7851ec text-#fcfcfd' : ''" class="w-8 h-4 rounded-sm text-xs leading-[14px] font-medium" @click="changeLangue('zh')">
                    中文
                  </div>
                  <div :class="'en' === zhOrEn ? 'bg-#7851ec text-#fcfcfd' : ''" class="w-8 h-4 rounded-sm ml-1 text-xs leading-[14px] font-medium" @click="changeLangue('en')">
                    英文
                  </div>
                </div>
                <div class="flex justify-center items-center mr-3 cursor-pointer transition-colors hover:text-#7851ec text-xs" @click="randomConfig">
                  <span>随机</span>
                  <i class="i-carbon:shuffle trade-icon trade-icon-random leading-none ml-1" />
                </div>
                <div class="flex justify-center items-center cursor-pointer transition-colors hover:text-#7851ec text-xs" @click="copy(input)">
                  <span>复制</span>
                  <i class="i-carbon:copy trade-icon trade-icon-copy leading-none ml-1" />
                </div>
              </div>
              <div class="cursor-pointer transition-colors hover:text-primary text-xs" @click="clearInput">
                清空
              </div>
            </div>
          </div>
          <div class="bg-#23262f rounded-xl mt-2 p-4  min-h-fit text-neutral-500 text-sm relative">
            <div class="flex justify-start items-center">
              <div class="p-[2px] rounded bg-#353945 flex items-center text-xs leading-4 text-center cursor-pointer mr-3">
                <div :class="'normal' === mode ? 'bg-#7851ec text-#fcfcfd' : ''" class="w-16 h-4 rounded-sm text-xs leading-[14px] font-medium" @click="changeMode('normal')">
                  普通模式
                </div>
                <div :class="'goddess' === mode ? 'bg-#7851ec text-#fcfcfd' : ''" class="w-16 h-4 rounded-sm ml-1 text-xs leading-[14px] font-medium" @click="changeMode('goddess')">
                  女神模式
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div id="toast-success" :class="copied ? 'top-2' : '-top-20'" class="fixed left-50% -translate-x-50% flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-200" role="alert">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ml-3 text-sm font-normal">
        复制成功！
      </div>
      <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.text-input textarea {
  --neutral-600-raw: 230 232 236;
  background: transparent !important;
  border: none;
  padding: 0;
  box-shadow: none !important;
  height: 100% !important;
  resize: none;
  word-break: break-all;
  font-size: 0.875rem;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgb(var(--neutral-600-raw) / var(--tw-text-opacity));
}
textarea.text-area {
  max-width: 100%;
  height: auto;
  min-height: 28px;
  line-height: 1.66667;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
}
.text-area {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 3px 7px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 12px;
  line-height: 1.66667;
  background-color: transparent;
  background-image: none;
  border: 1px solid #434343;
  border-radius: 2px;
  transition: all 0.3s;
}
.text-area:focus {
  outline: 0;
}
textarea {
  touch-action: manipulation;
  overflow: auto;
  resize: vertical;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
