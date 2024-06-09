const yesBtn=document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function () {
    alert("sabia que ibas a decir que si")
});
const noBTn=document.querySelector("#noBtn");

noBTn.addEventListener("mouseover", function () {
    const randomX= parseInt(Math.random()*100);
    const randomY=parseInt(Math.random()*100);
    noBTn.style.setProperty("top",randomY+"%");
    noBTn.style.setProperty("left",randomX+"%");
    noBTn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);
})

   



    







