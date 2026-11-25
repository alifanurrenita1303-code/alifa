function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xFXAnIVx6z":
        Script1();
        break;
      case "6mWl7DWQd2m":
        Script2();
        break;
  }
}

function Script1()
{
  var videos = document.querySelectorAll("video");



videos.forEach(function(video) {
    
       video.loop = true;
    
       video.play();


});
}

function Script2()
{
  
var player = GetPlayer();



// Ambil jawaban siswa

var harga = player.GetVar("HargaCilok");

var parkir = player.GetVar("BiayaParkir");

var total = player.GetVar("TotalBayar");



// Hilangkan titik, koma, dan spasi

function normalisasi(nilai) {

    return String(nilai).replace(/[^\d]/g, "");

}



// Periksa jawaban
var hargaBenar = normalisasi(harga) === "5000";

var parkirBenar = normalisasi(parkir) === "2000";

var totalBenar = normalisasi(total) === "27000";



// Simpan hasil pemeriksaan

player.SetVar("HargaBenar", hargaBenar);

player.SetVar("ParkirBenar", parkirBenar);

player.SetVar("TotalBenar", totalBenar);



// Susun petunjuk untuk jawaban yang salah

var petunjuk = [];



if (!hargaBenar) {

    petunjuk.push(

        "Perhatikan kembali informasi harga satu porsi cilok."

    );

}



if (!parkirBenar) {

    petunjuk.push(

        "Perhatikan kembali informasi harga parkir."

    );

}



if (!totalBenar) {

    petunjuk.push(

        "Perhatikan kembali informasi total uang yang Dika keluarkan."

    );

}



// Masukkan petunjuk ke variabel Storyline

player.SetVar("PetunjukTampil", petunjuk.join("\n\n"));

var semuaBenar = hargaBenar && parkirBenar && totalBenar;



player.SetVar("SemuaBenar", semuaBenar);
}

