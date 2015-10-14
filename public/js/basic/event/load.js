(function(U) {

    var catelog = {}, title, url, desc, info;
    catelog.title = "加载事件";


    title = "文档加载事件";
    url = "";
    desc = "直到文档和所有图片加载完毕时发生";
    info = {};
    info.number = U.insertItem(catelog, title, url, desc, info);
    testHandler(window, "load", info);
    

    title = "DOMContentLoaded事件";
    url = "";
    desc = "当文档加载解析完毕且所有延迟（deferred）脚本都执行完毕时发生，此时图片和异步（async）脚本可能依旧在加载";
    info = {};
    info.number = U.insertItem(catelog, title, url, desc, info);
    testHandler(document, "DOMContentLoaded", info);
    

    title = "readystatechange事件";
    url = "";
    desc = "load事件之前立即触发，尚不清楚用他取代'load'会带来多大好处";
    info = {};
    info.number = U.insertItem(catelog, title, url, desc, info);
    testHandler(document, "readystatechange", info);

    U.insertCatelog(catelog);

    function testHandler(obj, evtName, info) {
        U.log("bind event: " + evtName);
        
        info.evtName = evtName;

        U.addEvent(obj, evtName, function(event){
            U.log("event actived: " + evtName);

            if (evtName == "readystatechange") {
                info.event = info.event ? info.event : {};
                var readyState = document.readyState;
                info.event[readyState] = true;
                if (readyState == "interactive" || readyState == "complete") {
                    info.valid = true;
                }
            } else {
                info.valid = true;
                info.event = event;
            }
            U.updateResult(info);
        });
    }
})(Util);