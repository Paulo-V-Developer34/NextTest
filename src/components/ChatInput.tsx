import { postar } from "@/actions/blog"

export default function ChatInput(){
    return (
        <div id="chatinput" >
            <form action={postar} className="flex flex-col gap-3 m-3 max-w-3xl">
                <input
                type="text"
                name="title"
                placeholder="Insera um título"
                className="px-2 y-1 bg-slate-500 rounded"/>
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