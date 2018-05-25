$(function () {
    if(SESSIONID == "" || null == SESSIONID || USER == "" || null == USER) {
        alert("登陆已过期");
        window.location.href = "login.html";
    }
})