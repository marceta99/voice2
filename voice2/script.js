const playButton= document.querySelector("#play-button") ; 
const pauseButton= document.querySelector("#pause-button") ; 
const stopButton= document.querySelector("#stop-button") ; 
const textInput= document.querySelector("#text") ; 
const speedInput= document.querySelector("#speed") ; 




playButton.addEventListener("click", ()=>{
 
//na klik play pokreni funkciju playText() 
//text input value je onaj tekst koji smo ispisali u text boxu 
playText(textInput.value) ; 
});

/*pauseButton.addEventListener("click",()=>{
pauseText() ; 

}); */

stopButton.addEventListener("click",()=>{
stopText() ; 

}) ; 





function playText(text){

if(speechSynthesis.speaking){
    return ; //ako pritisnemo dva puta play necemo da ispadne neka greska vec da prekine odmah
}

//ako je govor pauziran i ako imamo jos teksta da izgovorimo 
/*if(speechSynthesis.paused && speechSynthesis.speaking){
    return speechSynthesis.resume() ; 
}*/



//dali smo paramatear text koji treba da izgovori 
//i saadrzi jos u sebi ono kako zelimo tekst da se izgovori 
//kojom brzinom ,kojim glasnom i kojim pichom

const izgovoriOvo = new SpeechSynthesisUtterance(text) ; 
izgovoriOvo.rate = speedInput.value || 1  ; //da speed bude 1 ako je
                                        //input value null 
                                        //tacnije da bude default 1
                                      //pre nego sto se unese nesto drugo 

                                      
//ovo ce da onemuguci da se pise tekst dok se prica ali kada se prekine
//sa pricanjem onda ce ponovo moci da se pise  u text-box
textInput.disabled = true ; 

izgovoriOvo.addEventListener("end",() =>{
textInput.disabled = false ; 

}) ;                                       


speechSynthesis.speak(izgovoriOvo) ; 

}




/*function pauseText(){
    //ako prica onda u tom slucaju mozes da pauziras pricanje  
    //jer ako ne prica onda ne zelimo da pauzira
    if(speechSynthesis.speaking){
        speechSynthesis.pause() ; 
    }
    
}*/

function stopText(){
    speechSynthesis.cancel() ; 
}