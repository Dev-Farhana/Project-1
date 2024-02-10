
gsap.from("#tooth-icon", {
    y: -100, 
    duration: 3,
    stagger : 1 
});

gsap.to( "#tooth-icon", {
    duration: 3,
    delay:2,
    x:5,
    stagger : 1 
})

gsap.from(".h1", {
    delay: 2, 
    duration: 3,
    opacity: 0 ,
    stagger : 1 
});


gsap.fromTo(".down-arrow", {
    y: 0,}, 
 {  y: -30,
    duration: 1,
    repeat: -1,
    yoyo: true
});

gsap.to( "#img" , {
    rotate: 40,
    x:50,
    duration:3,
    stagger : 1 ,
    opacity: 0,
    delay:5
})
gsap.to("#img2" , {
    rotate: 20,
    x:50,
    delay: 6,
    duration:3,
    stagger : 1, 
    opacity:0
})
gsap.to("#img3" , {
    rotate: 20,
    x:50,
    delay: 7,
    duration:3,
    stagger : 1, 
    opacity:0
})
gsap.to( "#img1" , {
    rotate: 20,
    x:50,
    delay:8,
    duration:3,
    stagger : 1 ,
    opacity:0
})

