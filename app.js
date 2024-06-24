
let listadoUsuarios = []


let registrar = function () {


    if (document.querySelector("#login").classList.contains('show')) {

        // Este IF sirve para saber si hay elementos en el array. Es decir, si hay usuarios registrados o no.
        if (listadoUsuarios.length === 0) {
            
            document.querySelector('#mensaje').innerText = 'No hay usuarios registrados'
            setTimeout(function() {
                document.querySelector('#mensaje').innerText = ''    
            }, 5000);
        } else {
            console.log('aca vamos a recorrer el array')
            listadoUsuarios.forEach(miUsuario => {
                console.log('Mi usuario es: ' + miUsuario.nombre)
                let usuarioLog = document.querySelector('#user').value
                let claveLog = document.querySelector('#password').value
                let msgError = 'Usuario o clave incorrecta'
                let msgOk = 'Acceso exitoso'
                if (usuarioLog == miUsuario.nombre) {
                    console.log('usuario validado')
                    // Parte que se ejecuta si es verdadera la condicion
                    // document.querySelector('#mensaje').innerText = 'Usuario correcto'
                    if (claveLog == miUsuario.clave) {
                        console.log('clave validada')
                        window.location.replace('dashboard/dashboard.html')
                    } else {
                        console.log('clave incorrecta')
                        document.querySelector('#mensaje').innerText = msgError
                        setTimeout(function () {
                            document.querySelector('#mensaje').innerText = ""
                        }, 5000);
                    }

                } else {
                    console.log('usuario incorrecto')
                    // Parte que No se ejecuta si es falsa la condicion
                    document.querySelector('#mensaje').innerText = msgError
                    setTimeout(function () {
                        document.querySelector('#mensaje').innerText = ""
                    }, 5000);

                }
            });
        }

    } else {
        console.log('vamos a crear usuario')
        let usuarioInp = document.querySelector('#userSignUp').value
        let claveInp = document.querySelector('#passwordSignUp').value

        let nuevoUsuario = {
            nombre: usuarioInp,
            clave: claveInp
        }

        listadoUsuarios.push(nuevoUsuario)

        document.querySelector('#mensajeSignup').innerText = "Usuario creado"
        setTimeout(function () {
            document.querySelector('#mensajeSignup').innerText = ""
        }, 5000);
        console.log(listadoUsuarios)

    }

}


let toggleStatusLogin = function () {
    // agregamos clases hide a.Login y show Signup
    document.querySelector('#login').classList.add('hide')
    document.querySelector('#signup').classList.add('show')

    // Quitamos clases show y hide
    document.querySelector('#signup').classList.remove('hide')
    document.querySelector('#login').classList.remove('show')
}

let toggleStatusSignup = function () {
    // agregamos clases hide y show
    document.querySelector('#login').classList.add('show')
    document.querySelector('#signup').classList.add('hide')

    // removemo clases hide y show
    document.querySelector('#login').classList.remove('hide')
    document.querySelector('#signup').classList.remove('show')

}


