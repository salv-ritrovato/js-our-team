console.log('it works');


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

// Prelevo il nodo del DOM del container che conterrà le nostre card
const cardContainer = document.getElementById("content");

// Creo una variabile con stringa vuota dove poter accumulare tutte le card che andrò a generare
let teamElements = "";

// For cycle per ciclare fra tutti gli elementi dell'array di oggetti
for (let i = 0; i < teamMembers.length; i++) {
    const keys = teamMembers[i];
    console.log(keys);
    // Decompongo un singolo componente dell'array di oggetti
    const {name, role, email, img} = keys;
    console.log(name, role, email, img);
    // Genero markup/html dinamico per ogni card di cui ho bisogno
    const dynamicHTML = `
                        <div class="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                          <div class="card" style="width: 18rem;">
                          <img src="${img}" class="card-img-top" alt="${name}">
                            <div class="card-body text-center">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${role}</p>
                            <p class="mail">${email}</p>
                            </div>
                          </div>
                        </div>
                        `;
    teamElements += dynamicHTML;
}

// Inserisco tutte le card generate nel DOM in un'unica operazione
cardContainer.innerHTML = teamElements;

