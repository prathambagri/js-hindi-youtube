// throttling - kisi particular code ke no of excutions ko kam kardena 

const btn=document.querySelector("#throt_evt");  
      
//function for Throttling  
const throttleFunction=(func, delayTime)=>{  
  
// Previously invoked time of the function  
let prev = 0;  
return (...args) => {  // "..." is the spread operator here returning the function with the array of arguments 

    // Current invoked time of the function  
    let current = new Date().getTime();
    if(current - prev> delayTime){  
    prev = current;  

    return func(...args);  
    }  
}  
}  
document.querySelector('#center')
.addEventListener("mousemove", throttleFunction((details)=>{  
    // your less repeat function come under here

    let div = document.createElement("div"); 
    div.classList.add('imagediv');
    div.style.left=details.clientX+'px';
    div.style.top=details.clientY+'px';

    var img = document.createElement("img"); 
    img.setAttribute("src","https://images.unsplash.com/photo-1731328667980-9ea08c5edc07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8");
    div.appendChild(img);

    document.body.appendChild(div)

    gsap.to(img,{
        y: "0",
        ease: Power1,
        duration: .6,
    })

    gsap.to(img,{
        y: "100%",
        delay: .6,
        ease: Power2,
    })

    setTimeout(function(){
        div.remove();
    },1000);
}, 400));  
