var URL = "http://localhost:8081/";
var SESSIONID = getCookie("SESSIONID");
var USER =  getCookie("USER")==""?null:JSON.parse( getCookie("USER"));
var MENU = getCookie("MENU")==""?null:JSON.parse( getCookie("MENU"));
//设置cookie
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    if (expiredays != -1) {
        exdate.setTime(Number(exdate) + expiredays);
    } else {
        exdate.setTime(expiredays);
    }
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
//获取cookie
function getCookie(c_name) {
    if(document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");//获取字符串的起点
        if(c_start != -1) {
            c_start = c_start + c_name.length + 1;//获取值的起点
            c_end = document.cookie.indexOf(";", c_start);//获取结尾处
            if(c_end == -1) c_end = document.cookie.length;//如果是最后一个，结尾就是cookie字符串的结尾
            return  unescape(document.cookie.substring(c_start, c_end));//截取字符串返回
        }
    }
    return "";
}
//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}