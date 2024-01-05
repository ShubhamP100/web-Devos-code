let userScore=0;
let RobotScore=0;

const choices= document.querySelectorAll(".choice");
// now we write a code for computer game 
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const RobotScorePara=document.querySelector("#Robot-score");


const gecompchoice= ()=>{// yeh main logic he!!!
    const  options=["stone","paper","scissors"];
    const randval=Math.floor(Math.random()*3);
    return options[randval];
};

const drawGame=()=>{
    console.log("game draw,maja nahi aya");
    msg.innerText="Game draw.Play again";
    msg.style.backgroundColor="#081b31"
};
const showwinner=(userwin,userChoice,computerchoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! ${userChoice} beat ${computerchoice}`;
        msg.style.backgroundcolor="#081b31";
    }else{
        RobotScore++;
        RobotScorePara.innerText=RobotScore;
        console.log("tussi har gaye");
        msg.innerText=`you lose.${computerchoice} beat yr ${userChoice}`;
    }
};
const pcchoice= (userChoice)=>{
  
  // user choice done
  // Now we generate pc choice
  const computerchoice=gecompchoice();

  if(userChoice=== computerchoice){
    drawGame();

  }else{
    let userwin=true;
    if(userChoice==="stone"){
        // scissor paper
       userwin= computerchoice==="paper"? false: true;
    } else if(userChoice==="paper"){
        userwin=computerchoice==="scissors"?false:true;
    } else {
        userwin=computerchoice==="stone"?false:true;
    }
    showwinner(userwin,userChoice,computerchoice);
  }
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    
         pcchoice(userChoice);
    });
});
