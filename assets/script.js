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
const cardContainer = document.getElementById("container");

// Creo una variabile con stringa vuota dove poter accumulare tutte le card che andrò a generare
let teamElements = "";

// ciclo for
for (let i = 0; i < teamMembers.length; i++) {
    const keys = teamMembers[i];
    console.log(keys); // da rimuovere
    const {name, role, email, img} = keys;
    console.log(name, role, email, img);
    // html dinamico
    const dynamicHTML = `<img src="${img}" class="card-img-top" alt="...">
                        <h5 class="member-name">${name}</h5>
                        <p class="role">${role}</p>
                        <p class="mail">${email}</p>
                        `;
    teamElements += dynamicHTML;
}

cardContainer.innerHTML = teamElements;

