"use server"

interface login {
    nome:string,
    senha:string
}

//

export async function login(formData:FormData) {
    console.log("login acionado")
    const dados:login = {
        nome: formData.get('nome') as string,
        senha: formData.get('senha') as string
    }
    // const user = {}
    console.log(dados)
}