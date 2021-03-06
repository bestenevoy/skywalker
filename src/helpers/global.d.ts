
declare interface Window {
  // env constant
  __APP__: {
    NEXT_PUBLIC_BAIDU_ANALYTICS_ID?: string,
    isDev: boolean,
  }
}

interface Dict<T> {
  [key: string]: T | undefined
}