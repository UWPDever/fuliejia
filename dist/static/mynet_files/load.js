
//正则表达式方法
function checkNum(obj) {
    var re = /^[0-9]*$/; //判断字符串是否为数字
    if (!re.test(obj.value.trim())) {
        //document.getElementById("MSG").innerHTML = "*请输入只能输入数字";
        //obj.value = "";
        obj.focus();
        return false;
    }
    else {
        if (obj.value.trim() != "") {
            document.getElementById("MSG").innerHTML = "";
        }
        return true;
    }
}
function IsZIP(str) {
    if (str.length != 0) {
        reg = /^\d{6}$/;
        return reg.test(str);
    }
}
//是否含有中文（也包含日文和韩文）   
function isChineseChar(obj) {
    //var reg = /^[\u4E00-\u9FA5\uF900-\uFA2D]*$/;
    var reg = /[^\x00-\xff]/g;
    if (reg.test(obj.value.trim())) {
        //document.getElementById("MSG").innerHTML = "*输入错误,不能输入汉字";

        //obj.value = "";
        return false;
    }
    else {
        if (obj.value.trim() != "") {
            document.getElementById("MSG").innerHTML = "";
        }
        return true;
    }
}
//同理，是否含有全角符号的函数
function isFullwidthChar(obj) {
    var reg = /[\uFF00-\uFFEF]/;
    if (obj.value.trim() != "请输入" && !reg.test(obj.value.trim())) {
        //document.getElementById("MSG").innerHTML = "*输入错误,不能输入全角符号";
        //obj.value = "";
        return false;
    }
    else {
        if (obj.value.trim() != "") {
            document.getElementById("MSG").innerHTML = "";
        }
        mBlur(obj);
        return true;
    }
}

function mFocus(obj) {
    if (obj.value.trim() == "请输入") {
        obj.value = "";
    }
    obj.style.color = "#000";
}
function mBlur(obj) {
    if (obj.value.trim() == "") {
        obj.value = "请输入";
        obj.style.color = "#929292";
    }
}

function isPhone(obj) {
   // var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^0{0,1}1[345789][0-9]{9}$)/
    var reg = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
    //return reg.test(str);
    if (obj.value.trim() != "" && !reg.test(obj.value.trim())) {
        //document.getElementById("MSG").innerHTML = "*输入错误,手机号格式错误";
        //obj.value = "";
        obj.focus();
        return false;
    }
    else {
        document.getElementById("MSG").innerHTML = "";
        return true;
    }

}



function isPhone1(str) {
    //var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^0{0,1}1[358][0-9]{9}$)/
   // var reg = /^0?1[3|4|5|7|8|9][0-9]\d{8}$/;
      var reg = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
    return reg.test(str.trim());
}

function isEmail(str) {
    var reg = /^([a-zA-Z0-9_-]{1,20}(\.?[a-zA-Z0-9_-]{2,3}){1,2})+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(str.trim());
}
function isTelephone(str) {
    var reg = /^(\d{3,4}\-)?[1-9]\d{6,7}$/;
    return reg.test(str.trim());
}

//只能包含数字字母
function NumOrStr(str) {
    var reg = /^[0-9a-zA-Z]*$/;
    return reg.test(str.trim());
}
//必须是数字字母组合
function NumAndStr(str) {
    //var reg = /^(([0-9]+[a-zA-Z]+[a-zA-Z0-9]+)|([a-zA-Z]+[0-9]+[a-zA-Z0-9]+))$/;
    //var reg = /^(([a-zA-Z]{1}[0-9]+)|[0-9]{1}[a-zA-Z0-9]+)$/;
    //2015年9月25日 10:01:48 徐磊修改
    var reg = /(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,}$/;
    return reg.test(str.trim());
}

//验证是否为数字
function isNum(str) {
    var reg = /^[0-9]*$/;
    return reg.test(str.trim());
}
//验证邮编
function isPostCode(str) {
    var reg = /^[1-9][0-9]{5}$/
    return reg.test(str.trim());

}




function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function getUrlParamString(str) {
    var r = window.location.search;
    if (r.indexOf(str) != -1) {
        return r.split(str)[1];
    }
    else {
        return "";
    }
}


String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "").replace(/\&/g, "");
}




//检测是否是Android手机， 是，则返回true    否 则返回false
function CheckAndroid() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

    return isAndroid;
    //    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    //    alert('是否是Android：' + isAndroid);
    //    alert('是否是iOS：' + isiOS);

}

//检测是否是iOS手机打开 是，则返回true    否 则返回false
function CheckIOS() {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isiOS;
}

//判断是否是微信浏览器打开
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {

        return false;

    }
}


