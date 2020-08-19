const contents=document.getElementsByClassName("contents"),
description=document.getElementsByClassName("description");

let showing=false;
let constId="1";

function showContent(Id){
    Array.from(description).forEach(i=>
        i.style.display='none');
    const name=document.getElementById('_'+Id);
    if (showing===false){
        constId=Id;
        name.style.display='block';
        showing=true;
    }
    else if(showing===true && constId === Id){
        name.style.display='none';
        showing=false;
    }
    else{
        showing=true;
        name.style.display='block';
        constId=Id;
    }
}

function handleImageClick(event){
    showContent(event.target.id);
}

if(contents){
    Array.from(contents).forEach(content=>
        content.addEventListener("click",handleImageClick)
    );
}
