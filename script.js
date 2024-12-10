// Daftar gombalan untuk Refti
const gombalanList = [
    "Kamu tuh seperti matahari, selalu bikin hari-hari aku lebih terang dan hangat.",
    "Jika aku bisa menyusun bintang-bintang di langit, aku akan buat nama kamu ada di sana.",
    "Ketika aku bilang aku cinta kamu, itu bukan sekadar kata-kata, tapi perasaan yang tulus dari hati.",
    "Setiap detik aku bersamamu, rasanya waktu berjalan begitu cepat, karena aku tidak pernah ingin kehilangan momen itu.",
    "Kamu adalah alasan kenapa aku percaya bahwa cinta itu bisa membuat segalanya terasa lebih indah."
];

// Event listener untuk tombol gombalan
document.getElementById('moreGombal').addEventListener('click', function() {
    // Ambil gombalan secara acak dari array gombalanList
    const randomGombal = gombalanList[Math.floor(Math.random() * gombalanList.length)];

    // Tampilkan gombalan tersebut di halaman
    document.getElementById('gombalOutput').textContent = randomGombal;
});
