import {fileURLToPath, URL} from 'node:url'

import {defineConfig, HttpProxy, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [
            vue(),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_PROXY_URL,
                    changeOrigin: true,
                    secure: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                    configure: configureProxy
                },
                '/passport': {
                    target: env.VITE_PROXY_PASSPORT_URL,
                    changeOrigin: true,
                    secure: true,
                    rewrite: (path) => path.replace(/^\/passport/, ''),
                    configure: configureProxy
                },
                '/vc': {
                    target: env.VITE_PROXY_API_VC_URL,
                    changeOrigin: true,
                    secure: true,
                    rewrite: (path) => path.replace(/^\/vc/, ''),
                    configure: (proxy) => {
                        proxy.on('proxyReq', (proxyReq, req, res) => {
                            proxyReq.setHeader("Origin", "https://t.bilibili.com")
                            proxyReq.setHeader('Referer', "https://t.bilibili.com/")
                        })
                    }
                }
            }
        }
    }
});

function configureProxy(proxy: HttpProxy.Server) {
    proxy.on('proxyReq', (proxyReq, req, res) => {
        proxyReq.setHeader('Referer', "https://www.bilibili.com/")
    })
}