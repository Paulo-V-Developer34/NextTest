import { postar } from "@/app/actions/blog";

export default function ChatInput(){
    return (
        <div id="chatinput">
            <form action={postar}>
                <input
                type="text"
                name="title"
                placeholder="Insera um título"
                className="px-2 y-1 bg-white rounded"/>
                <textarea
                rows={5}
                name="content"
                placeholder="Insera um título"
                className="px-2 y-1 bg-white rounded"/>
                <button type="submit" className="bg-orange-900 m-2 rounded">Enviar</button>
            </form>
        </div>
    )
}