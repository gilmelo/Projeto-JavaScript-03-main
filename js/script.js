const cod = document.querySelector(".cod"),
qrInput = cod.querySelector(".form input");
generateBtn = cod.querySelector(".form button");
qrImage = cod.querySelector(".imagem img");

generateBtn.addEventListener("click", ()=>{
    let qrValue = qrInput.value;
    if (!qrValue) return;
   qrImage.src = `http://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&size=170x170`;
    cod.classList.add("active")
});