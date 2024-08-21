fetch ('info.json')
.then(respuesta => respuesta.json())
.then(datos => {
    const Container = document.getElementById("Container")
    Container.innerHTML = `<p>${datos[0]["Clave"]}</p>`

    console.log(datos)
})
.catch(error => console.log(error))

