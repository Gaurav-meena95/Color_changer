const buttons=document.querySelectorAll('.btn');
const body=document.querySelector('body');
buttons.forEach((butn)=>{
    butn.addEventListener('click',(ele)=>{
        let colorSelect=ele.target.id;
        if(colorSelect==='grey'){
            body.style.backgroundColor=colorSelect
        }
        if(colorSelect==='yellow'){
            body.style.backgroundColor=colorSelect
        }
        if(colorSelect==='white'){
            body.style.backgroundColor=colorSelect
        }
        if(colorSelect==='darkblue' ||colorSelect==='black' ){
            body.style.backgroundColor=colorSelect
            body.style.color = 'white';
        } else {
            body.style.color = 'black';
        }
        if(colorSelect==='peachpuff'){
            body.style.backgroundColor=colorSelect
        }
    })
})
