let name = prompt("İsminizi yazın","Merhabalar aramıza hoşgeldin");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML} <bold style="color: #e98208; text-transform: uppercase; margin-left:10px;" >${name}</bold>`
document.querySelector("#myName");



// Bu dosya kullanıcıdan prompt ile değer alıp ardından kullanıcının girdiği ismi text dosyamıza yazmak.
  