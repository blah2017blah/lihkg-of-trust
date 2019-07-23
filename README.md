# LIHKG of Trust (連登用戶聲譽評級插件)

連登用戶聲譽評級插件 (靈感源於[WOT](https://chrome.google.com/webstore/detail/wot-web-of-trust-website/bhmmomiinigofkjcapegjjndpbikblnp))

## 安裝

1. 安裝[Google Chrome](https://www.google.com/chrome/)
2. 安裝[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
3. 安裝[LIHKG of Trust](https://openuserjs.org/scripts/blah2017blah/lihkg-of-trust)

## 舉報三毛/五毛/假膠或提名優質會員

1. [修改Script](https://github.com/blah2017blah/lihkg-of-trust/edit/master/lihkg-of-trust.user.js)

2. 找到userList

```js
/**
 * 格式：
 * const userList = {
 *     '用戶名1(不含emoji)': {
 *         fiveCents: true, // 三毛/五毛
 *         troll: true,     // 假膠
 *     },
 *     '用戶名2(不含emoji)': {
 *         trusted: true,   // 優質
 *     }
 * }
 */
const userList = {
    '用戶名1': {
        fiveCents: true,
    },
    '用戶名2': {
        trusted: true,
    },
}
```

3. 入加你的舉報

```js
const userList = {
    '用戶名1': {
        fiveCents: true,
    },
    '用戶名2': {
        trusted: true,
    },
    '你的舉報用戶名': {
        troll: true,
    },
}
```

4. 依照要求填上Propose的內容

5. 待檢查確實後會接受你的提交

## 其他請求

[按這裡](https://github.com/blah2017blah/lihkg-of-trust/issues/new/choose)

## License
[MIT](https://choosealicense.com/licenses/mit/)
