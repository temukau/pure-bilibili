import { onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash'

/**
 * main容器滚动到底部钩子
 * @param func 回调函数
 */
export function useMainReachBottom(func: () => void) {
  const main = document.getElementById('main') as HTMLElement

  function scrollListener() {
    const mainHeight = main.clientHeight
    const scrollTop = main.scrollTop
    const scrollHeight = main.scrollHeight

    if (scrollTop + mainHeight + 50 >= scrollHeight) {
      console.debug('main reach bottom')
      func()
    }
  }

  const throttledScrollListener = throttle(scrollListener, 300)

  onMounted(() => {
    console.debug('scroll listener added')
    main.addEventListener('scroll', throttledScrollListener)
  })

  onUnmounted(() => {
    console.debug('scroll listener removed')
    main.removeEventListener('scroll', throttledScrollListener)
  })
}
