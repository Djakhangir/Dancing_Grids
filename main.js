
const head = document.querySelector('.wrapper');        //Selecting the class wrapper
let i = 0 ;                                            // i value for the unique id
let width = window.innerWidth;
let height = window.innerHeight;
let heightx = window.innerHeight/15;
let widthx = window.innerWidth/15;
let itter = Math.round(widthx*heightx+1);


        //--------------RandomTime fn used for indicating the time beginning and when it to stop as max value-----------//

function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

                   //-------------------------------Pick randomly ID and change...--------------------//

function randomChange() {
    for(let i=1; i<itter; i++){
        let divEl = document.querySelector("#box"+i); 
   if (divEl && head) {       // if div and head change the bricks color randomly as well as background; for css delete head
        divEl.style.backgroundColor = randomColor();
        head.style.backgroundColor = randomColor();     //comment in this and comment out css keyframes and body animations
   } else {
       break;
    }
  } 
}

                        //--------------------------Adding the div children----------------------------//
function gridSystem(){ 
    i++;                                        // increment i value 
    const time = randomTime(9,10)              // timing
    const element = document.createElement("div");  // Adding the tag
    element.classList.add("boxes");                   // Adding the class
    element.id=`box${i}`;                           // Adding the id property to the 
    head.appendChild(element);                      // Appending it to the wrapper class as a child
    if (head.scrollHeight === height) {    // if scrollHeight is equal to window.height
    setTimeout(() => {                          // on randomTiming trigger setTimeout fn 
            gridSystem();                               //run the fn
        }, time) 
    } else {                            //otherwise stop;
        head.removeChild(element);
    }
};

                        //---------------------------Change randomly color---------------------------//

function randomColor(){     //function which plays with rgba color sets;
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
        // console.log(`rgb(${r},${g},${b})`);
        return `rgb(${r},${g},${b})`;
}

gridSystem();
setInterval(randomChange, 30);
