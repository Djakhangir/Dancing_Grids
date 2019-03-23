
const head = document.querySelector('.wrapper');        //Selecting the class wrapper
let timeCircle = false;  
let i = 0 ;                                            // i value for the unique id
let width = window.innerWidth;
let height = window.innerHeight;
let heightx = window.innerHeight/15;
let widthx = window.innerWidth/15;
let itter = Math.round(widthx*heightx+1);



function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

                   //-------------------------------Pick randomly ID and change...--------------------//
function randomChange() {
    for(let i=1; i<itter; i++){
        let divEl = document.querySelector("#box"+i);
        divEl.style.backgroundColor = randomColor();
    }
}

                        //--------------------------Adding the div children----------------------------//
function gridSystem(){
    i++;                                    // increment i value 
    const time = randomTime(9,10)              // timing
    const element = document.createElement("div");  // Adding the tag
    element.classList.add("boxes");                   // Adding the class
    element.id=`box${i}`;                           // Adding the id property to the 
    head.appendChild(element);                      // Appending it to the wrapper class as a child
        setTimeout(() => { 
            
            // on randomTiming trigger setTimeout fn 
            // element.classList.remove('box')
            if (!timeCircle)                            // if it is not false
            gridSystem();                               //run the fn
        }, time) 

};


                        //---------------------------Change randomly color---------------------------//

function randomColor(){     //function which plays with rgba color sets;
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
        // console.log(`rgb(${r},${g},${b})`);
        return `rgb(${r},${g},${b})`;
}

// function randomRGB(){
//     return 'rgba(' + (Math.round(Math.random() * 360)) + ', 100%, 50%, 1)';
// }


gridSystem();
setInterval(randomChange, 30);


//stop the fn
// fill all the grid cells in a page instead of adding the scrolling to the page;