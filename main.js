window.addEventListener("load", init);

function init() {
  const KEPEK = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg",
  ];

  const KEPEKHELYE = document.getElementsByTagName("article");
  let kep = kepetBeszur(KEPEK);

  kiir(kep, KEPEKHELYE[0]);

  const KEPSZEGELY = document.querySelectorAll("img");

  for (let index = 0; index < KEPEK.length; index++) {
    KEPSZEGELY[index].addEventListener("mouseover", kepSzegelye);
  }
}

function kepetBeszur(KEPEK) {
  let kephelye = "";
  for (let index = 0; index < KEPEK.length; index++) {
    kephelye += `<div> <img src="${KEPEK[index]}" alt="${[
      "kep" + (index + 1),
    ]}"> </div>`;
  }
  kephelye += "";
  return kephelye;
}

function kiir(mit, hova) {
  hova.innerHTML += mit;
}

function kepSzegelye(event) {
  const ELEM = event.target.parentNode;
  ELEM.classList.add("szegely");
  console.log(event.target.parentNode);
}
