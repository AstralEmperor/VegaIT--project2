var collapse = document.getElementsByClassName('capabilities__collapse');

for (i = 0; i < collapse.length; i++){
    collapse[i].addEventListener("click", function(){
        var capabilities__content = this.nextElementSibling;
        var icon = this.querySelector('.icon');
        capabilities__content.style.display = "none";
        
        if (icon.innerHTML === 'remove' && capabilities__content.length !== 0){
            capabilities__content.style.display = "none";
            icon.innerHTML = 'add';
            this.setAttribute('aria-expanded', 'false');
        }else if (icon.innerHTML === 'add' && capabilities__content.childNodes.length === 0){
            icon.innerHTML = 'remove';
            this.setAttribute('aria-expanded', 'true');
        }else {
            capabilities__content.style.display = "flex";
            icon.innerHTML = 'remove';
            this.setAttribute('aria-expanded', 'true');
        }
    });
}