const cursor = document.querySelector(".cursor")
const elems = document.querySelectorAll(".elem")

function queen(){
    elems.forEach((elem)=>{
        elem.addEventListener("mouseover",function(){
            cursor.style.borderRadius = "0"
            cursor.style.width = "20vw"
            cursor.style.height = "20vw"
            var img = elem.getAttribute("data-i")
            cursor.style.backgroundImage =  `url(${img})`
            cursor.style.transform = "translate(50%,50%)"
            cursor.style.mixBlendMode = "normal"
    })

    elem.addEventListener("mouseleave",function(){
        cursor.style.borderRadius = "50%"
        cursor.style.width = "1vw"
        cursor.style.height = "1vw"
        cursor.style.backgroundImage = 'none'; 
        cursor.style.mixBlendMode = "difference"

        
    // console.log("hello");
})
    })
}

// queen();



function isMobileDevice() {
    return navigator.userAgent.match(/Android|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/);
  }


  if(!isMobileDevice()){
    queen();
    console.log("hello")
  }