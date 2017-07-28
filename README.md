如果想用手机查看效果，请切换至分支gh-pages
如果看完整的代码，请切换分支至master




## 初始装载

```
<img class="lazy" data-src="img/example.jpg" width="640" height="480">

$(function() {
    $("img.lazy").lazyload(option);
});

```

## option配置

```
{
    effect : "fadeIn", //效果
    threshold : 200, //阀值
    placeholder : "img/grey.gif", // 占位符
    event : "click", // 事件触发
}
```
