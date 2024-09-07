document.addEventListener('DOMContentLoaded', function() {
    const pilihOpsi = document.getElementById('pilih-opsi');
    const formSegitiga = document.getElementById('form-segitiga');
    const formJajargenjang = document.getElementById('form-jajargenjang');

    // Fungsi untuk memperbarui tampilan form berdasarkan nilai dropdown
    function updateFormDisplay() {
        const selectedValue = pilihOpsi.value;

        if (selectedValue === 'segitiga') {
            formSegitiga.style.display = 'block'; // Menampilkan form segitiga
            formJajargenjang.style.display = 'none'; // Menyembunyikan form jajargenjang
        } else if (selectedValue === 'jajargenjang') {
            formSegitiga.style.display = 'none'; // Menyembunyikan form segitiga
            formJajargenjang.style.display = 'block'; // Menampilkan form jajargenjang
        } else {
            formSegitiga.style.display = 'none'; // Menyembunyikan form segitiga
            formJajargenjang.style.display = 'none'; // Menyembunyikan form jajargenjang
        }
    }

    // Menambahkan event listener untuk perubahan pada dropdown
    pilihOpsi.addEventListener('change', updateFormDisplay);

    // Memperbarui tampilan form saat halaman pertama kali dimuat
    updateFormDisplay();
});
