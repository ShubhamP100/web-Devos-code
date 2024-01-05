let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msgC=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

 let turnO= true // player X player O

 const arr=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
box.addEventListener("click",()=>{
  console.log("box clicked");
  if(turnO){// player 0  ki turn
  box.innerText="O";
  turnO=false;
  }else{
    box.innerText="X";
    turnO=true;
  }
  box.disabled=true;
  checkwinner();
});
});

const resetGame=()=>{
    turnO=true;
    enablebtn();
    msgC.classList.add("hide");

}
const disabledbtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`congrats,Winner is ${winner}`;
    msgC.classList.remove("hide");
    disabledbtn();
}
const checkwinner=()=>{
    for(let pattern of arr){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1=== val2 && val2=== val3){
                console.log("winner winner chicken dinner",val1);
              showwinner(val1);
            }
        }
    }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
