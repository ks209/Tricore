function index(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:"#page1 h1",
            scroller:"main",
            start:"top 27%",
            end:"top -200%",
            scrub:2,
        }
    })
    
    tl.to("#page1 h1",{
        x: -200,
    },"anim1")
    
    tl.to("#page1 h2",{
        x: 200,
    },"anim1")
    
    tl.to("#video-container video",{
        width: "80%",
    },"anim1")
    
    tl.to("#page2 span",{
        color: "purple"
    })
    
    tl.to("main",{
        backgroundColor: "#fff"
    })
    
    tl.to("main",{
        backgroundColor: "#000",
    });
}



function mobile(){

        var tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page1",
                scroller:"main",
                start:"top -10%",
                end:"top -100%",
                scrub:2,
            }
        })
        
        tl.to("#page1 h1",{
            x: -200,
        },"anim1")
        
        tl.to("#page1 h2",{
            x: 200,
        },"anim1")
        
        tl.to("#video-container video",{
            width: "100%",
        },"anim1")
        
        tl.to("#page2 span",{
            color: "purple"
        },"anim1")
        
        tl.to("main",{
            backgroundColor: "#fff",
            duration:5,
            delay: 5,
        })
        
        tl.to("main",{
            backgroundColor: "#000",
            duration:5,
        });
    }



function isMobileDevice() {
    return navigator.userAgent.match(/Android|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/);
  }

  
  if (isMobileDevice()) {

    mobile();

  } else {
    index();
  }