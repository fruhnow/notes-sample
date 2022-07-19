import { SaveIcon, TrashIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Note() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { id } = useParams();
    const router = useNavigate();

    const textFromStorage = localStorage.getItem(id as string)
    const note = JSON.parse(textFromStorage as string);
    useEffect(() => {
        setTitle(note?.title ?? "")
        setContent(note?.content ?? "")
    }, [])

    const handleSave = () => {
        localStorage.setItem(id as string, JSON.stringify({ id, title, content}));
        router("/")
    }

    const handleDelete = () => {
        localStorage.removeItem(id as string);
        router("/")
    }

    return (<div className="w-[80vw] h-[80vh] flex flex-col space-y-6 rounded-lg p-4 bg-slate-300 dark:bg-slate-600">
        <input className="w-full rounded-md p-2 text-lg font-semibold" placeholder="Title" value={title} onChange={(e) => setTitle(e.currentTarget.value)}></input>
        <textarea className="flex-1 resize-none rounded-md p-2" value={content} onChange={(e) => setContent(e.currentTarget.value)}></textarea>
        <div className="flex flex-col space-y-2">
            <button className="p-2 rounded-md text-white font-bold bg-green-400 dark:bg-green-600" onClick={() => handleSave()}><div className="flex flex-row justify-center space-x-2"><SaveIcon width={20} /><p>Save</p></div></button>
            <button className="p-2 rounded-md text-white font-bold bg-red-400 dark:bg-red-600" onClick={() => handleDelete()}><div className="flex flex-row justify-center space-x-2"><TrashIcon width={20} /><p>Delete</p></div></button>
        </div>
    </div>)
}