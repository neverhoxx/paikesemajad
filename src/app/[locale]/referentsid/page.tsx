import Link from "next/link";

export default function Name() {
    return (
        <div className='min-h-screen text-center flex justify-center gap-5 items-center flex-wrap select-none'>
            <h2 className="font-semibold text-2xl">See leht on arendamisel</h2>
            <Link className="px-5 py-2 bg-black text-white" href="/">Tagasi kodulehele</Link>
        </div>
    );
}