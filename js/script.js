// Luas Segitiga
function hitungLuasSegitiga() {
    var alas = document.getElementById("alas-segitiga").value;
    var tinggi = document.getElementById("tinggi-segitiga").value;
    var hasilLuas = document.getElementById("hasil-luas");
    var rumusluas =  document.getElementById("rumus-luas-segitiga")

    // Validasi input
    if (alas > 0 && tinggi > 0) {
        var luas = 0.5 * alas * tinggi;
        rumusluas.textContent = "L = 1/2 x a x t"
        hasilLuas.innerHTML = "L = 1/2 x "+ alas +" x " +tinggi+ "<br>L = " + luas;
    } else {
        hasilLuas.textContent = "Masukkan Nilai Panjang Alas dan Tinggi Terlebih Dahulu";
    }
}