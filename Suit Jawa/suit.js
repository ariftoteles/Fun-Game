function getPilihanComp() {
    const nilai = Math.floor(Math.random()*3)+1;
    if (nilai === 1) return "gajah";
    if (nilai === 2) return "orang";
    return "semut";
}

function getHasil (comp, player) {
    if (comp === player) return "Draw";
    if (comp === "gajah" && player === "orang") return "Kalah";
    if (comp === "orang" && player === "semut") return "Kalah";
    if (comp === "semut" && player === "gajah") return "Kalah";
    return "Menang";
}

// Long Logic

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function() {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer);
//     console.log(pilihanComp , pilihanPlayer, hasil);

//     const imageComp = document.querySelector(".img-comp");
//     imageComp.setAttribute("src", "img/"+pilihanComp+".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// })

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function() {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer);
//     console.log(pilihanComp , pilihanPlayer, hasil);

//     const imageComp = document.querySelector(".img-comp");
//     imageComp.setAttribute("src", "img/"+pilihanComp+".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// })

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function() {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer);
//     console.log(pilihanComp , pilihanPlayer, hasil);

//     const imageComp = document.querySelector(".img-comp");
//     imageComp.setAttribute("src", "img/"+pilihanComp+".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// })

// Simple Logic
// Mencari class name dalam elemen img
const imageSelect = document.querySelectorAll("table.player tr td img");
imageSelect.forEach(function(img) {
img.addEventListener("click", function() {
        const pilihanComp = getPilihanComp();
        const pilihanPlayer = img.className;
        const hasil = getHasil(pilihanComp, pilihanPlayer);

        // Memanggil fungsi animasi putar img
        putarImage();

        // Jalankan random image setelah fungsi animasi putar selesai
        setTimeout(function(){
            const imageComp = document.querySelector(".img-comp");
            imageComp.setAttribute("src", "img/"+pilihanComp+".png");
    
            const info = document.querySelector(".info");
            info.innerHTML = hasil;
        },1000)
        
})}) ;

// Fungsi Animasi Putar Image
function putarImage() {
    const imgComp = document.querySelector(".img-comp");
    const gambar = ['gajah','orang','semut'];
    let i = 0;
    const startTime = new Date().getTime();
    
    setInterval(function() {
        if (new Date().getTime() - startTime > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute("src", "img/"+gambar[i++]+".png");
        if (i === gambar.length) i=0;
    }, 100)

}