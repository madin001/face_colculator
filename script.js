let elTitle = document.querySelector('.title');



form.addEventListener('submit', function(e){
    e.preventDefault();
    
    let numberFirst =document.querySelectorAll('.input')[0].value.trim();
    let numberSecond =document.querySelectorAll('.input')[1].value.trim();

    if(select.value === 'add'){
        let result =elTitle.textContent=Number(numberFirst)+ Number(numberSecond);
        console.log(result)
    }

     if(select.value === 'subtraction'){
        let result =elTitle.textContent=numberFirst - numberSecond;
        console.log(result)
    }

     if(select.value === 'multiplication'){
        let result =elTitle.textContent=numberFirst *numberSecond;
        console.log(result)
    }

     if(select.value === 'divede'){
        let result =elTitle.textContent=numberFirst/numberSecond;
        console.log(result)
    }

})