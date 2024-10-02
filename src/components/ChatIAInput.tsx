import { postaria } from "@/actions/ia"

export default function ChatInput(){
    function handlesubmit(evt) {//já irei resolver este problema :/
        const {} = evt
    }
    return (
        <div id="chatinput" >
            <form action={handlesubmit(evt)} className="flex flex-col gap-3 m-3 max-w-3xl">{/*tenho que ver como posso fazer para acionar duas funções dentro do action */}
                <textarea
                rows={5}
                name="content"
                placeholder="Insera um título"
                className="px-2 y-1 bg-slate-500 rounded"/>
                <button type="submit" className="bg-orange-900 m-2 rounded w-14 p-1 text-white">Enviar</button>
            </form>
        </div>
    )
}