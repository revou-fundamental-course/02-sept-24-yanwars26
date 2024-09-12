function pilihsegitiga(){
    var tampilSegitigaKiri = document.getElementById('konten-segitiga-kiri');
    var tampilSegitigaKanan = document.getElementById('konten-segitiga-kanan');

    var tampilJajargenjangKiri = document.getElementById('konten-jajargenjang-kiri');
    var tampilJajargenjangKanan = document.getElementById('konten-jajargenjang-kanan');

    tampilSegitigaKanan.style.display = 'block'
    tampilSegitigaKiri.style.display = 'block';
    
    tampilJajargenjangKanan.style.display = 'none';
    tampilJajargenjangKiri.style.display = 'none';
}

function pilihjajargenjang(){
    var tampilJajargenjangKiri = document.getElementById('konten-jajargenjang-kiri');
    var tampilJajargenjangKanan = document.getElementById('konten-jajargenjang-kanan');

    var tampilSegitigaKiri = document.getElementById('konten-segitiga-kiri');
    var tampilSegitigaKanan = document.getElementById('konten-segitiga-kanan');

    tampilJajargenjangKanan.style.display = 'block';
    tampilJajargenjangKiri.style.display = 'block';

    tampilSegitigaKanan.style.display = 'none'
    tampilSegitigaKiri.style.display = 'none';
}

function hitungLS(){
    var alas = parseFloat(document.getElementById("as").value);
    var tinggi = parseFloat(document.getElementById("ts").value);
    var rumusluas = document.getElementById("rls");
    var hasilluas = document.getElementById("hls");
    if(alas>0 && tinggi>0 ){
        var luas = 0.5 * alas * tinggi;

        rumusluas.textContent="L = 1/2 * alas * tinggi"
        hasilluas.innerHTML="L = 1/2 * " +alas+ " * " +tinggi+ "<br>L = " +luas;
    }
    else{
        alert("Pastikan Nilai Bersifat Positif");
    }
}
function hitungKS(){
    var s1 = parseFloat(document.getElementById("s1").value);
    var s2 = parseFloat(document.getElementById("s2").value);
    var s3 = parseFloat(document.getElementById("s3").value);
    var rumuskeliling = document.getElementById("rks");
    var hasilkeliling = document.getElementById("hks");
    if(s1>0 && s2>0 && s3>0){
        var keliling = s1 + s2 + s3;

        rumuskeliling.textContent="K = S1 + S2 + S3"
        hasilkeliling.innerHTML="K = "+s1+" + "+s2+" + "+s3+"<br>K = "+keliling;
    }
    else{
        alert("Pastikan Nilai Bersifat Positif");
    }
}

// Perhitungan Jajar Genjang
function hitungLJ(){
    var alas = parseFloat(document.getElementById("aj").value);
    var tinggi = parseFloat(document.getElementById("tj").value);
    var rumusluas = document.getElementById("rlj");
    var hasilluas = document.getElementById("hlj");
    if(alas>0 && tinggi>0 ){
        var luas = alas * tinggi;

        rumusluas.textContent="L = alas * tinggi"
        hasilluas.innerHTML="L = " +alas+ " * " +tinggi+ "<br>L = " +luas;
    }
    else{
        alert("Pastikan Nilai Bersifat Positif");
    }
}

function hitungKJ(){
    var a = parseFloat(document.getElementById("akj").value);
    var b = parseFloat(document.getElementById("bj").value);
    var rumuskeliling = document.getElementById("rkj");
    var hasilkeliling = document.getElementById("hkj");
    if(a>0 && b>0 ){
        var keliling = 2*(a+b);
        rumuskeliling.textContent="K = 2 x (a + b)"
        hasilkeliling.innerHTML="K = 2 x (" +a+ " + " +b+ "<br>K = " +keliling;
    }
    else{
        alert("Pastikan Nilai Bersifat Positif");
    }
}

//Reset Hasil Perhitungan
function resetLS(){
    document.getElementById("rls").textContent = "";
    document.getElementById("hls").textContent = "";
}

function resetKS(){
    document.getElementById("rks").textContent = "";
    document.getElementById("hks").textContent = "";
}

function resetLJ(){
    document.getElementById("rlj").textContent = "";
    document.getElementById("hlj").textContent = "";
}

function resetKJ(){
    document.getElementById("rkj").textContent = "";
    document.getElementById("hkj").textContent = "";
}