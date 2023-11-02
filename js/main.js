const header = [document.querySelector("#container-header"),
                document.querySelector(".logo-photo-header"),
                document.querySelector(".logo-text-header"),
                document.querySelector(".daftar-nav-2")];
                //Header Array = 0,1,2
window.onscroll = function(){headerScroll()};
let responsive = window.matchMedia("(max-width: 450px)")
function headerScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header[0].style.height = "80px";
        header[0].style.position = "fixed";
        header[0].style.background = "rgb(70, 70, 70)";
        header[0].style.transition = ".3s";
        header[1].style.display = "block";
        header[1].style.transition = ".2s";
        header[2].style.display = "none";
        header[2].style.transition = ".2s";
        
    } else {
        header[0].style.height = "100px";
        header[0].style.position = "absolute";
        header[0].style.background = "transparent";
        header[1].style.display = "none";
        header[2].style.display = "block";
        header[3].style.display = "none";
    } if(header[2].style.display == "block" && responsive.matches){
        header[2].style.display = "none"
    }
    
}