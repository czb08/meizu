function show(li) {
    var submenu = li.getElementsByTagName("ul")[0];
    submenu.style.display = "block";
}
function hide(li) {
    var submenu = li.getElementsByTagName("ul")[0];
    submenu.style.display = "none";
}
/*function show(ul) {
    var submenu = ul.getElementsByTagName("div")[0];
    submenu.style.display = "block";
}
function hide(ul) {
    var submenu = ul.getElementsByTagName("div")[0];
    submenu.style.display = "none";
}*/
$(function () {
    $(".nav>ul").mouseenter(function () {
        $(this).children("ul").stop().show(400);
    });
    $(".nav>ul").mouseleave(function () {
        $(this).children("ul").stop().hide(400);
    });
});
//banner轮播图
