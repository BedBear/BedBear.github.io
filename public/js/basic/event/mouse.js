(function(U) {

    var catelog = {}, title, url, desc, info;
    catelog.title = "鼠标事件";

    title = "鼠标事件";
    url = "";
    desc = "直到文档和所有图片加载完毕时发生";
    info = {};
    U.insertItem(catelog, title, url, desc, info);

    U.insertCatelog(catelog);
})(Util);