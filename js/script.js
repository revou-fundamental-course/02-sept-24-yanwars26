//Ambil dari id rumus dan menambahkan event ubah
document.getElementById('rumus-segitiga').addEventListener('change', function () {
    var selectedValue = this.value;

    // Ambil elemen form luas dan keliling segitiga
    var formLuasSegitiga = document.querySelector('.form-luas-segitiga');
    var formKelilingSegitiga = document.querySelector('.form-keliling-segitiga');
    
    // Cek value yang dipilih dan tampilkan form yang sesuai
    if (selectedValue === 'ls') {
        formLuasSegitiga.style.display = 'block';
        formKelilingSegitiga.style.display = 'none';
    } else if (selectedValue === 'ks') {
        formLuasSegitiga.style.display = 'none';
        formKelilingSegitiga.style.display = 'block';
    }
});

//Ambil dari id rumus dan menambahkan event ubah
document.getElementById('rumus-jajargenjang').addEventListener('change', function () {
    var selectedValue = this.value;

    // Ambil elemen form luas dan keliling jajargenjang
    var formLuasJajarGenjang = document.querySelector('.form-luas-jajargenjang');
    var formKelilingJajarGenjang = document.querySelector('.form-keliling-jajargenjang');

    if (selectedValue === 'lj') {
        formLuasJajarGenjang.style.display = 'block';
        formKelilingJajarGenjang.style.display = 'none';
    } else if (selectedValue === 'kj') {
        formLuasJajarGenjang.style.display = 'none';
        formKelilingJajarGenjang.style.display = 'block';
    }
});

// Luas Segitiga
function hitungLuasSegitiga() {
    var alas = parseFloat(document.getElementById("alas-segitiga").value);
    var tinggi = parseFloat(document.getElementById("tinggi-segitiga").value);
    var hasilLuas = document.getElementById("hasil-luas");
    var rumusluas =  document.getElementById("rumus-luas-segitiga");

    // Validasi input
    if (alas > 0 && tinggi > 0 && !isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        rumusluas.textContent = "L = 1/2 x a x t"
        hasilLuas.innerHTML = "L = 1/2 x "+ alas +" x " +tinggi+ "<br>L = " + luas;
    } else {
        alert('Harap Isi Semua Form, Dan Angka Harus Bernilai Positif');
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
        alert('Angka Harus Bernilai Positif');
        return;
    }
    if (isNaN(sisi1)||isNaN(sisi2)||isNaN(sisi3)){
        alert('Harap Sisi Segitiga');
        return;
    }
    var keliling = sisi1 + sisi2 + sisi3;
    rumusKeliling.innerHTML="K = S1 + S2 + S3 = " +sisi1+ " + " + sisi2 + " + " + sisi3 ;
    hasilKeliling.textContent="K = " +keliling;
}

//---------------------------------------------------Rumus Jajar Genjang
//Luas Jajar Genjang
function hitungLuasJajargenjang(){
    var alas = parseFloat(document.getElementById("alas-jajargenjang").value);
    var tinggi = parseFloat(document.getElementById("tinggi-jajargenjang").value);
    var hasilLuas = document.getElementById("hasil-luas-jajargenjang");
    var rumusluas =  document.getElementById("rumus-luas-jajargenjang");

    //validasi
    // Validasi input
    if (alas > 0 && tinggi > 0 && !isNaN(alas) && !isNaN(tinggi)) {
        var luas = alas * tinggi;
        rumusluas.textContent = "L = a x t"
        hasilLuas.innerHTML = "L = "+ alas +" x " +tinggi+ "<br>L = " + luas;
    } else {
        alert('Harap Isi Semua Form, Dan Angka Harus Bernilai Positif');
    }
}

//Keliling Jajar Genjang
function hitungKelilingJajargenjang(){
    var a = parseFloat(document.getElementById("a-jajargenjang").value);
    var b = parseFloat(document.getElementById("b-jajargenjang").value);
    var hasilkeliling = document.getElementById("hasil-keliling-jajargenjang");
    var rumuskeliling =  document.getElementById("rumus-keliling-jajargenjang");

    //validasi
    // Validasi input
    if (a > 0 && b > 0 && !isNaN(a) && !isNaN(b)) {
        var luas = 2*(a + b);
        rumuskeliling.textContent = "L = 2 x (a + b)"
        hasilkeliling.innerHTML = "L = 2 x ("+ a +" + " +b+ ")<br>L = " + luas;
    } else {
        alert('Harap Isi Semua Form, Dan Angka Harus Bernilai Positif');
    }
}
function resetFormLS(){
    // Reset input Luas Segitiga
    document.getElementById("alas-segitiga").value = "";
    document.getElementById("tinggi-segitiga").value = "";
    document.getElementById("rumus-luas-segitiga").textContent = "";
    document.getElementById("hasil-luas").textContent = "";
}
function resetFormKS() {
    // Reset input Keliling Segitiga
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("rumus-keliling-segitiga").textContent = "";
    document.getElementById("hasil-keliling").textContent = "";
}
function resetFormLJ(){
    // Reset input Luas Jajar Genjang
    document.getElementById("alas-jajargenjang").value = "";
    document.getElementById("tinggi-jajargenjang").value = "";
    document.getElementById("rumus-luas-jajargenjang").textContent = "";
    document.getElementById("hasil-luas-jajargenjang").textContent = "";
}
function resetFormKJ() {
    // Reset input Keliling Jajar Genjang
    document.getElementById("a-jajargenjang").value = "";
    document.getElementById("b-jajargenjang").value = "";
    document.getElementById("rumus-keliling-jajargenjang").textContent = "";
    document.getElementById("hasil-keliling-jajargenjang").textContent = "";
}

function BDsegitiga(){
    const Segitiga = document.querySelector('.bd-segitiga');
    const JajarGenjang = document.querySelector('.bd-jajargenjang');
    var formLuasJajarGenjang = document.querySelector('.form-luas-jajargenjang');
    var formKelilingJajarGenjang = document.querySelector('.form-keliling-jajargenjang');



    Segitiga.style.display='block';
    JajarGenjang.style.display='none';
    formLuasJajarGenjang.style.display='none';
    formKelilingJajarGenjang.style.display='none';

}

function BDjajargenjang(){
    const Segitiga = document.querySelector('.bd-segitiga');
    const JajarGenjang = document.querySelector('.bd-jajargenjang');
    var formLuasSegitiga = document.querySelector('.form-luas-segitiga');
    var formKelilingSegitiga = document.querySelector('.form-keliling-segitiga');

    JajarGenjang.style.display='block';
    Segitiga.style.display='none';
    formLuasSegitiga.style.display='none';
    formKelilingSegitiga.style.display='none';
}