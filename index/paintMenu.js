const imgBtn=document.querySelector(".jsUl");

function paintMenuImg(folderName){
    const li=document.createElement("li");
    li.className="contents";
    const div=document.createElement("div");
    div.className="imgTitle";
    div.id=folderName;
    const img=document.createElement("img");
    img.className="img";
    img.id=folderName;
    img.setAttribute("src","../images/"+folderName+"/"+1+".png");
    img.setAttribute("width","230");
    const title=document.createTextNode(folderName);
    title.innerText=folderName;
    div.appendChild(img);
    div.appendChild(title);
    li.appendChild(div);
    imgBtn.appendChild(li);
}

switch(imgBtn.id){
    case "cardnews":
        paintMenuImg("8_sinchon_0710");
        paintMenuImg("7_sinchon_0724");
        paintMenuImg("6_sinchon_0717");
        paintMenuImg("6_sinchon_0807");
        break;
    case "game":
        paintMenuImg("returnOfBullet");
        paintMenuImg("Catizard");
    case "web":
        paintMenuImg("tooneview");
    case "chatbot":
        paintMenuImg("pibot");

}