// Membuat elemen audio secara dinamis
const audio = new Audio('media/backsong.mp3');

// Memulai pemutaran otomatis
audio.autoplay = true;

// Opsional: Mengatur audio untuk berulang (loop)
audio.loop = true;

// Memulai pemutaran
audio.play().catch((error) => {
    console.error('Autoplay dibatasi oleh browser:', error);
});
