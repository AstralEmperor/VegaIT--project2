var navToggle2 = document.getElementsByClassName('toggle2');

for(i = 0; i < navToggle2.length; i++){
    navToggle2[i].addEventListener("click",function(){
        var nav__secondary = this.parentNode.nextElementSibling;

        if( nav__secondary.style.display === "flex"){

            nav__secondary.style.display = "none";
            this.innerHTML = 'expand_more';
            this.setAttribute('aria-expanded','false');
        }else{
            nav__secondary.style.display = "flex";
            this.innerHTML = 'expand_less';
            this.setAttribute('aria-expanded','true');
        }
    });
}