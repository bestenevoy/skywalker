import {FrontendStatic, BackendStatic} from './EevConstant'

export const getAnalyticsTag = (id = FrontendStatic.BAUDU_ANALYSIS_ID) => {
  if (!id || FrontendStatic.isDev) return {__html: ''}
  return {
    __html: `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?${id}";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();`,
  }
}
export {default as getRandomImage} from './getRandomImage'
export {FrontendStatic, BackendStatic}