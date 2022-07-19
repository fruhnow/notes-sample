import { DocumentAddIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import NoteCard from "./notes/note-card";
import { v4 } from 'uuid';
import { Note } from "../types/Note";

export default function Home() {
    const notes = getAllNotes()
    const router = useNavigate()
    const handleNewNote = () => {
        router(`${v4()}`)
    }

    return (<div className="flex flex-col space-y-3 py-2">
        <button className="p-2 rounded-md text-white font-bold bg-orange-400 dark:bg-orange-600" onClick={() => handleNewNote()}><div className="flex flex-row justify-center space-x-2"><DocumentAddIcon width={20} /><p>Add</p></div></button>
        {notes && Object.values(notes).map((note) => {
            return <Link key={(note as Note).id} to={(note as Note).id}><NoteCard title={(note as Note).title} content={(note as Note).content} /></Link>
        })
        }
    </div>)
}



function getAllNotes() {
    var archive = {}, // Notice change here
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]) as string);
    }

    return archive;
}


