const menu=document.getElementsByClassName("menu"),
menuImg=document.getElementsByClassName("menuImg");

function handleImageOver(event){
    event.preventDefault();
    getId = event.target.id;
    currentSrc = event.target.src;
    const img = document.getElementById(getId);
    img.classList.add("fade");
    img.src = currentSrc.slice(0,-4) + '2.png';
}

function handleImageOut(event){
    event.preventDefault();
    getId = event.target.id;
    currentSrc = event.target.src;
    const img = document.getElementById(getId);
    img.classList.remove("fade");
    img.src = currentSrc.slice(0,-5) + '.png';
}

if(menuImg){
    Array.from(menuImg).forEach(img=>
        img.addEventListener("mouseover",handleImageOver)
    );
    Array.from(menuImg).forEach(img=>
        img.addEventListener("mouseleave",handleImageOut)
    );
}