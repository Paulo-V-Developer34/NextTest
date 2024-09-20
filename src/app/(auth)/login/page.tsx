import Form from "@/components/Form"

export default async function Login() {
    // const session = await getSession()//ainda devo criar esta função
    return (
        <div>
            <Form titulo="Login" inputs={[{input:"Nome",type:"text",name:"nome"},{input:"Senha",type:"text",name:"senha"}]}/>
            <h1>Status:</h1>
            <h2>Conta logada:</h2>
        </div>
    )
}