// === Toggle Mobile Menu ===
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// === Dropdown (Multi Dropdown Support - Klik Toggle) ===
document.querySelectorAll('.dropdown-toggle').forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Tutup dropdown lain
    document.querySelectorAll('.dropdown-menu').forEach((menu, i) => {
      if (i !== index) menu.classList.add('hidden');
    });

    // Toggle dropdown saat ini
    document.querySelectorAll('.dropdown-menu')[index].classList.toggle('hidden');
  });
});

// Tutup semua dropdown jika klik di luar
window.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.classList.add('hidden');
  });
});

// === Highlight link navbar aktif ===
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  if (window.location.href.includes(link.getAttribute('href'))) {
    link.classList.add('text-blue-600', 'font-semibold');
  }
});

// === Swiper: Produk ===
const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

// === Swiper: Hero Section ===
const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});


 const toggleBtn = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });



const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;

  function animateCounters() {
    if (hasAnimated) return;

    counters.forEach((el) => {
      const target = +el.getAttribute('data-target');
      let count = 0;

      const increment = target / 100;
      const updateCount = () => {
        count += increment;
        if (count < target) {
          el.innerText = Math.floor(count) + '+';
          requestAnimationFrame(updateCount);
        } else {
          el.innerText = target.toLocaleString() + '+';
        }
      };

      updateCount();
    });

    hasAnimated = true;
  }

  // Jalankan animasi saat konten masuk viewport
  window.addEventListener('scroll', () => {
    const section = document.querySelector('.counter')?.getBoundingClientRect();
    if (section && section.top < window.innerHeight) {
      animateCounters();
    }
  });

  // Trigger when section is visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) animateCounters();
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));


    const produkFade = new Swiper(".produkFade", {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom"
    },
    on: {
      slideChange: function () {
        const total = this.slides.length - this.loopedSlides * 2;
        const index = this.realIndex;
        const currentData = produkTexts[index];

        // Ganti teks & tombol
        document.getElementById("produk-title").innerHTML = currentData.title;
        document.getElementById("produk-link").setAttribute("href", currentData.link);

        // Ganti counter
        document.getElementById("produk-counter").innerText = `${index + 1}/${total}`;
      }
    }
  });


   const produkTexts = [
    {
      title: "Vendor Souvenir Kantor<br class='hidden md:block'>100 Ribuan",
      link: "produk.html#mug"
    },
    {
      title: "Tumbler Custom Stylish<br class='hidden md:block'>Untuk Kantor Modern",
      link: "produk.html#tumbler"
    },
    {
      title: "Gift Set Eksklusif<br class='hidden md:block'>Cocok Untuk Klien VIP",
      link: "produk.html#giftset"
    }
  ]; 



  function openModal(title, imgSrc, price, desc) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalImage').src = imgSrc;
  document.getElementById('modalPrice').textContent = price;
  document.getElementById('modalDesc').textContent = desc;
  const message = encodeURIComponent(`Halo Admin! Saya tertarik dengan paket "${title}" seharga ${price}`);
  document.getElementById('waBtn').href = `https://wa.me/6281234567890?text=${message}`;
  document.getElementById('productModal').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('productModal').classList.add('hidden');
}
function outsideModalClick(event) {
  if (event.target.id === 'productModal') closeModal();
}
function filterCategory(kategori) {
  const items = document.querySelectorAll('#produkList > div');
  items.forEach(item => {
    const harga = parseInt(item.getAttribute('data-harga')) || 0;
    let cocok = false;

    if (kategori === 'all') cocok = true;
    else if (kategori === '100' && harga <= 100000) cocok = true;
    else if (kategori === '200' && harga > 100000 && harga <= 300000) cocok = true;
    else if (kategori === '400' && harga > 300000 && harga <= 500000) cocok = true;
    else if (kategori === 'minimalis' && harga <= 80000) cocok = true;
    else if (kategori === 'lain' && harga > 500000) cocok = true;

    item.classList.toggle('hidden', !cocok);
  });

  // Update tampilan tombol kategori aktif
  document.querySelectorAll('.kategori-btn').forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
  event.target.classList.add('bg-blue-600', 'text-white');
}

//porto
const produkData = {
  1: {
    title: "Polri Set",
    deskripsi: [
      "Tumbler Barra",
      "Notebook Fancy Ribbon",
      "Keychain",
      "Powerbank",
      "Earphone Bluetooth",
      "Mouse Wireless",
      "Ballpoint",
      "Packaging Hardbox"
    ],
    gambar: [
      "produk/img/1.png",
      "produk/img/2.png",
      "produk/img/3.png",
      "produk/img/4.png",
      "produk/img/5.png",
      "produk/img/6.png"
    ]
  },
  2: {
    title: "Mantab",
    deskripsi: ["Jam dinding", "Pouch", "Mug stainles", "packaging paperbag"],
    gambar: [
      "produk/img/m1.png",
      "produk/img/m2.png",
      "produk/img/m3.png",
      "produk/img/m4.png"
    ]
  },
  3: {
    title: "OJK",
    deskripsi: ["Notebook", "Earphone"],
    gambar: [
      "produk/img/ojk1.png",
      "produk/img/ojk2.png",
      "produk/img/ojk3.png",
      "produk/img/ojk4.png"
    ]
  },
  4: {
    title: "BPJS",
    deskripsi: ["Tumbler Coka", "Tumblr Pullu", "RFID Bocker", "Humidifuser","Packaging Hardbox"],
    gambar: [
      "produk/img/bp1.png",
      "produk/img/bp2.png",
      "produk/img/bp3.png",
      "produk/img/bp4.png",
      "produk/img/bp5.png"
    ]
  },
  5: {
    title: "Universitas Brawijaya",
    deskripsi: ["earphone", "ballpoint stainles", "leather keychain", "freee greeting card","packaging hardbox"],
    gambar: [
      "produk/img/ub1.png",
      "produk/img/ub2.png",
      "produk/img/ub3.png",
      "produk/img/ub4.png",
      "produk/img/ub5.png"
    ]
  },
  // Tambah produk ke-4, ke-5 dst...
};

//testi
const popup = document.getElementById("popup1");
const popupContent = document.getElementById("popupContent");
const deskripsiContainer = popupContent.querySelector("ul");
const judul = popupContent.querySelector("h3");
const swiperWrapper = popupContent.querySelector(".swiper-wrapper");

const popupSwiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: { el: ".swiper-pagination" }
});

document.querySelectorAll(".open-popup").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const produkId = this.closest(".produk-card").dataset.id;
    const data = produkData[produkId];

    // Inject ke popup
    judul.textContent = data.title;
    deskripsiContainer.innerHTML = data.deskripsi.map(item => `<li>${item}</li>`).join("");
    swiperWrapper.innerHTML = data.gambar.map(src => `<div class="swiper-slide"><img src="${src}" class="w-full rounded" /></div>`).join("");

    popupSwiper.update(); // Re-inisialisasi Swiper
    popup.classList.remove("hidden");
    popup.classList.add("flex");
  });
});

// Klik di luar popupContent = tutup
popup.addEventListener("click", function (e) {
  if (!popupContent.contains(e.target)) closePopup();
});

function closePopup() {
  popup.classList.add("hidden");
  popup.classList.remove("flex");
}

  const testimoniData = [
    "assets/img/whjb.webp",
    "assets/img/man.avif",
    "assets/img/w.webp",
    "assets/img/whjb.webp",
    "assets/img/man.avif",
    "assets/img/w.webp",
    "assets/img/whjb.webp",
    "assets/img/man.avif",
    "assets/img/w.webp",
    
  ];

  const testiContainer = document.getElementById("testiContainer");

  testimoniData.forEach((src, index) => {
    testiContainer.innerHTML += `
      <div class="swiper-slide flex justify-center">
        <div class="relative w-[250px] h-[500px] bg-black rounded-[2rem] shadow-xl border-4 border-gray-300 p-2 cursor-pointer group" onclick="showPopup('${src}')">
          <div class="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-2 bg-gray-400 rounded-full"></div>
          <div class="w-full h-full rounded-[1.5rem] overflow-hidden bg-white group-hover:opacity-80 transition">
            <img src="${src}" alt="Testimoni Chat ${index}" class="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    `;
  });

  new Swiper(".testiSwiper", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  // MODAL FUNCTION
  const popupModal = document.getElementById("popupModal");
  const popupImage = document.getElementById("popupImage");
  const popupClose = document.getElementById("popupClose");

  function showPopup(src) {
    popupImage.src = src;
    popupModal.classList.remove("hidden");
    popupModal.classList.add("flex");
  }

  popupClose.addEventListener("click", () => {
    popupModal.classList.add("hidden");
    popupModal.classList.remove("flex");
  });

  popupModal.addEventListener("click", (e) => {
    if (e.target === popupModal) {
      popupModal.classList.add("hidden");
      popupModal.classList.remove("flex");
    }
  });


