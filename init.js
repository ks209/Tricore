function init(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
init()


function playreel(){
    const cursor = document.querySelector(".cursor");
    const page = document.querySelector("main");

    page.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            scale:1,
            opacity:1,
            x: dets.x,
            y: dets.y,
        })
       })

       page.addEventListener("mouseleave", function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0,
        })
       })
}

playreel();


  function paisaeffect(){
    const circle = document.querySelector("#circle");
    const window = document.querySelector("main");

    circle.addEventListener("mouseover",function(){

      window.style.backgroundImage = "url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExazIzbm85YXE0aHltYzRoMXNkeG90bzJlemYybHd5cDc5ZnZqMXU3MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jR4zJug5VEhUANzO5w/giphy.gif)"
      console.log("hi");

      // window.style.backgroundRepeat = "no-repeat";
      // window.style.backgroundSize = "cover";




    }
    )

    circle.addEventListener("mouseleave",function(){

      window.style.backgroundImage = "url()"
      console.log("hi");

      


    }
    )


  }

  paisaeffect();

  function nav() {
    const hamburger = document.querySelector("#nav3 i"); // Use #nav3 i for targeting specificity
    const links = document.querySelectorAll("#nav2 a"); // Target all links within #nav2
  
    let isMenuOpen = false; // Use a boolean flag for clarity
  
    hamburger.addEventListener("click", function () {
      isMenuOpen = !isMenuOpen; // Toggle based on current state
  
      links.forEach(function (link) {
        link.style.display = isMenuOpen ? "block" : "none";
      });
  
      // Add class for styling hamburger icon (optional)
      hamburger.classList.toggle("active");
    });
  }
  
  nav();

