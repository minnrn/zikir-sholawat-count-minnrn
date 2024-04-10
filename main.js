document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen-elemen HTML yang dibutuhkan
    const counterDisplay = document.getElementById('counterDisplay');
    const incrementButton = document.getElementById('incrementButton');
    const resetButton = document.getElementById('resetButton');

    // Ambil nilai counter dari localStorage atau atur ke 0 jika tidak ada
    let counter = parseInt(localStorage.getItem('zikirCounter')) || 0;

    // Tampilkan nilai counter awal
    counterDisplay.textContent = counter.toString();

    // Tambah event listener untuk tombol tambah
    incrementButton.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter.toString();
        // Simpan nilai counter ke localStorage
        localStorage.setItem('zikirCounter', counter.toString());
    });

    // Tambah event listener untuk tombol reset
    resetButton.addEventListener('click', () => {
        counter = 0;
        counterDisplay.textContent = counter.toString();
        // Hapus nilai counter dari localStorage
        localStorage.removeItem('zikirCounter');
    });
});
