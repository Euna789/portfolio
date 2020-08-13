const contents=document.getElementsByClassName("contents");

let showing=false;
let constId="1";

function paintContent(detail,Id){
    var repeat=Id[0];
    for (i=1;i<repeat;i++){
        const img=document.createElement("img");
        img.src="../images/"+Id+"/"+i+".png";
        img.width="230";
        img.className="img";
        console.log(img);
        detail.appendChild(img);
    }
}

function removeElement(cell){
    while ( cell.hasChildNodes() ) {
        cell.removeChild( cell.firstChild ); 
    }
}

function showContent(Id){
    const detail=document.getElementById("detail");
    removeElement(detail);
    if (showing===false){
        constId=Id;
        //detail.innerText=Id;
        paintContent(detail,Id);
        detail.style.display='block';
        showing=true;
        console.log(constId,Id);

    }
    else if(showing===true && constId === Id){
        detail.style.display='none';
        showing=false;
        console.log(constId,Id);
    }
    else{
        //detail.innerText=Id;
        showing=true;
        paintContent(detail,Id);
        constId=Id;
        console.log(constId,Id);

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