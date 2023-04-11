const toggleBtn = document.getElementsByClassName('nav__toggleBtn')[0]
const navigation = document.getElementsByClassName('nav__primary')[0]
const nav = document.getElementsByClassName('nav')[0]
const body = document.getElementsByClassName('body')[0]
var link = document.querySelectorAll('.nav__Link');

toggleBtn.addEventListener('click',()=>{

navigation.classList.toggle('active')
toggleBtn.classList.toggle('close')
nav.classList.toggle('fixed')
body.classList.toggle('no-scroll')


    for(i = 0; i < link.length; i++){
        link[i].addEventListener('click',function(){
            navigation.classList.remove('active')
            toggleBtn.classList.remove('close')
            nav.classList.remove('fixed')
            body.classList.remove('no-scroll')
        })
    }
})