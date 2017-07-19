//以下的代码适用于只有一页数据的时候
var arr = [];
var initIndex = 0;//从第1条数据开始计算
var perPage = 9;//每次加载进来9条数据
var endIndex = perPage - initIndex - 1;//每次splice(0,8)      var arr = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

$.ajax({
    type: 'GET',
    url: "./demo.json",
    success: function (data) {
        arr = data.data;
        new Scrollload({
            loadMore: function (sl) {
                if (arr.length == 0) {
                    sl.noMoreData()
                    return
                }

                var tempArr = arr.splice(initIndex, endIndex);
                var tempStr = template('demo', { data: tempArr });
                $(sl.contentDom).append(tempStr)
                sl.unLock()
            }
        })
    }
})













