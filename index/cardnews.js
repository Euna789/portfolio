const imgBtn=document.querySelector(".jsUl");
console.log(imgBtn);

function paintMenuImg(folderName){
    const li=document.createElement("li");
    li.className="menu";
    const div=document.createElement("div");
    div.className="imgTitle";
    const img=document.createElement("img");
    img.className="img";
    img.setAttribute("src","../images/"+folderName+"/"+1+".png");
    img.setAttribute("width","300");
    const title=document.createTextNode(folderName);
    title.innerText=folderName;
    div.appendChild(img);
    div.appendChild(title);
    li.appendChild(div);
    imgBtn.appendChild(li);
}

paintMenuImg("sinchon_0710");
paintMenuImg("sinchon_0724");
paintMenuImg("sinchon_0717");
