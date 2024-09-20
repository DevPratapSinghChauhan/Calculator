const btnEle = document.querySelectorAll("button")
// console.log(btnEle);
const inputELe= document.getElementById("result")

for(let i=0;i<btnEle.length;i++){
    btnEle[i].addEventListener( "click",()=>{
        // console.log(btnEle[i].textContent);
        const btnvalue=btnEle[i].textContent
        if(btnvalue=="C"){
            clearResult()
        }else if(btnvalue=="="){
            calculateResult()

        }else{
            appendValue(btnvalue)
        }

    })


}

function clearResult(){
    inputELe.value=""
}
function calculateResult(){
    inputELe.value=eval(inputELe.value)
}
function appendValue(btnvalue){
    inputELe.value += btnvalue
}