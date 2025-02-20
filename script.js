const buttons=document.querySelectorAll('.btn');
const body=document.querySelector('body');
buttons.forEach((butn)=>{
    butn.addEventListener('click',(ele)=>{
        if(ele.target.id==='black'){
            body.style.backgroundColor=ele.target.id
        }
        if(ele.target.id==='grey'){
            body.style.backgroundColor=ele.target.id
        }
        if(ele.target.id==='yellow'){
            body.style.backgroundColor=ele.target.id
        }
        if(ele.target.id==='white'){
            body.style.backgroundColor=ele.target.id
        }
        if(ele.target.id==='blue'){
            body.style.backgroundColor=ele.target.id
        }
    })
})
