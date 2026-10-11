function setError(id, pesan) {
    document.getElementById(id).closest(".field").querySelector(".error").textContent = pesan;
}

// function validasi setiap form
function validateForm() {
    let valid = true;

    // validasi form nama
    const nama = document.getElementById("nama").value.trim();
    if (nama.length < 3) {
        setError("nama", "Nama minimal 3 huruf.");
        valid = false;
    } else {
        setError("nama", "");
    }

    // validasi form nomor WhatsApp
    const hp = document.getElementById("hp").value.trim();
    if (isNaN(hp) || hp.length < 10 || hp.length > 13) {
        setError("hp", "Nomor harus angka 10-13 digit.");
        valid = false;
    } else {
        setError("hp", "");
    }

    // validasi form email
    const email = document.getElementById("email").value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        setError("email", "Email tidak valid.");
        valid = false;
    } else {
        setError("email", "");
    }

    // jika ada kesalahan pengisian form, tidak diproses
    if (!valid) {
        return false;
    }

    transisiKonfirmasi();   // semua benar, pindah ke halaman konfirmasi
    return false;           // false biar halaman tidak reload
}

// function transisi ke halaman konfirmasi
function transisiKonfirmasi() {
    const area = document.querySelector('input[name="area"]:checked');

    const data = {
        nama: document.getElementById("nama").value.trim(),
        tanggal: document.getElementById("tanggal").value || "-",
        jam: document.getElementById("jam").value || "-",
        jumlah: document.getElementById("jumlah").value || "-",
        area: area ? area.value : "-",
        kode: "DN-" + Math.random().toString(36).substring(2, 8).toUpperCase()
    };

    localStorage.setItem("reservasi", JSON.stringify(data));
    window.location.href = "konfirmasi.html";
}