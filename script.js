var tl = gsap.timeline();
tl.from('.left h3',{
    scale:0,
    opacity:0,
    duration:1,
    delay:.2,
    stagger:.2,
    scrub:2
})

tl.from('.center img, .center h3',{
    scale:0,
    opacity:0,
    duration:1,
    scrub:2
})

tl.from('.right button',{
    scale:0,
    opacity:0,
    duration:1,
    scrub:2
})

tl.from('.left-p img',{
    scale:0,
    duration:1,
    scrub:3,
    stagger:.2
})

function repeatanim(){
    
        gsap.to('.left-p img:nth-child(1)',{
            x:65,
            y:200,
            zIndex:9,
            duration:2, 
            delay:3
        },'a')
        gsap.to('.left-p img:nth-child(2)',{
            x:145,
            y:-137,
            zIndex:10,
            duration:2, 
            delay:3
        },'a')
        gsap.to('.left-p img:nth-child(3)',{
            x:-200,
            y:-100,
            zIndex:8,
            duration:2, 
            delay:3,
        },'a')
        

        gsap.to('.left-p img:nth-child(1)',{
            x:225,
            y:90,
            zIndex:10,
            duration:2, 
            delay:3
        
        },'b')
        gsap.to('.left-p img:nth-child(2)',{
            x:-40,
            y:-200,
            zIndex:8,
            duration:2, 
            delay:3,
        },'b')
        gsap.to('.left-p img:nth-child(3)',{
            x:-150,
            y:150,
            zIndex:9,
            duration:2, 
            delay:3
        },'b')


        gsap.to('.left-p img:nth-child(1)',{
            x:0,
            y:-10,
            zIndex:8,
            duration:2, 
            delay:3,
        },'c')
        gsap.to('.left-p img:nth-child(2)',{
    
            x:0,
            y:0,
            zIndex:9,
            duration:2, 
            delay:3
        },'c')
        gsap.to('.left-p img:nth-child(3)',{
            x:0,
            y:0,
            zIndex:10,
            duration:2, 
            delay:3
        
        },'c')
        
        
   
}
repeatanim();



