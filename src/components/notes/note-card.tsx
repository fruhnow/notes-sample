import { ChevronRightIcon } from "@heroicons/react/outline/"
interface NoteProps {
    title: string,
    content: string
}
export default function NodeCard({ title, content }: NoteProps) {
    return (<div className="flex flex-row bg-slate-300 dark:bg-slate-700 px-4 py-2 w-[80vw] rounded-lg cursor-pointer">
        <div className="flex flex-col flex-1 pb-1 overflow-auto">
            <h2 className="font-bold">{title}</h2>
            <p className="leading-4 truncate">{content}</p>
        </div>
        <ChevronRightIcon width={20} />
    </div>)
}