# LIHKG of Trust (連登用戶聲譽評級插件)

連登用戶聲譽評級插件 (靈感源於[WOT](https://chrome.google.com/webstore/detail/wot-web-of-trust-website/bhmmomiinigofkjcapegjjndpbikblnp))

注：目前只在Google Chrome上開發。但歡迎其他的Pull Requests。

注2: 所有處理都只在本機local進行。絕對安全。可在這裡, Tampermonkey或OpenUserJS查看原始碼。

## 截圖

![trusted](http://imgur.com/nDd53tt.jpg)

![five_cents](http://imgur.com/eADEjE2.jpg)

![troll](http://imgur.com/JxV7XQ7.jpg)

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

3. 加入你的舉報或提名

```js
const userList = {
    '用戶名1': {
        fiveCents: true,
    },
    '用戶名2': {
        trusted: true,
    },
    '你的舉報或提名用戶名': {
        troll: true,
    },
}
```

4. 複製以下內容，然後在Description貼上。最後修改一下。

```
主題（2選1）：
[舉報] 舉報"XXXX"會員為三毛/五毛/假膠
[提名] 提名"XXXX"會員為優質會員

**舉報/提名簡介**
簡單說一下為什麼舉報/提名

優質會員需至少符合3點
[] 第一次發佈主題為至少6個月前
[] 最近6個月平均主題發佈數為每週一次
[] 最近6個月有發佈過非常高質主題（必需提交證據）

**證據 (非常重要)**
請提供實質證據支持（如：網址，截圖）

**其他**
其他額外資訊
```

5. 待檢查確實後會接受你的提交

## 其他請求

[按這裡](https://github.com/blah2017blah/lihkg-of-trust/issues/new/choose)

## Contribute

歡迎各類Pull Requests

## License
[MIT](https://choosealicense.com/licenses/mit/)
