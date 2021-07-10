# yugeng

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

--
2021/06/30

*若有 not_change_backup 更新記得更新資料夾內部分*

推到 gh-page 步驟
在 master 執行 npm run generate
切到 gh-page 把非隱藏檔案 (沒有被 gitignore 的檔案) 都砍了
然後從 dist 資料夾拉出所有檔案到根目錄
接著從 not_change_backup 資料夾拉出所有檔案到根目錄

可考慮把 not_change_backup 上版控
