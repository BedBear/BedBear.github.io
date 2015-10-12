(function(U) {

    var catelog = {}, title, url, desc, info;
    catelog.title = "加载事件";


    title = "文档加载事件";
    url = "";
    desc = "直到文档和所有图片加载完毕时发生";
    info = {};
    info.number = U.insertItem(catelog, title, url, desc, info);
    testDocLoaded(info);
    

    title = "DOMContentLoaded事件";
    url = "";
    desc = "当文档加载解析完毕且所有延迟（deferred）脚本都执行完毕时发生，此时图片和异步（async）脚本可能依旧在加载";
    info = {};
    info.number = U.insertItem(catelog, title, url, desc, info);
    testDOMContentLoaded(info);
    
    U.insertCatelog(catelog);

    function testDocLoaded(info) {
        U.log("DocLoaded bind");
        U.addEvent(window, "load", function(event){
            U.log("DocLoaded active");
            info.valid = true;
            info.event = event;
            U.updateValid(info);
        });
    }

    function testDOMContentLoaded(info) {
        U.log("DOMContentLoaded bind");
        U.addEvent(window, "DOMContentLoaded", function(event){
            U.log("DOMContentLoaded active");
            info.valid = true;
            info.event = event;
            U.updateValid(info);
        });
    }
})(Util);