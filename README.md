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
