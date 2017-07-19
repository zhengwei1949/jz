//以下的代码适用于当有很多页数据的时候
let page = 0
new Scrollload({
    // 容器
    container: document.querySelector('.scrollload-container'),
    // 列表内容
    content: document.querySelector('.scrollload-content'),
    //第一屏打开页面的时候会自动加载数据，当滚动到底部的时候会再次调用loadMore方法
    loadMore: function (sl) {
        if (page === 6) {
            sl.noMoreData();//没有数据的时候需要调用noMoreData
            return
        }
        $.ajax({
            type: 'GET',
            url: "https://fa-ge.github.io/Scrollload/gamelist.json?page=" + (page++),
            dataType: 'json',
            success: function (data) {
                var tempStr = template('demo', data);
                // contentDom其实就是你的scrollload-content类的dom
                $(sl.contentDom).append(tempStr)
                // 处理完业务逻辑后必须要调用unlock
                sl.unLock()
            }
        })
    },
    noMoreDataHtml: '<p style="text-align:center;color:red;">没有更多数据了....</p>',
})
