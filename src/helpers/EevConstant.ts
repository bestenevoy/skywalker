// 暴露给前端公共静态变量 from .env
// env constant
const FrontendStatic = {
    isDev: process.env.NODE_ENV === "development",
    ANALYSIS_URL: process.env.NEXT_PUBLIC_ANALYSIS_URL,
}

const BackendStatic = {
    isDev: process.env.NODE_ENV === "development",
    BEIAN_ID: process.env.NEXT_PUBLIC_BEIAN_ID || '',
}
export {FrontendStatic, BackendStatic}