const imgBtn=document.querySelector(".jsUl");
console.log(imgBtn);

function paintMenuImg(folderName){
    const li=document.createElement("li");
    li.className="menu";
    const img=document.createElement("img");
    img.setAttribute("src","../images/"+folderName+"/"+1+".png");
    img.setAttribute("width","300");
    const title=document.createTextNode(folderName);
    title.innerText=folderName;
    li.appendChild(img);
    li.appendChild(title);
    imgBtn.appendChild(li);
}

paintMenuImg("sinchon_0710");
paintMenuImg("sinchon_0724");
paintMenuImg("sinchon_0717");
