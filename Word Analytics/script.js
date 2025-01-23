const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

const inputHandler =()=>{
   
    //input validation
    if(textareaEl.value.includes(`<script>`)){
        alert("you cannot use <script> in this text area")
        textareaEl.value =textareaEl.value.replace(`<script>`,"");
    }
    
    let numberOfWords =textareaEl.value.split(' ').length;

    if(textareaEl.value.length === 0){
        numberOfWords =0;
    }
    
    const numberOfCharacters =textareaEl.value.length;
    const twitterCharacterLeft = 280 - numberOfCharacters;
    const facebookCharacterLeft = 2200 -numberOfCharacters;

    // add visual indicator for condition
    if(twitterCharacterLeft < 0){
        twitterNumberEl.classList.add("stat__number--limit")
    }else{
        twitterNumberEl.classList.remove("stat__number--limit")
    }
    if(facebookCharacterLeft < 0){
        facebookNumberEl.classList.add("stat__number--limit")
    }else{
        facebookNumberEl.classList.remove("stat__number--limit")
            
    }
    
     // set the current Numbers
    wordsNumberEl.textContent = numberOfWords;
    charactersNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharacterLeft
    facebookNumberEl.textContent =facebookCharacterLeft
}
textareaEl.addEventListener("input",inputHandler)