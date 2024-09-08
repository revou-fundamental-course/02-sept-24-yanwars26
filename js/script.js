// Luas Segitiga
function hitungLuasSegitiga() {
    var alas = parseFloat(document.getElementById("alas-segitiga").value);
    var tinggi = parseFloat(document.getElementById("tinggi-segitiga").value);
    var hasilLuas = document.getElementById("hasil-luas");
    var rumusluas =  document.getElementById("rumus-luas-segitiga")

    // Validasi input
    if (alas > 0 && tinggi > 0 && !isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        rumusluas.textContent = "L = 1/2 x a x t"
        hasilLuas.innerHTML = "L = 1/2 x "+ alas +" x " +tinggi+ "<br>L = " + luas;
    } else {
        hasilLuas.textContent = "Masukkan Nilai Panjang Alas dan Tinggi Terlebih Dahulu";
    }
}


//Keliling Segitiga
function hitungKelilingSegitiga(){
    var sisi1 = parseFloat(document.getElementById("s1").value);
    var sisi2 = parseFloat(document.getElementById("s2").value);
    var sisi3 = parseFloat(document.getElementById("s3").value);
    var hasilKeliling = document.getElementById("hasil-keliling");
    var rumusKeliling =  document.getElementById("rumus-keliling-segitiga");
    //validasi input
    if (sisi1 <= 0 ||sisi2 <= 0 ||sisi3 <= 0){
        hasilKeliling.textContent="Sisi segitiga harus bernilai positif";
        return;
    }
    if (isNaN(sisi1)||isNaN(sisi2)||isNaN(sisi3)){
        hasilKeliling.textContent="Masukan Sisi Segitiga"
        return;
    }
    var keliling = sisi1 + sisi2 + sisi3;
    rumusKeliling.innerHTML="K = S1 + S2 + S3 = " +sisi1+ " + " + sisi2 + " + " + sisi3 ;
    hasilKeliling.textContent="K = " +keliling;
}

function resetForm() {
    // Reset input Luas Segitiga
    document.getElementById("alas-segitiga").value = "";
    document.getElementById("tinggi-segitiga").value = "";
    document.getElementById("rumus-luas-segitiga").textContent = "";
    document.getElementById("hasil-luas").textContent = "";

    // Reset input Keliling Segitiga
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("rumus-keliling-segitiga").textContent = "";
    document.getElementById("hasil-keliling").textContent = "";
}
