// var intRandom=0;
// function image_onclick(){
//     var arrImage=new Array("../images/1.png","../images/2.png","../images/3.png");
//     var imgSource=document.targetImg;
//     if (intRandom!==2){
//         intRandom++;
//     } else {
//         intRandom=0;
//     }
//     imgSource.src=arrImage[intRandom];
// }

const imgBtn=document.querySelector(".menus__img");

function paintMenuImg(folderName){
    const img=document.createElement("img");
    img.setAttribute("src","../images/"+folderName+"/"+1+".png");
    imgBtn.appendChild(img);
}

paintMenuImg("sinchon_0710");