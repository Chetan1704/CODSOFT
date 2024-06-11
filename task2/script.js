var cursor = document.querySelector("#cursor")
var main = document.querySelector("main")
var nav = document.querySelector("nav")
var video = document.querySelectorAll("video")
var input = document.querySelectorAll("input")
var icon = document.querySelectorAll("a")
var submit = document.querySelector("#submit")
var page1 = document.getElementsByClassName("page1")
var page2 = document.getElementsByClassName("page2")
var page3 = document.getElementsByClassName("page3")
var page4 = document.getElementsByClassName("page4")
var page5 = document.getElementsByClassName("page5")
var mitcard = document.querySelector(".mitcard")
var bcgcard = document.querySelector(".bcgcard")
var abtmep = document.querySelector(".aboutme-p")
var abtp = document.querySelector(".abtp")
var aboutme = document.querySelector(".aboutme")


main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duartion:1,
        ease:"back.out"
    })
})
nav.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        opacity:0,
        scale:0
    })
})
nav.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        opacity:1,
        scale:1
    })
})
mitcard.addEventListener("mouseenter",function(){
   gsap.to(mitcard,{
    scale:1.1,
    duartion:1
   })
})
mitcard.addEventListener("mouseleave",function(){
    gsap.to(mitcard,{
        scale:1,
        duartion:1
    })
})

bcgcard.addEventListener("mouseenter",function(){
    gsap.to(bcgcard,{
     scale:1.1,
     duartion:1
    })
 })
 bcgcard.addEventListener("mouseleave",function(){
     gsap.to(bcgcard,{
         scale:1,
         duartion:1
     })
 })
 aboutme.addEventListener("mouseenter",function(){
    gsap.to(abtp,{
        scale:1.1,
        duartion:1
    })
 })
 aboutme.addEventListener("mouseleave",function(){
    gsap.to(abtp,{
        scale:1,
        duartion:1
    })
 })
    
