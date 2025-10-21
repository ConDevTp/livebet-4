/* section1 */
function ShowHambergerMenu() {
    if (document.getElementById("hambergerbox").classList.contains("menu-header-hamberger"))

    {
        document.getElementById("hambergerbox").classList.remove("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.add("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.add("fa-bars");
        document.getElementById("baricon").classList.remove("fa-times");
    } else {
        document.getElementById("hambergerbox").classList.add("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.remove("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.remove("fa-bars");
        document.getElementById("baricon").classList.add("fa-times");
    }
}
/* section1 */


/* section8 */
function openticket(obj, obj1) {
    if (document.getElementById(obj).classList.contains('boxitemshow'))

    {
        document.getElementById(obj).classList.remove("boxitemshow");
        document.getElementById(obj).classList.add("boxitemshowclose");
        document.getElementById(obj1).src = "./assets/img/add.svg";
    } else {
        document.getElementById(obj).classList.add("boxitemshow");
        document.getElementById(obj).classList.remove("boxitemshowclose");
        document.getElementById(obj1).src = "./assets/img/minus-square.svg";
    }
}

/* section8 */


/* section weblog */
function ChangeText(obj) {
    if (obj === "right") {
        document.getElementById("title").innerHTML = "بونوس شرط بندی چیست؟";
        document.getElementById("text").innerHTML = "بونوس‌ های ورزشی امکان پیش‌ بینی بر روی تمامی ورزش‌ ها را فراهم می‌ کنند که محبوب‌ ترین آن‌ ها فوتبال است. بونوس‌ های کازینو به کاربران اجازه می‌ دهند بر روی بازی‌ های مختلف کازینویی مانند پوکر، رولت، و حکم شرط‌ بندی کنند. در بخش کازینو زنده نیز می‌ توان از بونوس‌ ها استفاده کرد تا تجربه بازی بهبود یابد و کاربران با کاهش ریسک مالی تصمیم‌ های بهتری بگیرند. برای فعال کردن بونوس‌ های سایت شرط بندی کاربران باید از طریق تیم پشتیبانی سایت درخواست دهند. در صورت تایید درخواست، بونوس‌ ها به حساب کاربری اضافه می‌ شوند و کاربران می‌ توانند از آن‌ ها برای انجام بازی‌ ها و پیش‌ بینی‌ های خود استفاده کنند."
        document.getElementById("imgweb").src = "./assets/img/box.svg";
        document.getElementById("dateweb").innerHTML = "تاریخ: 1403/05/22";
    }
    if (obj === "left") {
        document.getElementById("title").innerHTML = "چطور در شرط بندی فوتبال پیروز باشیم؟";
        document.getElementById("text").innerHTML = "شرط بندی و یا پیش بینی فوتبال که از مهیج ترین و پر طرفدارترین بازی های وبسایت های شرط بندی هستند، دارای استراتژی هایی می باشد که با یادگیری آن میتوان احتمال پیروزی خود را زیاد کنیم. هر چند در صورتی که همه ترفندهای شرط بندی فوتبال را هم بدانیم باز نمیتوانیم به طور قاطع بگوییم که برنده همیشگی هستیم، چون قسمت زیادی از پیش بینی به شانس شما بستگی دارد. شما وقتی که به طور زنده یا لایو به تماشای مسابقات فوتبال می نشینید، تحلیل و آنالیز بهتری نسبت به پیش بینی پیش از بازی انجام خواهید داد؛ زیرا در طول بازی شما می توانید از عملکرد تیم ها و شیوه بازیکن ها آگاه شده و پیش بینی بهتری داشته باشید. همچنین شما در پیش بینی زنده میتوانید از ضرایت بهتری بهره ببرید؛ زیرا ضرایب در طول پیش بینی در حال تغییر می باشد و نوسان حاصل کمک زیادی به سود نهایی شما می کند.";;
        document.getElementById("imgweb").src = "./assets/img/box1.svg";
        document.getElementById("dateweb").innerHTML = "تاریخ: 1404/01/1";
    }
}
/* section weblog */




/* section6 */

function changeboxmessage(obj) {
    var con = document.getElementById("conmesssage");

    if (obj === "left")

    {
        var left = con.querySelector('*') ;
        var usercon = left;
    }
    if (obj === "right") {
        var right = $('#conmesssage .boxs').slice(-2)[1];
        var usercon = right;
    }


    var copy = usercon;
    usercon.remove();
    var center = con.firstChild.nextSibling.nextSibling;

    center.after(copy);
}

/* section6 */
