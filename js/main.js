let myClock = document.querySelector("#dateTime");

var date = new Date();
// Javascriptte tarih ve zaman almak için date nesnesi kullanılır. 

document.write("Bugün: "+date.getDay()+". gün");
// getday ile gün bilgisi alırız, mantığı şöyle işliyor
// Pazar 0; Pazartesi 1; Salı 2; ... Cumartesi 6; 0-6

var deger = date.getDay();

switch(deger){
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
    default:
        day="Yanlış";
        break;
}

document.write(" yani günlerden: "+day);