interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_BASE_API: string
    readonly VITE_APP_PROJECT_ENV: string
    readonly VITE_APP_PLATFORM_NAME:string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv,
  }
  declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
