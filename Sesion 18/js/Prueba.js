// console.log("fantasma");
// const selector = document.querySelector("#fantasma");
// selector.classList.add("magictime", "puffIn");

$("#fantasma").hover(function(){
    $(this).addClass("magictime openUpLeft");
})

$("#iris").hover(function(){
    $(this).addClass("magictime perspectiveRightReturn");
})