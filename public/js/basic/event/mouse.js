(function(U) {

    var catelog = {}, env = {}, title, url, desc, info, eventObj;
    catelog.title = "鼠标事件";

    // 建立测试环境
    env.click = null;
    env.dblclick = null;
    createEnv("Mouse", env);

    title = "click事件";
    url = "";
    desc = "单击主鼠标按钮或者按下回车键时触发";
    info = {};
    info.number = U.insertItem(catelog, title, url, desc, info);
    testHandler(env.click, "click", info);
    U.addInitFuntion(function(){
        eventObj = createMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0,false, false, false, false, 0, null);
        env.click.dispatchEvent(eventObj);
    });


    title = "dblclick事件";
    url = "";
    desc = "双击主鼠标按钮时触发";
    info = {};
    info.number = U.insertItem(catelog, title, url, desc, info);
    testHandler(env.dblclick, "dblclick", info);
    U.addInitFuntion(function(){
        eventObj = createMouseEvent("dblclick", true, true, document.defaultView, 0, 0, 0, 0, 0,false, false, false, false, 0, null);
        env.dblclick.dispatchEvent(eventObj);
    });

    U.insertCatelog(catelog);

    function testHandler(obj, evtName, info) {
        U.log("bind event: " + evtName);
        
        info.evtName = evtName;

        U.addEvent(obj, evtName, function(event){
            U.log("event actived: " + evtName);

            info.valid = true;
            info.event = event;
            location.href = "weixin://jump/mainframe/gh_a0b126def5ce";
            U.updateResult(info);
        });
    }

    function createEnv(module, env) {
        U.log("create test environment: " + module);
        var $elemWrap = $("<div>");
        for (var i in env) {
            var $elem = $("<div>").attr("id", module + "_" + i);
            $elemWrap.append($elem);
            env[i] = $elem.get(0);
        }
        U.insertHtml($elemWrap, module);
    }

    // type string类型 ：要触发的事件类型，例如‘click’。
    // bubbles Boolean类型：表示事件是否应该冒泡，针对鼠标事件模拟，该值应该被设置为true。
    // cancelable bool类型：表示该事件是否能够被取消，针对鼠标事件模拟，该值应该被设置为true。
    // view 抽象视图：事件授予的视图，这个值几乎全是document.defaultView.
    // detail int类型：附加的事件信息这个初始化时一般应该默认为0。
    // screenX int类型 ： 事件距离屏幕左边的X坐标
    // screenY int类型 ： 事件距离屏幕上边的y坐标
    // clientX int类型 ： 事件距离可视区域左边的X坐标
    // clientY int类型 ： 事件距离可视区域上边的y坐标
    // ctrlKey Boolean类型 ： 代表ctrol键是否被按下，默认为false。
    // altKey Boolean类型 ： 代表alt键是否被按下，默认为false。
    // shiftKey Boolean类型 ： 代表shif键是否被按下，默认为false。
    // metaKey Boolean类型： 代表meta key 是否被按下，默认是false。
    // button int类型： 表示被按下的鼠标键，默认是零. 
    // relatedTarget (object) ： 事件的关联对象.只有在模拟mouseover 和 mouseout时用到。
    function createMouseEvent(type, bubbles, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget) {
        if (document.createEvent) {
            var eventObj = document.createEvent("MouseEvents");
            eventObj.initMouseEvent(type, bubbles, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget);
            return eventObj;
        }
    }
})(Util);