# vue2-svg-icon

```bash
npm i -D svg-sprite-loader
```

## Reference

* https://juejin.cn/post/6844903517564436493

## svg在chrome显示正常

![chrome](assets/chrome.png)

## svg在safari显示异常

![safari](assets/safari.png)

## svg在本地预览正常

![transfer-in](assets/transfer-in.png)

## svg在本地预览异常

![zrzj](assets/zrzj.png)

结论：部分使用了filter的svg在Safari显示会异常。参考[链接](https://stackoverflow.com/questions/44900980/svg-filter-works-in-chrome-but-not-in-safari-or-firefox)
