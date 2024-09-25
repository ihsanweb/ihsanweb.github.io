function toggleMenu() {
    var menu = document.getElementById("navMenu");
    menu.classList.toggle("active"); // Toggle kelas active
}

function searchNovel() {
    const query = document.getElementById('searchInput').value.toLowerCase(); // Ambil input pencarian dan ubah menjadi huruf kecil
    const table = document.getElementById('storyTable');
    const rows = table.getElementsByTagName('tr'); // Ambil semua baris di tabel

    for (let i = 1; i < rows.length; i++) { // Mulai dari 1 untuk melewati header
        const title = rows[i].getAttribute('data-title').toLowerCase(); // Ambil judul
        const author = rows[i].getAttribute('data-author').toLowerCase(); // Ambil penulis

        // Periksa apakah query ada dalam judul atau penulis
        if (title.includes(query) || author.includes(query)) {
            rows[i].style.display = ''; // Tampilkan baris jika cocok
        } else {
            rows[i].style.display = 'none'; // Sembunyikan baris jika tidak cocok
        }
    }
}