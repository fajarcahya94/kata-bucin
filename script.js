// Tambah Kata-Kata dibawah ini

let dataDummy = [
  {
    id: 0,
    pesan: "Sayang aku mau video call sama kamu, boleh ngga?",
    img: "./assets/imgs/mocha-sebusun.gif",
  },
  {
    id: 1,
    pesan: "Aku kangen banget sama kamu sayang, kamu kangen aku juga ngga?",
    img: "./assets/imgs/hasher-sticker.gif",
  },
  {
    id: 2,
    pesan: "Sayang aku ngga bisa bobo kalau ngga ditemenin kamu",
    img: "./assets/imgs/erm-fingers.gif",
  },
  {
    id: 3,
    pesan: "Ikan hiu makan tomat, i love you so much &hearts;",
    img: "./assets/imgs/guby-cute.gif",
  },
];

function randomData(pesan) {
  let listKeys = Object.keys(dataDummy);
  let randomIndex = Math.floor(Math.random() * listKeys.length);
  let randomObject = dataDummy[listKeys[randomIndex]];
  return randomObject;
}

// Script Dimulai

const btnPertama = document.getElementById("btn-1");
const vid = document.getElementById("vid");
const cardPertama = document.getElementsByClassName("card-1")[0];

btnPertama.addEventListener("click", function (e) {
  e.preventDefault();
  vid.classList.add("active");
  cardPertama.classList.add("none");
  setTimeout(function () {
    cardPertama.remove();
    createElementCard();
  }, 4000);
});

function createElementCard() {
  const content = document.getElementById("content");

  const div = document.createElement("div");
  div.classList.add("card-2");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Masukin Nama Kamu";
  h1.classList.add("fn-large");
  const inputNama = document.createElement("input");
  inputNama.setAttribute("id", "nama");
  inputNama.setAttribute("type", "text");
  inputNama.classList.add("input");
  inputNama.placeholder = "disini yaa..";

  const btnKedua = document.createElement("button");
  btnKedua.classList.add("btn-2");
  btnKedua.innerHTML = "Kirim Nama";

  btnKedua.addEventListener("click", function () {
    const getInputNama = document.getElementById("nama").value;
    if (getInputNama.length == 0 || getInputNama.length >= 10) {
      createElementCardPertama();
    } else {
      createElementCardKedua();
    }
  });

  function createElementCardPertama() {
    const notif = document.createElement("div");
    const cardKedua = document.createElement("div");
    notif.classList.add("notif");
    cardKedua.classList.add("notif-card");

    const notifTitle = document.createElement("h2");
    notifTitle.classList.add("fn-large-vr1");
    notifTitle.innerHTML = "GAWAT!!";

    const notifDes = document.createElement("p");
    notifDes.innerHTML = "Nama ngga boleh kosong yaa, dan ngga boleh lebih dari 10 kata yaa..";

    const stikerSatu = document.createElement("img");
    stikerSatu.setAttribute("src", "./assets/imgs/erm-fingers.gif");

    div.appendChild(notif);
    notif.appendChild(cardKedua);
    cardKedua.appendChild(notifTitle);
    cardKedua.appendChild(notifDes);
    cardKedua.appendChild(stikerSatu);

    const removeClassNotif = document.getElementsByClassName("notif")[0];

    removeClassNotif.addEventListener("click", function () {
      removeClassNotif.remove();
    });

    setTimeout(function () {
      removeClassNotif.remove();
    }, 6000);
  }

  function createElementCardKedua() {
    const getInputNama = document.getElementById("nama").value;
    const cardKetiga = document.createElement("div");
    cardKetiga.classList.add("card-3");
    const stikerDua = document.createElement("img");
    stikerDua.setAttribute("src", "./assets/imgs/bubu-love.gif");
    const tampilNama = document.createElement("p");
    tampilNama.innerHTML = "Hallo " + getInputNama + " &#10084";

    divButton = document.createElement("div");
    divButton.classList.add("div-button");
    btnPilihSatu = document.createElement("button");
    btnPilihSatu.classList.add("btn-pilih");
    btnPilihSatu.innerHTML = "Lihat Pesan";
    btnPilihDua = document.createElement("button");
    btnPilihDua.classList.add("btn-pilih");
    btnPilihDua.innerHTML = "Ngga Mau";

    div.remove();
    vid.remove();

    btnPilihSatu.addEventListener("click", function () {
      const data = randomData(dataDummy);
      const notif = document.createElement("div");
      const cardKedua = document.createElement("div");
      notif.classList.add("notif-kedua");
      cardKedua.classList.add("notif-card");

      const notifTitle = document.createElement("h2");
      notifTitle.classList.add("fn-large-vr2");
      notifTitle.innerHTML = "PESAN!!";

      const tampilPesan = document.createElement("p");
      tampilPesan.classList.add("color-white");
      tampilPesan.innerHTML = data.pesan;

      const stikerDua = document.createElement("img");
      stikerDua.setAttribute("src", data.img);

      cardKetiga.appendChild(notif);
      notif.appendChild(cardKedua);
      cardKedua.appendChild(notifTitle);
      cardKedua.appendChild(tampilPesan);
      cardKedua.appendChild(stikerDua);

      notif.addEventListener("click", function () {
        notif.remove();
      });
    });

    btnPilihDua.addEventListener("click", function () {
      const notif = document.createElement("div");
      const cardKedua = document.createElement("div");
      notif.classList.add("notif-kedua");
      cardKedua.classList.add("notif-card");

      const notifTitle = document.createElement("h2");
      notifTitle.classList.add("fn-large-vr2");
      notifTitle.innerHTML = "KAMU JAHAT!!";

      const tampilPesan = document.createElement("p");
      tampilPesan.classList.add("color-white");
      tampilPesan.innerHTML = "Masa kamau ngga mau liat pesan aku";

      const stikerDua = document.createElement("img");
      stikerDua.setAttribute("src", "./assets/imgs/quby-sticker.gif");

      cardKetiga.appendChild(notif);
      notif.appendChild(cardKedua);
      cardKedua.appendChild(notifTitle);
      cardKedua.appendChild(tampilPesan);
      cardKedua.appendChild(stikerDua);

      notif.addEventListener("click", function () {
        notif.remove();
      });
    });

    content.appendChild(cardKetiga);
    cardKetiga.appendChild(stikerDua);
    cardKetiga.appendChild(tampilNama);
    cardKetiga.appendChild(divButton);
    divButton.appendChild(btnPilihSatu);
    divButton.appendChild(btnPilihDua);
  }

  content.appendChild(div);
  div.appendChild(h1);
  div.appendChild(inputNama);
  div.appendChild(btnKedua);
}
