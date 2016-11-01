/**
 * Created by Administrator on 2016/10/31 0014.
 */
window.onload = function () {
    var menu = document.getElementById('menu');
    var menuItems = menu.children;
    var car = document.getElementById("car");
    var current = 0;
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].onmouseover = function () {
            target = this.offsetLeft;

        }
        menuItems[i].onmouseout = function () {
            target = current;

        }
        menuItems[i].onclick = function () {
            current = this.offsetLeft;
        }
    }

    //»º¶¯¹«Ê½
    var leader = 0; target = 0;
    setInterval(function () {
        leader = leader + (target-leader)/10;
        car.style.left = leader + "px";
    },10);


};

