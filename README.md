# SHIBAURA CORPORATION — V6

Japanese / English multi-page static corporate website.

## Pages
- Japanese: `index.html`, `business.html`, `news.html`, `company.html`, `contact.html`
- English: corresponding files under `en/`
- Contact submission confirmation: `success.html`, `en/success.html`

The independent About Us page has been removed. The company introduction remains on the homepage and `DISCOVER MORE` scrolls to that section. The hero spacing and all subpage title banners have been reduced.

## Preview
Double-click `index.html`, or run `python3 -m http.server 8080` in this directory. CSS and scripts use relative paths.

## Netlify
Drag this entire folder to Netlify Drop. Verify the company registration details and configure Netlify Forms before public launch.

V7: Contact header copy simplified, duplicate body intro removed, form centered. Removed bilingual card subtitles from Japanese and English Home / Business pages.


V8: Removed the standalone OUR PHILOSOPHY band from both language homepages. The introductory OUR APPROACH block retains company values and narrative; no separate About Us page is added.

## V9 updates
- Removed the entire OUR PERSPECTIVE / global-section block from both homepages.
- Reduced the Contact form section top padding from the default 120px to 44px on desktop and 25px on mobile.


## V10 adjustments
- Reduced homepage Japanese hero headline size and hero vertical padding.
- Reduced vertical padding on homepage sections only (desktop 120px → 70px; mobile 77px → 49px).
- Reduced section heading spacing and home contact CTA padding.
- Applied same layout refinements to Japanese and English homepage, keeping inner pages intact.


## V11 updates
- Japanese navigation uses 「お知らせ」 (already consistent in V10); English retains News.
- Active desktop navigation uses a thin underline without border or padding, keeping all menu items on the same baseline.


## V12 adjustments
- Business and Company pages (JP/EN): removed duplicated large content headings.
- The page banner title now appears once; content starts closer beneath it.
- Company profile table is centered at a comfortable reading width.
- Other pages, navigation, and image assets are unchanged.

## V13 update
- Company Profile: Add 「基本情報」 / "Basic Information" as a small subheading above the corporate data table, following a familiar Japanese corporate website hierarchy.
- Retain compact banner-to-content spacing and other V12 design elements.


## V14 中文版

- 简体中文版位于 `zh/`：`index.html`、`business.html`、`news.html`、`company.html`、`contact.html`、`success.html`。
- 页眉 JP / EN / 中文 可在对应页面互相跳转；日文仍为网站默认首页。
- 中文咨询表单 `contact-zh` 使用 Netlify Forms，部署后须在 Netlify 控制台测试提交、启用通知。
- 可以直接双击根目录 `index.html` 或 `zh/index.html` 本地预览样式和切换；Netlify 表单需线上测试。
- 公司仍在筹备中，法人资料、经营范围及宣传文字上线前须再次确认。


## V15 updates
- Company name 芝浦商事株式会社 is registered; removed incorporation-pending and provisional-name wording.
- Chinese page titles, body, navigation, and form labels use a consistent Simplified Chinese font stack to reduce vertical glyph misalignment.
- Official English registered name has not been verified; SHIBAURA CORPORATION is treated as a proposed English presentation name.


## V16 language dropdown
全站 18 个页面统一改用语言下拉菜单，显示当前语言（日本語 / English / 简体中文），展开后当前语言带勾选且不可点击，其他两项保持当前页面路径跳转。直接打开本地 HTML 或 Netlify 部署均可使用。


## V17 language menu refinement
Language selector style updated with reference to Mitsubishi Corporation's compact header language menu. Removed font-dependent glyph icons; a CSS chevron reliably points down when closed and up when open. All 3 languages and 18 pages keep their current-page language links.


## V18 adjustments
- News page: compact banner and 38px desktop / 24px mobile gap to the content, matching Business / Company.
- Business cards: number-to-title gap reduced 14px→8px; title-to-description gap increased 18px→24px. All Japanese, English and Chinese pages use the same shared CSS.

## V19 spacing update
Business cards: BUSINESS 01 to title = 4px; title to description = 4px. Applies to Japanese, English and Chinese pages via shared styles.css.


## V20 company page updates
- Company profile revised in Japanese, English and Simplified Chinese.
- Registered name: 芝浦商事株式会社. Capital: JPY 3,000,000. Head office: 2-9-1 Shibaura, Minato-ku, Tokyo 108-0023, Japan.
- No banking information published. Incorporation date and representative omitted pending confirmation.
- English company name appears in English company profile, not as a separate Japanese/Chinese profile row.

## V21 变更
- 三语言 Company 页面恢复成立日期、代表者占位项目（避免遗忘），不包含取引銀行。
- 中文版地址改成「邮编108-0023 日本东京都港区芝浦2丁目9番1号」，无括号。

## V22 — Contact spacing refinement
The top spacing of the Contact form section was reduced from 44px to 28px on desktop and from 25px to 16px on mobile. Applied to Japanese, English and Simplified Chinese Contact pages via shared CSS. Other page layouts remain unchanged.

## V23 Contact spacing
- Contact page banner bottom padding: 16px (desktop/mobile).
- Contact form section top padding: 16px (desktop/mobile).
- Applied to Japanese, English and Chinese pages.


## V24 updates
- Contact banners on JA/EN/ZH now use the same compact header layout as Business, News, and Company.
- Contact form top padding stays at 16px as requested.

## V25
- 桌面顶部导航文字由 12px 调整为 14px；窄屏下略微缩小导航间隔。手机版保持原来的 14px。

## V26 更新
- 会社概要 / Company / 公司概况：「基本情報」表格行文字统一为 14px（含移动端）。
- お問い合わせ / Contact / 联系我们：正文 `.contact.section-space` 的 `padding-top` 设置为 `0px`（含移动端）。
- `page-banner` 自身 padding 保持 V25 不变。


## V27 更新
Contact 表单的字段标签、输入内容和 placeholder 提示文字统一为 14px（日语、英语、中文）。不修改 Banner padding 或其他页面。


## V28 — Stable typography during initial load
- Changed the external Japanese webfont CSS from `font-display: swap` to `font-display: optional` so the browser does not replace already-painted text with newly loaded fonts and shift the layout.
- Added `preconnect` for Google Fonts hosts on all 18 pages to reduce first-visit font latency.
- Kept fonts, font sizes, navigation, spacing, artwork, and multi-language content otherwise unchanged.
- On slow connections the first view may use the local fallback font rather than waiting for Noto; subsequent visits can use cached Noto. No JavaScript or external build tooling required.


## V29 お知らせ / News
- Added company establishment and corporate website launch announcements in Japanese, English, and Simplified Chinese.
- Site launch currently displays November 2026 (month only); confirm the actual live publication date before releasing.
- Company establishment date is explicitly marked as pending confirmation. Replace it with the date on the corporate registry before publishing.
- Other pages and font-loading optimizations remain unchanged from V28.


V30: Added a homepage news preview section with two announcement excerpts and a link to the full news page in JA/EN/ZH.


V31: Replaced establishment announcement with a business overview page announcement across the three languages. Removed homepage section numbers (not business card numbers) and reduced spacing between News and Company. Announcement month is a draft: verify actual publication date before launch.

V32 — Balance News/Company spacing and distinguish Company with subtle gray background and divider on all three homepages.

V33: Removed the border between the homepage News and Company sections; retained the Company background and spacing across JA/EN/ZH.

V34: Removed DISCOVER MORE from all three homepages; reduced hero bottom padding to avoid blank space.

V35: Japanese and Simplified Chinese site headers show 芝浦商事 with SHIBAURA CORPORATION underneath; English remains unchanged. Logo placeholder retained.


V36: Japanese Contact form placeholder strings localized (name, email, company); Netlify honeypot text localized. CSS/layout unchanged.

V37: Chinese UI arrows now use CSS-drawn icons in homepage, contact, success and back-to-top links; no font emoji substitution.

V38: Replaced CSS-assembled arrows in Chinese pages with single-path inline SVG icons, including navigation actions, submit button, back-to-top. Other languages unchanged.

V39: Centered Chinese text buttons and SVG diagonal arrows using flex alignment without changing icon paths or site layout.


## V40 — Google Search title and site name
Japanese homepage title is 芝浦商事株式会社. Japanese subpages use Japanese titles with the formal company name. Chinese and English pages have their own language-specific titles. All pages include Open Graph site name; the Japanese homepage includes Google WebSite structured data and all homepages have canonical URLs. Google may rewrite its search results and must recrawl after deployment.


## V42 logo update
Uploaded SHIBAURA CORPORATION two-line navy wordmark replaces the header LOGO placeholder and duplicate text on Japanese, English, and Chinese pages. Responsive CSS and relative asset paths support direct local preview and Netlify. An unedited original copy is included in assets.


V43: Added branded favicon (S cropped from supplied wordmark), favicon.ico, favicon PNGs, and Apple Touch Icon to all 18 pages. SEO search favicon requires recrawling after Netlify deployment.

V44: favicon改为从用户原始字标提取的完整“SHIBAURA”单词，深海军蓝背景；HTML引用保持不变。

V45: two-line favicon with SHIBAURA above smaller CORPORATION, cropped directly from supplied original wordmark.

V46: Updated root favicon.ico and explicit 16/32px tab icons to the same two-line wordmark; versioned tab icon URLs.

V47: All favicon sizes and ICO files use the original two-line navy wordmark on white.


V48: Primary domain https://www.shibauracorp.com/. Canonical and hreflang aligned; sitemap.xml, robots.txt, WebSite/Organization JSON-LD and stable favicon references. Success pages noindex. Existing Netlify primary-domain redirect is managed in Domain management.
