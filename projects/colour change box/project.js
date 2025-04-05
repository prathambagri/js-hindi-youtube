var rec = document.querySelector("#center");
rec.addEventListener("mousemove",function (details) {
    var rectLocation= rec.getBoundingClientRect();
    var insideRectangle = details.clientX - rectLocation.left;
    if(insideRectangle<rectLocation.width/2){
        var redColor = gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideRectangle);
        gsap.to(rec, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4
        });  
    }
    else{
        var blueColor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideRectangle);
        gsap.to(rec, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        });
        
    }
    
})
rec.addEventListener("mouseleave",function () {
    gsap.to(rec,{
        backgroundColor: `white`,
    })
})
