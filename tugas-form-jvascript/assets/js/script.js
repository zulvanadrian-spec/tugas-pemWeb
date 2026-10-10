function setError(id, pesan) {
    document.getElementById(id).closest(".field").querySelector(".error")
}

function validateForm(){
    let valid = true;

    // validasi nama
    const nama = document.getElementById("nama").value.trim();
    if (nama.length < 3) {
        setError("nama", "Nama miniman 3 huruf.");
        valid = false;

    } else {
        setError("nama", "");
    }

    // validasi nomor WhatsApp
    const hp = document.getElementById("hp").value.trim();
    if (isNaN(hp) || hp.length < 10 || hp.length > 13) {
        setError("hp", "nomor harus angka 10-13 digit.");
        valid = false;

    } else {
        setError("hp", "");
    }

    // validasi email
    const email = document.getElementById("email").value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        setError("email", "Email tidak valid.");
        valid = false;

    } else {
        setError("email", "");
    }

    // jika ada kesalahan pengisian form, tidak di proses
    if (!valid) {
        return false;
    }

    alert("Reservasi berhasil!");
    return false; // tetap false biar halaman tidak reload (nggak ada server)
}