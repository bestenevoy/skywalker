// 暴露给前端公共静态变量 from .env

const FrontendStatic = {
  isDev: process.env.NODE_ENV === "development",
  BAUDU_ANALYSIS_ID: process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID,
}

export default FrontendStatic
