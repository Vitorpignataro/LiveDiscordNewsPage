let slidersContent = [...document.querySelectorAll('.news-slider')]
console.log(slidersContent);

let buttonvai = [...document.querySelectorAll('.vaibtn')]
let buttonvol = [...document.querySelectorAll('.volbtn')]

slidersContent.forEach((cards, i) =>{
    let widthScreen = cards.getBoundingClientRect();
    
    buttonvai[i].addEventListener('click', () =>{
        cards.scrollLeft += widthScreen.width;
    })

    buttonvol[i].addEventListener('click', () =>{
        cards.scrollLeft -= widthScreen.width;
    })

})


let buttonhamburguer = document.querySelector('.hamburguer');


buttonhamburguer.onclick = function(){
    let navbar = document.querySelector('.navigation');
    let mainNavbar = document.querySelector('.navigation .main-navigation');
    mainNavbar.classList.toggle("clicked");
    navbar.classList.toggle("clicked");
}
