document.addEventListener("DOMContentLoaded", () => {
    // Animasi untuk navbar
    gsap.from("nav", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power3.out"
    });
});

window.addEventListener("load", () => {
    gsap.from(".main_img img", {
        duration: 5,          // Durasi animasi 2 detik
        x: 700,              // Memulai posisi dari 300px ke kanan
        opacity: 0,          // Awalnya transparan
        ease: "power2.out"   // Efek easing untuk transisi lebih halus
    });

    // Animasi untuk teks h1 dan paragraf
    gsap.from(".main_tag h1", {
        duration: 1.5,
        y: -50,              // Memulai posisi dari 50px ke atas
        opacity: 0,
        ease: "power2.out",
        delay: 0.5           // Menunda animasi agar sinkron dengan gambar
    });

    gsap.from(".main_tag p", {
        duration: 1.5,
        y: 50,               // Memulai posisi dari 50px ke bawah
        opacity: 0,
        ease: "power2.out",
        delay: 1             // Animasi dimulai setelah teks h1 selesai
    });


});




// Book data with descriptions

const bookData = {
    // Featured Books
    "Atomic Habits": {
        description: "Buku ini membahas bagaimana kebiasaan kecil dapat membawa perubahan besar dalam hidup. James Clear menjelaskan strategi praktis untuk membentuk kebiasaan positif dan menghilangkan kebiasaan negatif.",
        image: "image/book1.jpg",
        author: "James Clear",
        categories: "Pengembangan Diri"
    },
    "Laut Bercerita": {
        description: "Novel ini mengisahkan tentang peristiwa 1965 di Indonesia melalui perspektif seorang nelayan yang menemukan sebuah kotak berisi surat-surat dari seorang perempuan yang hilang.",
        image: "image/book2.jpg",
        author: "Leila S. Chudori",
        categories: "Novel"
    },
    "Home Sweet Loan": {
        description: "Cerita tentang empat sahabat yang berjuang membeli rumah idaman di tengah tantangan kehidupan dan karier mereka.",
        image: "image/book3.jpg",
        author: "Ninit Yunita",
        categories: "Novel"
    },
    "Soekarno: Sang Guru": {
        description: "Biografi mendalam tentang Presiden pertama Indonesia, Soekarno, yang menyoroti peranannya sebagai guru bangsa.",
        image: "image/book4.jpg",
        author: "Cindy Adams",
        categories: "Biografi"
    },
    "You Do You": {
        description: "Buku ini mengajak pembaca untuk menemukan diri mereka melalui eksperimen hidup dan kesadaran diri.",
        image: "image/book5.jpg",
        author: "Fellexandro Ruby",
        categories: "Pengembangan Diri"
    },
    "Filosofi Teras": {
        description: "Buku ini mengajarkan bagaimana menerapkan Stoicisme dalam kehidupan sehari-hari untuk mencapai kebahagiaan dan ketenangan batin.",
        image: "image/book6.jpg",
        author: "Henry Manampiring",
        categories: "Pengembangan Diri"
    },
    "Lukacita": {
        description: "Kumpulan cerita pendek yang mengangkat tema cinta, persahabatan, dan kehidupan dengan gaya penulisan khas Pidi Baiq.",
        image: "image/book7.jpg",
        author: "Pidi Baiq",
        categories: "Novel"
    },
    "Emotional Intelligence": {
        description: "Buku ini membahas pentingnya kecerdasan emosional dalam kehidupan pribadi dan profesional.",
        image: "image/book8.jpg",
        author: "Daniel Goleman",
        categories: "Psikologi"
    },
    "Filosofi Kopi": {
        description: "Kisah tentang dua sahabat yang memiliki kafe kopi dan petualangan mereka dalam mencari kopi terbaik.",
        image: "image/book9.jpg",
        author: "Dee Lestari",
        categories: "Novel"
    },
    "The Lean Startup": {
        description: "Buku ini menawarkan metode untuk membangun startup yang sukses dengan pendekatan yang efisien dan inovatif.",
        image: "image/book10.jpg",
        author: "Eric Ries",
        categories: "Bisnis"
    },
    "Rich Dad's Guide to Investing": {
        description: "Buku ini memberikan panduan investasi dari perspektif Ayah Kaya yang menekankan pentingnya pendidikan finansial.",
        image: "image/book11.jpg",
        author: "Robert T. Kiyosaki",
        categories: "Keuangan"
    },
    "The Power of Habit": {
        description: "Buku ini menjelaskan bagaimana kebiasaan terbentuk dan bagaimana mengubahnya untuk meningkatkan kualitas hidup.",
        image: "image/book12.jpg",
        author: "Charles Duhigg",
        categories: "Pengembangan Diri"
    },
    "Sang Pemimpi": {
        description: "Lanjutan dari Laskar Pelangi, menceritakan perjalanan hidup Ikal dan Arai dalam mengejar mimpi mereka.",
        image: "image/book13.jpg",
        author: "Andrea Hirata",
        categories: "Novel"
    },
    "The Subtle Art of Not Giving a F*ck": {
        description: "Buku ini mengajak pembaca untuk fokus pada hal-hal yang benar-benar penting dan melepaskan kekhawatiran yang tidak perlu.",
        image: "image/book14.jpg",
        author: "Mark Manson",
        categories: "Pengembangan Diri"
    },
    "The 7 Habits of Highly Effective People": {
        description: "Buku klasik yang mengajarkan tujuh kebiasaan untuk mencapai efektivitas pribadi dan profesional.",
        image: "image/book15.jpg",
        author: "Stephen R. Covey",
        categories: "Pengembangan Diri"
    },
    "Bumi Manusia": {
        description: "Novel pertama dalam Tetralogi Buru yang menceritakan kisah Minke, seorang pribumi yang berjuang melawan kolonialisme.",
        image: "image/book16.jpg",
        author: "Pramoedya Ananta Toer",
        categories: "Novel"
    },
    "The Alchemist": {
        description: "Kisah perjalanan Santiago, seorang gembala muda, dalam mencari harta karun dan makna hidup.",
        image: "image/book17.jpg",
        author: "Paulo Coelho",
        categories: "Novel"
    },
    "The Secret": {
        description: "Buku ini mengungkapkan rahasia hukum tarik-menarik dan bagaimana menerapkannya untuk mencapai kesuksesan.",
        image: "image/book18.jpg",
        author: "Rhonda Byrnes",
        categories: "Pengembangan Diri"
    },
    "Sapiens: A Brief History of Humankind": {
        description: "Buku ini memberikan gambaran menyeluruh tentang sejarah umat manusia dari masa prasejarah hingga modern.",
        image: "image/book19.jpg",
        author: "Yuval Noah Harari",
        categories: "Sejarah"
    },
    "The Four Agreements": {
        description: "Buku ini menawarkan empat prinsip sederhana untuk mencapai kebebasan pribadi dan kebahagiaan.",
        image: "image/book20.jpg",
        author: "Don Miguel Ruiz",
        categories: "Pengembangan Diri"
    },


    // Featured Books

    "Dr. Stone 11": {
        description: "Senku dan timnya menemukan peta harta karun bahan mentah melalui pencarian dengan balon udara. Mereka menghadapi tantangan baru dalam menciptakan roti yang enak dan tahan lama, serta pertemuan mengejutkan saat Senku berlayar dengan kapal kecil.",
        image: "image/book21.jpg",
        author: "Riichiro Inagaki",
        categories: "Manga"
    },
    "Naruto Bind Up Edition 13": {
        description: "Lanjutan petualangan Naruto dalam upayanya membawa pulang Sasuke yang telah meninggalkan desa, menghadapi konflik internal dan eksternal yang mendalam.",
        image: "image/book22.jpg",
        author: "Masashi Kishimoto",
        categories: "Manga"
    },
    "Dreams Stairway": {
        description: "Kumpulan puisi yang menggambarkan perjalanan emosional dalam meraih impian, penuh inspirasi dan refleksi diri.",
        image: "image/book23.jpg",
        author: "Rintik Sedu",
        categories: "Puisi"
    },
    "100 Things I Wish I Knew Earlier": {
        description: "Buku ini menawarkan pelajaran hidup yang divisualisasikan melalui origami, mengajarkan pembaca tentang tantangan dan keindahan dalam kehidupan.",
        image: "image/book24.jpg",
        author: "Maarten van der Weijden",
        categories: "Non-fiksi"
    },
    "Gashale": {
        description: "Kisah tentang tiga sahabat yang menjalani kehidupan penuh warna, menghadapi konflik internal dan eksternal dalam hubungan mereka.",
        image: "image/book25.jpg",
        author: "Asma Nadia",
        categories: "Novel"
    },
    "Doa Seorang Regina": {
        description: "Cerita inspiratif dari seorang wanita yang menghadapi tantangan fisik namun tetap memiliki semangat hidup yang tinggi. ",
        image: "image/book26.jpg",
        author: "Regina",
        categories: "Otobiografi"
    },
    "Haikyu!!: Fly High! Volleyball! 38": {
        description: "Pertandingan sengit di perempat final turnamen musim semi, menampilkan perkembangan karakter dan strategi tim yang mendebarkan.",
        image: "image/book27.jpg",
        author: "Haruichi Furudate",
        categories: "Manga"
    },
    "Yamihara": {
        description: "Kumpulan cerita yang mengungkap sisi gelap kehidupan manusia melalui berbagai peristiwa misterius dan menegangkan.",
        image: "image/book28.jpg",
        author: "Mizuki Tsujimura",
        categories: "Thriller"
    },
    "A Suspicious Secondhand Shop": {
        description: "Cerita tentang toko barang bekas yang menawarkan lebih dari sekadar barang, tetapi juga solusi untuk masalah pribadi pelanggan. ",
        image: "image/book29.jpg",
        author: "Mizuki Tsujimura",
        categories: "Misteri"
    },
    "Jingga dan Senja": {
        description: "Kisah cinta remaja yang penuh konflik dan emosi, menghadirkan dinamika hubungan yang kompleks dan mendalam. ",
        image: "image/book30.jpg",
        author: "Esti Kinasih",
        categories: "Romansa Remaja"
    }
    // Add more arrival books if needed
};

// Create modal elements
function createModal() {
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'book-modal-overlay';
    modalOverlay.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
        justify-content: center;
        align-items: center;
        padding: 20px;
    `;

    const modalContent = document.createElement('div');
    modalContent.id = 'book-modal-content';
    modalContent.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 10px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    `;

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 30px;
        cursor: pointer;
        color: #089da1;
    `;

    const modalImage = document.createElement('img');
    modalImage.id = 'book-modal-image';
    modalImage.style.cssText = `
        max-width: 250px;
        max-height: 350px;
        margin-bottom: 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;

    const modalTitle = document.createElement('h2');
    modalTitle.id = 'book-modal-title';
    modalTitle.style.cssText = `
        color: #333;
        margin-bottom: 10px;
    `;

    const modalAuthor = document.createElement('p');
    modalAuthor.id = 'book-modal-author';
    modalAuthor.style.cssText = `
        color: #666;
        margin-bottom: 10px;
    `;

    const modalCategories = document.createElement('p');
    modalCategories.id = 'book-modal-categories';
    modalCategories.style.cssText = `
        color: #089da1;
        margin-bottom: 15px;
        font-weight: bold;
    `;
    
    const modalDescription = document.createElement('p');
    modalDescription.id = 'book-modal-description';
    modalDescription.style.cssText = `
        color: #666;
        margin-bottom: 20px;
        text-align: left;
    `;

    const startReadingButton = document.createElement('button');
    startReadingButton.id = 'start-reading-btn';
    startReadingButton.textContent = 'Mulai Membaca';
    startReadingButton.style.cssText = `
        background-color: #089da1;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    `;

    closeButton.addEventListener('click', closeModal);
    startReadingButton.addEventListener('click', startReading);

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalImage);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalAuthor);
    modalContent.appendChild(modalCategories);
    modalContent.appendChild(modalDescription);
    modalContent.appendChild(startReadingButton);

    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
}

// Open modal with book description and image
function openBookDescription(bookTitle) {
    const modalOverlay = document.getElementById('book-modal-overlay');
    const modalTitle = document.getElementById('book-modal-title');
    const modalAuthor = document.getElementById('book-modal-author');
    const modalCategories = document.getElementById('book-modal-categories');
    const modalDescription = document.getElementById('book-modal-description');
    const modalImage = document.getElementById('book-modal-image');

    const bookInfo = bookData[bookTitle];

    if (bookInfo) {
        modalTitle.textContent = bookTitle;
        modalAuthor.textContent = `Penulis: ${bookInfo.author}`;
        modalCategories.textContent = `Kategori: ${bookInfo.categories}`;
        modalDescription.textContent = bookInfo.description;
        modalImage.src = bookInfo.image;
        modalImage.alt = bookTitle;
    } else {
        modalTitle.textContent = "Buku Tidak Ditemukan";
        modalAuthor.textContent = "";
        modalCategories.textContent = "";
        modalDescription.textContent = "Maaf, informasi buku tidak tersedia.";
        modalImage.src = "";
    }
    
    modalOverlay.style.display = 'flex';
}

// Close modal
function closeModal() {
    const modalOverlay = document.getElementById('book-modal-overlay');
    modalOverlay.style.display = 'none';
}

// Start reading pop-up
function startReading() {
    alert("Selamat membaca! Semoga Anda menikmati buku ini.");
    closeModal();
}

// Initialize book interaction
function initBookInteraction() {
    createModal();

    // Add event listeners to Featured Books
    const featuredReadButtons = document.querySelectorAll('.featured_book_box .f_btn');
    featuredReadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const bookTitle = e.target.closest('.featured_book_card')
                .querySelector('h2').textContent;
            openBookDescription(bookTitle);
        });
    });

    // Add event listeners to Arrival Books
    const arrivalReadButtons = document.querySelectorAll('.arrivals_btn');
    arrivalReadButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const bookTitle = e.target.closest('.arrivals_card')
            .querySelector('h2').textContent;
        openBookDescription(bookTitle);
    });
        
    });
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initBookInteraction);