var Util = {
    itemCount : 0,

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

    insertItem : function (catelog, title, url, desc, info) {
        var item = {
            title : title,
            url : url,
            desc : desc,
            info : info,
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
            $("<p>").html(items[i].desc).appendTo($item);
            $itemList.append($item);
        }
        $list.append($title);
        $list.append($itemList);
        $wrap.append($list);
    },

    updateValid : function (info) {
        $("<p>").html("状态："+ (info.valid ? "OK" : "X")).appendTo($("#"+info.number));
    },

    addEvent : function (elem, type, fn) {
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
}