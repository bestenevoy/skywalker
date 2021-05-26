// 暴露给前端公共静态变量 from .env
// env constant
const FrontendStatic = {
  isDev: process.env.NODE_ENV === "development",
  BAUDU_ANALYSIS_ID: process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID,
}

const BackendStatic = {
  isDev: process.env.NODE_ENV === "development",
  BEIAN_ID: process.env.NEXT_PUBLIC_BEIAN_ID || '',
}
export { FrontendStatic, BackendStatic}