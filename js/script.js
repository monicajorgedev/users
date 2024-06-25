const userList = document.getElementById("listaUsuarios")

const edad = (max,min)=> Math.floor(Math.random()*(max - min + 1)) + min;


fetch("https://jsonplaceholder.typicode.com/users")
.then(response=> response.json())
.then(usuarios => {
    usuarios.forEach(usuario=> {
        const {name, username, phone, email, address, company} = usuario  
        const template = `
        <li>
        <div class="fichaUsuario">
            <div class="dates">
            <ul class="mainDates">
                <li><span>Nombre:</span> ${name}</li>
                <li><span>Edad:</span> ${edad(45,30)}</li>
                <li><span>Username:</span> ${username}</li>
                <li><span>Teléfono:</span> ${phone}</li>
                <li><span>Email:</span> ${email}</li>
            </ul>
            <ul class="secondaryDates">
                <li><span>Compañia:</span> ${company.name}</li>
                <li><span>Dirección:</span> ${address.street},${address.suite},${address.city}</li>
            </ul>
            </div>
        <img src="assets/img/${usuario.id}.jpeg"/></div>
        </li>` 
        userList.insertAdjacentHTML('beforeend',template)
})
}
).catch((error) => console.error("Error:", error))
    
/*
const userList = document.getElementById("listaUsuarios")

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const usersDetail = users.map(user => {
      const {street, suite, city} = user.address
      const {id, company} = user
      return {
        ...user,
        age: randomAge(18, 50),
        img: `../assets/img/${id}.jpeg`,
        address: `${street}, ${suite}, ${city}`,
        company: company.name
      }
    })
    usersDetail.forEach(user => {
      const {name, age, username, img, phone, email, company, address} = user 
      const template = 
      `
      <li>
        <div class="imganddata">
          <div class="data"> 
            <p><span>name:</span>${name}</p>
            <p><span>age:</span>${age}</p>
            <p><span>username:</span>${username}</p>
            <p><span>phone:</span>${phone}</p>
            <p><span>email:</span>${email}</p>
          </div>
          <img src=${img} alt=${name}/>
        </div>
        <div class="companyaddress">
          <p><span>company:</span>${company}</p>
          <p><span>address:</span>${address}</p>  
        </div>
      </li>
      `
      userList.innerHTML += template
    });
  })
   
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
*/ 