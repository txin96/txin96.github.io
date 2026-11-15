# 芝浦商事株式会社 — 多页面企业官网 V3

- 日语首页 `index.html`，英语首页 `en/index.html`。日英分开，每个栏目均有独立 HTML 页面。
- 页面：首页、About、Business、News、Company、Contact、Success。无独立隐私政策页面。
- 保留初版的 SVG 港口与船舶主视觉、业务领域三张 SVG 图片、核心日语文案。
- CSS 和 JavaScript 均使用相对路径，因此可直接双击本地 `index.html` 预览（如有浏览器安全限制，可启动 `python3 -m http.server 8080`）。
- Netlify Drop：解压后将整个 `shibaura-corporate-v3` 文件夹拖入 Netlify；或上传 ZIP。
- Netlify Forms：日文和英文分别使用 `contact-ja` / `contact-en` 表单。部署后在 Netlify Forms 中配置通知，测试真实提交。直接本地打开不会完成表单提交。
- 公司名称、法人状态、地址等仍为示例和待确认内容，请在正式上线前核实。
- 无外部图片依赖，网页上的 SVG 图片和背景可以离线显示。Google Fonts 使用在线字体，离线时自动回退系统字体。

## V4 fixes
- Header icon replaced with a visible LOGO placeholder across Japanese and English pages. No final logo or favicon assumed.
- Homepage hero now grows with its content, so DISCOVER MORE and SCROLL remain visible on shorter screens.

## V5 updates
- Removed the SCROLL indicator on both Japanese and English home pages.
- Reduced the empty space below DISCOVER MORE and kept all other content and the logo placeholder.
