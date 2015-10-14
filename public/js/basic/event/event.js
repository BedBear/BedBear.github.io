var Util = {
    itemCount : 0,
    initFuntionList : [],
    // catelog = {
    //     title : ""
    //     items : [
    //         {
    //             title : "",
    //             url : "",
    //             desc: "",
    //             info : {}
    //         }
    //     ]
    // }
    addInitFuntion : function(fn) {
        this.initFuntionList.push(fn);
    },
    insertItem : function (catelog, title, url, desc, info) {
        var item = {
            title : title,
            url : url,
            desc : desc,
            info : info
        };
        if (!(catelog.items instanceof Array)) {
            catelog.items = [];
        }
        catelog.items.push(item);
        this.itemCount++;
        return this.itemCount;
    },

    insertCatelog : function (catelog) {
        var $wrap = $("#catelogList");
        var $list = $("<li>").addClass("catelog_item");
        var $title = $("<h2>").html(catelog.title);
        var $itemList = $("<ul>");
        var items = catelog.items;
        var itemsCnt = catelog.items.length;
        var $item;
        for (var i =  0; i < itemsCnt; i++) {
            $item = $("<li>");
            $item.attr("id", items[i].info.number);
            $("<h3>").html(items[i].title).appendTo($item);
            $("<p>").html("事件名称：" + items[i].info.evtName).appendTo($item);
            $("<p>").html(items[i].desc).appendTo($item);
            $itemList.append($item);
        }
        $list.append($title);
        $list.append($itemList);
        $wrap.append($list);
    },

    updateResult : function (info) {
        $("<p>").html("状态：" + (info.valid ? "OK" : "X")).appendTo($("#"+info.number));

        // for (var i in info.event) {
        //     $("<span>").html(i + ": " + info.event[i]+ "<br>").appendTo($("#"+info.number));
        // }
    },

    insertHtml : function (elem, module) {
        var $testWrap = $("#testWrap");
        var $module = $("#m" + module);
        if ($module && $module.length == 0) {
            $module = $("<div>");
            $module.attr("id", "m" + module).appendTo($testWrap);
        }
        $module.html(elem);

        return $module[0];
    },

    // 绑定事件 
    // 兼容ie attachEvent 方法 和 属性方式
    addEvent : function (elem, type, fn) {
        if (elem.addEventListener) { 
            elem.addEventListener(type, fn, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, fn); 
        } else {
            elem["on" + type] = fn;
        }
    },

    // 触发事件 
    // 兼容ie attachEvent 方法 和 属性方式
    dispatchEvent : function (elem, type, fn) {
        if (elem.addEventListener) { 
            elem.addEventListener(type, fn, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, fn); 
        } else {
            elem["on" + type] = fn;
        }
    },

    log : function (msg) {
        console.log(msg);
    }
};

$(function(){
    var list = Util.initFuntionList;
    for (var i in list) {
        try {
            list[i]();
        } catch(e) {
            Util.log(e);
        }
    }
});
