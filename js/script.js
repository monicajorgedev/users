const userList = document.getElementById("listaUsuarios")

const edad = (max,min)=> Math.floor(Math.random()*(max - min)) + min;


fetch("https://jsonplaceholder.typicode.com/users")
.then(response=> response.json())
.then(usuarios => {
    usuarios.forEach(usuario=> {
        const {name, username, phone, email, address, company} = usuario  
        const template = `<li><div class="fichaUsuario"><div class="dates">
        <ul class="mainDates"><li><span>Nombre:</span> ${name}</li><li><span>Edad:</span> ${edad(45,30)}
        </li><li><span>Username:</span> ${username}</li><li><span>Teléfono:</span> ${phone}</li><li><span>Email:</span> ${email}</li></ul>
        <ul class="secondaryDates"><li><span>Compañia:</span> ${company.name} </li><li><span>Dirección:</span> ${address.street},${address.suite},${address.city}</li></ul></div>
        <img src="assets/img/${usuario.id}.jpeg"/></div>
    </li>` 
        userList.insertAdjacentHTML('beforeend',template)
})
}
).catch((error) => console.error("Error:", error))
    
 