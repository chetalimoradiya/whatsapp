"use client";

export default function ScrollButton(){

const scrollBottom=()=>{

window.scrollTo({

top:
document.body.scrollHeight,

behavior:
"smooth"

});

};

return(

<button

className="scroll-btn"

onClick={scrollBottom}

>

⬇️

</button>

);

}