import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useModalStore = defineStore('modal-state', {
  state: () => ({
    modals: {
      loginModal: false
    },
    hasAnyModelVisible: false
  }),

  getters: {
    hasAnyModalVisible(): boolean {
      return Object.values(this.modals).some((isVisible) => isVisible) || false
    },
    loginModalVisible(): boolean {
      return this.modals.loginModal
    },
    modalVisible() {
      return (modelName: string) => {
        return this.modals[modelName as keyof typeof this.modals]
      }
    }
  },

  actions: {
    toggleLoginModal() {
      this.modals.loginModal = !this.modals.loginModal
    },

    openLoginModal() {
      this.modals.loginModal = true
    },

    closeLoginModal() {
      this.modals.loginModal = false
    }
  }
})
