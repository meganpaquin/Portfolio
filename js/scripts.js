function showLogo() {
    $('nav').hide();
    $('main').hide();
    $('header').hide();
    $('footer').hide();
    $('.loading-logo').show();  

    setTimeout(hidelogo, 2000)
}

function hidelogo() {
    $('nav').fadeIn(200);
    $('main').fadeIn(200);
    $('header').fadeIn(200);
    $('footer').fadeIn(200);
    $('.loading-logo').fadeOut(1000); 

}

function hideName() {
    let navname = $('#nav-name')
    navname.hide();
}

$(window).scroll(function(){
    var myname = $('#myname');
    var navname = $('#nav-name');

    if ($(this).scrollTop() > 200){
        navname.fadeIn();
        myname.hide();
    }

    if ($(this).scrollTop() < 200){
        navname.hide();
        myname.fadeIn();
    }
})

function hideTabs(){
    for(i=1; i < 5; i++){
        panel = $("#panel-"+i)
        panel.hide();
    }
}

function showTab(input1, input2){
    content = $(input1)
    for(i=0; i < 5; i++){
        panel = $("#panel-"+i)
        panel.hide();
    }
    content.fadeIn(600);
    
    selected = $('.button-selected')
    selected.removeClass('button-selected')
    labels = $('label')
    labels.addClass('button')

    button = $(input2)
    button.addClass('button-selected')
    button.removeClass('button')
}

let slideIndex = 0;
function showSlides(){
    console.log("showing the slideshow")
    let i;
    let slides = $('.projectimg');
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "inline";
    slides[slideIndex-1].style.flex = 7;
    setTimeout(showSlides, 8000);
}


function init() {
    showLogo();
    hideTabs();
    hideName();
    showSlides();
}

window.onload = init;