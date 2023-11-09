import {defineStore} from 'pinia'
import {ObjectUtil} from '@/utils/object-util'
import {UserApi} from '@/api/modules/user-api'
import {PassportApi} from '@/api/modules/passport-api'
import type {BiliLevelExp, BiliMyInfo} from '@/type/myinfo'

export const useUserStore = defineStore('user-state', {
  state: () => ({
    fetching: false,
    isLogin: false,
    profile: {} as BiliMyInfo, // Initialize with an empty object of type Profile
    level_exp: {} as BiliLevelExp, // Initialize with an empty object of type LevelExp
    coins: 0,
    following: 0,
    follower: 0
  }),

  actions: {
    reset() {
      this.isLogin = false
      this.fetching = false
      this.coins = 0
      this.following = 0
      this.follower = 0
      ObjectUtil.resetObject(this.profile)
      ObjectUtil.resetObject(this.level_exp)
      document.cookie = ''
    },

    async fetchProfile() {
      this.fetching = true
      try {
        const res = await UserApi.getMyInfo()
        if (res.code === 0) {
          const { profile, level_exp, coins, following, follower } = res.data
          this.profile = profile
          this.level_exp = level_exp
          this.coins = coins
          this.following = following
          this.follower = follower
          this.isLogin = true
        } else {
          this.reset()
        }
      } catch (error) {
        this.reset()
      } finally {
        this.fetching = false
      }
    },

    async logout() {
      try {
        const res = await PassportApi.logout()
        if (res.data.code === 0) {
          this.reset()
        }
      } catch (error) {
        console.error(error)
      }
    }
  },

  persist: true
})
