// 全局刷新按钮点击事件
import {throttle} from "lodash";
import {onMounted, onUnmounted} from "vue";

export function useGlobalRefresh(func: () => void) {

    const globalRefreshBtn = document.getElementById('global-refresh-btn') as HTMLElement

    const refreshBtnClickEvent = () => {
        window.scrollTo(0, 0)
        globalRefreshBtn.classList.add("active")
        func()
        setTimeout(() => {
            globalRefreshBtn.classList.remove("active")
        }, 300)
    }

    const throttledFunc = throttle(refreshBtnClickEvent, 300)

    onMounted(() => {
        globalRefreshBtn.addEventListener('click', throttledFunc)
    })

    onUnmounted(() => {
        globalRefreshBtn.removeEventListener('click', throttledFunc)
    })

}