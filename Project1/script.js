const counter =document.querySelector('.counter');
const counterTitle =document.querySelector('.counter__title');
const counterValue =document.querySelector('.counter__value');
const increaseButton =document.querySelector('.counter__button--increase');
const decreaseButton =document.querySelector('.counter__button--decrease');
const resetButton =document.querySelector('.counter__reset-button');

const increaseCounter =()=>{
     const currentValue =parseInt(counterValue.textContent,10);
     let  newValue =currentValue+1;
    
      //checking the value condition
    newValue >5?(
        newValue =5,
        counter.classList.add('counter--limit'),
        counterTitle.innerHTML='Limit! Buy <b>Pro</b> for >5',
        increaseButton.disabled=true,
        decreaseButton.disabled=true
        
    ):(
        // if it reaches to 5
        increaseButton.blur(),
        counterValue.textContent=newValue
        

    )
};

const decreaseCounter =()=>{
    const currentValue =parseInt(counterValue.textContent,10);
    let newValue =currentValue-1;

    currentValue<=0?(
        
        newValue=0,
        counterValue.textContent=newValue
    ):(
        // if it reaches to 0
        counterValue.textContent=newValue,
        decreaseButton.blur()
    )
}




const resetCounter = () =>{
    //set the counter initla value to the zero
   counterValue.textContent=0;
    //reset the bg-color
    counter.classList.remove('counter--limit');

    // //reset the counter title;
    counterTitle.textContent="Fancy Counter";


    increaseButton.disabled=false;
    decreaseButton.disabled=false;

    resetButton.blur();


}
increaseButton.addEventListener('click',increaseCounter);
decreaseButton.addEventListener('click',decreaseCounter);
resetButton.addEventListener('click',resetCounter);