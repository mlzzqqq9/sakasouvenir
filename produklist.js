document.addEventListener("DOMContentLoaded", function () {
  const produkListData = [];



  // === Tambahkan produk lain manual ===
  produkListData.push(
    {
      nama: "Sherra Set",
      gambar: "produk/img/b2.png",
      harga: "Rp175.000",
      deskripsi: "Tumbler Coka, Mug Keramik, Packaging Hardbox",
      kategori: "paket"
    },
    {
      nama: "Povee Set",
      gambar: "produk/img/p1.png",
      harga: "Rp150.000",
      deskripsi: "Vegan Leather Clutch, Packaging Hardbox Slide",
      kategori: "paket"
    }
  );

  // === Tambahkan produk tumbler otomatis ===
  for (let i = 1; i <= 21; i++) {
    produkListData.push({
      nama: `Tumbler ${i}`,
      gambar: `produk/img/t${i}.png`,
      harga: "Rp123",
      deskripsi: "Tumbler eksklusif, cocok untuk souvenir kantor",
      kategori: "tumbler"
    });
  }
  for (let i = 1; i <= 17; i++) {
    produkListData.push({
      nama: `Produk Kulit ${i}`,
      gambar: `produk/img/k${i}.png`,
      harga: "Rp123",
      deskripsi: "Produk Kulit eksklusif, cocok untuk souvenir kantor",
      kategori: "kulit"
    });
  }
  for (let i = 1; i <= 17; i++) {
    produkListData.push({
      nama: `Elektronik ${i}`,
      gambar: `produk/img/e${i}.png`,
      harga: "Rp123",
      deskripsi: "Elektronik eksklusif, cocok untuk souvenir kantor",
      kategori: "elektronik"
    });
  }
  for (let i = 1; i <= 5; i++) {
    produkListData.push({
      nama: `Seminat Kit ${i}`,
      gambar: `produk/img/s${i}.png`,
      harga: "Rp123",
      deskripsi: "Seminar Kit eksklusif, cocok untuk souvenir kantor",
      kategori: "seminar"
    });
  }
  for (let i = 1; i <= 5; i++) {
    produkListData.push({
      nama: `Best Seller ${i}`,
      gambar: `produk/img/b${i}.png`,
      harga: "Rp123",
      deskripsi: "Paket Best Seller, cocok untuk souvenir kantor",
      kategori: "bestseller"
    });
  }

  const produkList = document.getElementById('produkList');
  const template = document.getElementById('produkCardTemplate').firstElementChild;

  produkListData.forEach(p => {
    const clone = template.cloneNode(true);
    clone.style.display = "";
    clone.setAttribute("data-kategori", p.kategori);
    clone.querySelector(".produk-img").src = p.gambar;
    clone.querySelector(".produk-img").alt = p.nama;
    clone.querySelector(".produk-nama").textContent = p.nama;
    clone.querySelector(".produk-deskripsi").innerHTML = p.deskripsi.replaceAll(", ", "<br>");
    clone.querySelector(".produk-harga").textContent = p.harga;
    clone.onclick = () => openModal(p.nama, p.gambar, p.harga, p.deskripsi);
    produkList.appendChild(clone);
  });

  window.filterCategory = function (kat, event) {
    const all = document.querySelectorAll(".produk-card");
    all.forEach(card => {
      if (kat === "all" || card.getAttribute("data-kategori") === kat) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

    document.querySelectorAll('.kategori-btn').forEach(btn =>
      btn.classList.remove('bg-blue-600', 'text-white')
    );
    if (event) event.target.classList.add('bg-blue-600', 'text-white');
  };

  filterCategory("all");

  // === Modal handler ===
  window.openModal = function (nama, gambar, harga, deskripsi) {
    document.getElementById('modalTitle').textContent = nama;
    document.getElementById('modalImage').src = gambar;
    document.getElementById('modalDesc').innerHTML = deskripsi.replaceAll(", ", "<br>");
    document.getElementById('modalPrice').textContent = harga;

    const deskripsiFormat = deskripsi.replaceAll(", ", "%0A- ");
    const message = `Halo Admin! Saya tertarik dengan produk berikut:%0A%0A` +
      `*${nama}*%0A` +
      `Harga: *${harga}*%0A` +
      `Deskripsi:%0A- ${deskripsiFormat}%0A%0A` +
      `Gambar: ${window.location.origin}/${gambar}`;

    document.getElementById('waBtn').href = `https://wa.me/6283153086173?text=${message}`;
    document.getElementById('productModal').classList.remove("hidden");
  };

  window.closeModal = function () {
    document.getElementById('productModal').classList.add("hidden");
  };

  window.outsideModalClick = function (e) {
    if (e.target.id === "productModal") closeModal();
  };
});
