window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.onload = () => {
    let navbar = document.querySelector('header');
    let links = document.querySelectorAll('.links');
    let sections = document.querySelectorAll('.scroll');
    let menulink = document.querySelector('#menu-list');
    let menu = document.querySelector('#menu');
    let home = document.querySelector('.container');
    let header = document.querySelector('#head');
    let serviceBox=document.querySelectorAll('.service-box');
    let serviceCircle=document.querySelectorAll('.service-circle');
    let projectBox=document.querySelectorAll('.project-box')
    const mediaQuery = window.matchMedia('(max-width:900px)');

   
    const width = $(window).width();
    $(window).resize(function () {
        if (width > 899 && $(window).width() <= 905) {
            location.reload();
        }
        else if (width < 906 && $(window).width() > 900) {
            location.reload();
        }
    });
    window.addEventListener('scroll', () => {
        // if(window.pageYOffset == 0){
        //     location.reload();
        // }
        console.log(window.pageYOffset);
        if (window.pageYOffset > navbar.offsetHeight) {
            if (mediaQuery.matches) {
                navbar.style.background = "white";
                navbar.style.color = "black";
                header.style.color = "black";
                menulink.style.backgroundColor = "white";
                links.forEach((item) => {
                    item.style.color = "black";
                });
            }
            else{
                navbar.style.backgroundColor = "white";
            }
        }
        else {  
            if (mediaQuery.matches) {
                navbar.style.background = "black";
                navbar.style.color = "white";
                header.style.color = "white";
                menulink.style.backgroundColor = "black";
                links.forEach((item) => {
                    item.style.color = "white";
                });
            }
            else{
                 navbar.style.backgroundColor = "transparent";
            }
        }
        let current = "Home";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop - (sectionHeight / 2)) {
                current = section.getAttribute("id");
            }
        });
        links.forEach((items) => {
            items.classList.remove("active");
            if (items.href.includes(current)) {
                items.classList.add("active");
            }
            else {
                items.classList.remove("active");
            }
        })
    });
    $('#navbar a').on('click', function (e) {
        // console.log(this.hash)
        if (this.hash != "") {
            e.preventDefault();
            const hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top - $('header').height()
            }, 800);
        }
    });

    menu.addEventListener('click', () => {
        let maxheig = navbar.offsetHeight;
        if (menulink.style.maxHeight == "0px") {
            menulink.style.maxHeight = "215px";
            if (window.pageYOffset < maxheig) {
                home.style.marginTop = "215px";
            }

            setTimeout(waiting, 300);
            waiting = () => {
                menulink.style.overflow = "visible";
            }

        }
        else {
            menulink.style.overflow = "hidden";
            menulink.style.maxHeight = "0px";
            home.style.marginTop = "0";
        }
    });
    serviceCircle.forEach((circle,a)=>{
        serviceBox.forEach((box,b)=>{
            box.addEventListener('mouseover',()=>{
                box.style.background="#B1B493";
                box.style.color="white";
                if(a==b){
                    circle.style.background="white";
                    circle.style.left="50%";
                    circle.style.transform="translate(-50%,-50%)";
                }
                
            })
            box.addEventListener('mouseout',()=>{
                box.style.background="white";
                box.style.color="black";
                circle.style.background="#B1B493";
                if(a==b){
                    circle.style.left="20%";
                    circle.style.transform="translateY(-50%)";
                }
                
            })
        });
    });
 
   
}  