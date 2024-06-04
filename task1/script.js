function calcuation(){
    let input=document.querySelector('.display');
    let buttons=document.querySelectorAll('button');

    let string=' ';
    let arr = Array.from(buttons);
    arr.forEach(button =>{
        button.addEventListener('click',(e)=>{
            if(e.target.innerHTML =='='){
                string = eval(string);
                input.value = string;

            }
            else if(e.target.innerHTML =='AC'){
                string ="";
                input.value = string;
            }
            else if(e.target.innerHTML == 'DEL'){
                string = string.substring(0,string.length-1)
                input.value = string;
            }
            else{
                string += e.target.innerHTML;
                input.value = string;
            }
        })

    })
   
}
calcuation();
function changecolor(){
    let calculator = document.querySelector(".calculator")
    let sun = document.querySelector("#sun")
    let moon = document.querySelector("#moon")


    sun.addEventListener('click',()=>{
        calculator.style.backgroundColor = "orangered",
        sun.style.display = "none",
        moon.style.display = "block",
        calculator.style.boxShadow =" 1px 5px 10px orangered "
    })
    moon.addEventListener('click',()=>{
        calculator.style.backgroundColor = "beige",
        sun.style.display = "block",
        moon.style.display = "none",
        calculator.style.boxShadow ="1px 5px 10px rgba(0, 0, 0, 0.526)"
    })
}
changecolor();