import FormLogin from "@/components/Form-login"
import { login } from "@/lib/session"

export default async function Login() {
    // const session = await getSession()//ainda devo criar esta função
    const enviarform = async (formdados:any)=>{
        await login(formdados)
    }
    return (
        <div>
            <FormLogin/>
            <h1>Status:</h1>
            <h2>Conta logada:</h2>
        </div>
    )
}