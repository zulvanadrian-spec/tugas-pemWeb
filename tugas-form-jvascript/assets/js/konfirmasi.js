const data = JSON.parse(localStorage.getItem("reservasi"));

if (data === null) {
    // halaman dibuka tanpa ngisi form, balik ke form
    window.location.href = "reservasi.html";
} else {
    document.getElementById("kNama").textContent = data.nama;
    document.getElementById("kKode").textContent = data.kode;
    document.getElementById("kTanggal").textContent = data.tanggal;
    document.getElementById("kJam").textContent = data.jam;
    document.getElementById("kJumlah").textContent = data.jumlah;
    document.getElementById("kArea").textContent = data.area;
}

document.getElementById("btnBaru").addEventListener("click", function () {
    localStorage.removeItem("reservasi");
    window.location.href = "reservasi.html";
});

document.getElementById("btnLobby").addEventListener("click", function () {
    localStorage.removeItem("reservasi");
    window.location.href = "../lobby.html";
});