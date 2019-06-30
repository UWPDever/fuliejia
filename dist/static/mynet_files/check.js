
function CX() {
    var P_Num = document.getElementById("P_Num").value;
    var V_Code = document.getElementById("V_Code").value;
    if (P_Num.trim() == "") { document.getElementById("MSG").innerHTML = "*产品数码不能为空"; return; }
    if (P_Num.length != 16 || !checkNum(document.getElementById("P_Num"))) { document.getElementById("MSG").innerHTML = "*请输入16位纯数字数码"; return; }
    if (V_Code.trim() == "") { document.getElementById("MSG").innerHTML = "*验证码不能为空"; return; }
    if (!checkNum(document.getElementById("V_Code"))) { document.getElementById("MSG").innerHTML = "*请正确输入数字验证码"; return; }
    if ($("#Mobile").length > 1) {
        if (!isPhone(document.getElementById("Mobile"))) { document.getElementById("MSG").innerHTML = "*请输入正确的手机号码"; return; }
    }
    document.getElementById("MSG").innerHTML = "";
    var mobile = "";
    if ($("#Mobile").length > 1) {
        mobile = $("#Mobile").val();
    }
    //var mobile = document.getElementById("Mobile").value;
    //CheckUserExit(P_Num, V_Code, mobile);
    document.getElementById("MSG").innerHTML = "<span style='color:green;'>正在查询，请您稍后...</span>";
    $.ajax({
        type: 'POST',
        url: '../Ajax/Check.ashx',
        data: 'code=' + P_Num + '&imgcode=' + V_Code + "&mobile=" + mobile + "&t=" + Math.random(),
        async: false,
        success: function (data) {
            if (data == '1') {
                document.getElementById("MSG").innerHTML = "*验证码错误"; document.getElementById("V_Code").value = "";
                document.getElementById("img_Code").src = document.getElementById("img_Code").src + "&";
                return;
            }
            else if (data == "2") {
                document.getElementById("MSG").innerHTML = "*网络繁忙，请稍候再试";
                return;
            }
            else {
                var arr = data.split('|');
                if (arr.length > 1 && arr[0] == "003") {
                    data = arr[1];
                    if ($("#linkClt").length > 0) {
                        $("#linkClt").show();
                        var url = $("#linkClt").attr("href");
                        var urlarr = url.split('&code=');
                        if (urlarr.length > 1) {
                            if (urlarr[1].indexOf("&") == -1) {
                                url = urlarr[0];
                            }
                            else {
                                url = urlarr[0] + "&" + urlarr[1].split('&')[1];
                            }
                        }
                        $("#linkClt").attr("href", url.replace("&url=", "&code=" + P_Num + "&url="));
                    }
                    else {
                        $("#linkClt").hide();
                    }
                }
                document.getElementById("result").innerHTML = data;
                document.getElementById("div_cx").style.display = "none";
                document.getElementById("div_result").style.display = "block";
                return;
            }

        },
        error: function (e) {
            document.getElementById("MSG").innerHTML = "*查询失败，请稍候再试！";
            return;
        }

    });

};


function CXNoValidCode() {
    var P_Num = document.getElementById("P_Num").value;
    //var V_Code = document.getElementById("V_Code").value;
    if (P_Num.trim() == "") { document.getElementById("MSG").innerHTML = "*产品数码不能为空"; return; }
    if (P_Num.length != 16 || !checkNum(document.getElementById("P_Num"))) { document.getElementById("MSG").innerHTML = "*请输入16位纯数字数码"; return; }
    //if (V_Code.trim() == "") { document.getElementById("MSG").innerHTML = "*验证码不能为空"; return; }
    //if (!checkNum(document.getElementById("V_Code"))) { document.getElementById("MSG").innerHTML = "*请正确输入数字验证码"; return; }
    if ($("#Mobile").length > 1) {
        if (!isPhone(document.getElementById("Mobile"))) { document.getElementById("MSG").innerHTML = "*请输入正确的手机号码"; return; }
    }
    document.getElementById("MSG").innerHTML = "";
    var mobile = "";
    if ($("#Mobile").length > 1) {
        mobile = $("#Mobile").val();
    }
    //var mobile = document.getElementById("Mobile").value;
    //CheckUserExit(P_Num, V_Code, mobile);
    document.getElementById("MSG").innerHTML = "<span style='color:green;'>正在查询，请您稍后...</span>";
    $.ajax({
        type: 'POST',
        url: '../Ajax/Check.ashx',
        data: 'code=' + P_Num + "&mobile=" + mobile + "&t=" + Math.random(),
        async: false,
        success: function (data) {
            if (data == '1') {
                document.getElementById("MSG").innerHTML = "*验证码错误"; document.getElementById("V_Code").value = "";
                document.getElementById("img_Code").src = document.getElementById("img_Code").src + "&";
                return;
            }
            else if (data == "2") {
                document.getElementById("MSG").innerHTML = "*网络繁忙，请稍候再试";
                return;
            }
            else {
                var arr = data.split('|');
                if (arr.length > 1 && arr[0] == "003") {
                    data = arr[1];
                    if ($("#linkClt").length > 0) {
                        $("#linkClt").show();
                        var url = $("#linkClt").attr("href");
                        var urlarr = url.split('&code=');
                        if (urlarr.length > 1) {
                            if (urlarr[1].indexOf("&") == -1) {
                                url = urlarr[0];
                            }
                            else {
                                url = urlarr[0] + "&" + urlarr[1].split('&')[1];
                            }
                        }
                        $("#linkClt").attr("href", url.replace("&url=", "&code=" + P_Num + "&url="));
                    }
                    else {
                        $("#linkClt").hide();
                    }
                }
                document.getElementById("result").innerHTML = data;
                document.getElementById("div_cx").style.display = "none";
                document.getElementById("div_result").style.display = "block";
                return;
            }

        },
        error: function (e) {
            document.getElementById("MSG").innerHTML = "*查询失败，请稍候再试！";
            return;
        }

    });

};



function CXShell() {
    var P_Num = document.getElementById("P_Num").value;
    var V_Code = document.getElementById("V_Code").value;
    if (P_Num.trim() == "") { document.getElementById("MSG").innerHTML = "*AC Code cannot be empty"; return; }
    if (P_Num.length != 16 || !checkNum(document.getElementById("P_Num"))) { document.getElementById("MSG").innerHTML = "*Please input 16 digits but text"; return; }
    if (V_Code.trim() == "") { document.getElementById("MSG").innerHTML = "*Verification code cannot be empty"; return; }
    if (!checkNum(document.getElementById("V_Code"))) { document.getElementById("MSG").innerHTML = "*Please input digital verification code"; return; }
    if ($("#Mobile").length > 1) {
        if (!isPhone(document.getElementById("Mobile"))) { document.getElementById("MSG").innerHTML = "*Please input correct telephone number"; return; }
    }
    document.getElementById("MSG").innerHTML = "";
    var mobile = "";
    if ($("#Mobile").length > 1) {
        mobile = $("#Mobile").val();
    }
    //var mobile = document.getElementById("Mobile").value;
    //CheckUserExit(P_Num, V_Code, mobile);
    document.getElementById("MSG").innerHTML = "<span style='color:green;'>Submitting in process, please be patient...</span>";
    $.ajax({
        type: 'POST',
        url: '../Ajax/Check.ashx',
        data: 'code=' + P_Num + '&imgcode=' + V_Code + "&mobile=" + mobile + "&t=" + Math.random(),
        async: false,
        success: function (data) {
            if (data == '1') {
                document.getElementById("MSG").innerHTML = "*Verification Code is wrong"; document.getElementById("V_Code").value = "";
                document.getElementById("img_Code").src = document.getElementById("img_Code").src + "&";
                return;
            }
            else if (data == "2") {
                document.getElementById("MSG").innerHTML = "*Network busy, please try again later";
                return;
            }
            else {
                var arr = data.split('|');
                if (arr.length > 1 && arr[0] == "003") {
                    data = arr[1];
                    if ($("#linkClt").length > 0) {
                        $("#linkClt").show();
                        var url = $("#linkClt").attr("href");
                        var urlarr = url.split('&code=');
                        if (urlarr.length > 1) {
                            if (urlarr[1].indexOf("&") == -1) {
                                url = urlarr[0];
                            }
                            else {
                                url = urlarr[0] + "&" + urlarr[1].split('&')[1];
                            }
                        }
                        $("#linkClt").attr("href", url.replace("&url=", "&code=" + P_Num + "&url="));
                    }
                    else {
                        $("#linkClt").hide();
                    }
                }
                document.getElementById("result").innerHTML = data;
                document.getElementById("div_cx").style.display = "none";
                document.getElementById("div_result").style.display = "block";
                return;
            }

        },
        error: function (e) {
            document.getElementById("MSG").innerHTML = "*Submitting Failed, please try again later！";
            return;
        }

    });

}
function CZ() {
    document.getElementById("P_Num").value = ""; document.getElementById("V_Code").value = "";
    document.getElementById("img_Code").src = document.getElementById("img_Code").src + "&";
    document.getElementById("MSG").innerHTML = "";
}

function BK() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("div_cx").style.display = "block";
    document.getElementById("div_result").style.display = "none";
    CZ();
}

//11位防伪码中转页面调用
function CX1(obj) {
    //将按钮禁用1.5秒，避免重复提交
    $(obj).attr('disabled', "true");
    setTimeout(function () {
        $(obj).removeAttr("disabled");
    }, 1500);
    var tz = document.getElementById("hidTz").value;
    var url = location.href;
    var code = getQueryString("code");
    url = url.replace("CheckPage", tz);
    var P_Num = document.getElementById("P_Num").value;
    if (P_Num.trim() == "") { document.getElementById("MSG").innerHTML = "*产品数码不能为空"; return; }
    if (P_Num.length != 6 || !checkNum(document.getElementById("P_Num"))) { document.getElementById("MSG").innerHTML = "*请输入最后6位纯数字数码"; return; }
    var tempCode = code + P_Num.substring(1);
    url = url.replace(code, tempCode);
    window.location.href = url;
}
//取得url参数的值
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//验证码中转页面调用
function ValidCode() {

    var V_Code = document.getElementById("V_Code").value;
    if (V_Code.trim() == "") { document.getElementById("MSG").innerHTML = "*请输入验证码"; return; }

    $('#btnValid').attr('disabled', "true");
    setTimeout(function () {
        $('#btnValid').removeAttr("disabled");
    }, 6000);

    $.ajax({
        type: 'POST',
        url: '../Ajax/ValidCheck.ashx',
        data: 'imgcode=' + V_Code + "&t=" + Math.random(),
        async: false,
        success: function (data) {
            if (data == '1') {
                document.getElementById("MSG").innerHTML = "*验证码错误"; document.getElementById("V_Code").value = "";
                document.getElementById("img_Code").src = document.getElementById("img_Code").src + "&";
                $('#btnValid').removeAttr("disabled");
                return;
            } else {
                var tz = document.getElementById("hidTz").value;
                var url = location.href;
                var code = getQueryString("code");
                //2015年1月22日 10:56:08 徐磊
                var validName = url.substring(url.indexOf("Valid"), url.lastIndexOf("."));
                //url = url.replace("Valid", tz);
                url = url.replace(validName, tz);
                window.location.href = url;
            }
        },
        error: function (e) {
            document.getElementById("MSG").innerHTML = "*查询失败，请稍候再试！";
            $('#btnValid').removeAttr("disabled");
            return;
        }

    });
}
//验证码中转页面调用
function CZValid() {
    document.getElementById("V_Code").value = "";
    document.getElementById("img_Code").src = document.getElementById("img_Code").src + "&";
    document.getElementById("MSG").innerHTML = "";
}

/***********选择语言页面调用****************/

//选择语言页面调用
function CheckLan() {
    var tz = document.getElementById("hidTz").value;
    var obj = document.getElementById("ddlLan");
    var index = obj.selectedIndex;
    var value = obj.options[index].value; // 选中值
    var url = location.href;
    url = url.replace("CheckLanguage", tz);
    window.location.href = url + "&language=" + value;
}