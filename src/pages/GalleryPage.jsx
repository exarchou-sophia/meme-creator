import { useState } from "react";

const loadMemesFromLocalStorage = () => Object.keys(localStorage)
    .map(key => localStorage.getItem(key))
    .map(data => JSON.parse(data))

export const GalleryPage = () => {
    const [memes, setMemes] = useState(loadMemesFromLocalStorage())

    return (
        <div className="bg-slate-900 text-white">
            <p className="text-xl mx-4 text-stone-200">
                Your Memes Collection
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-2">
                {memes.map(({ creationDate, dataUrl, name, key }) => (
                    <div key={key} style={{ display: "flex", flexDirection: "column" }}>
                        <p>{name}</p>
                        <p>creation date {new Date(creationDate).toLocaleDateString()}</p>
                        <img
                            src={dataUrl}
                            className="rounded-md"
                        />

                        <button
                            type='button'
                            className="bg-indigo-500 hover:bg-amber-600  transition-all text-white 
             text-sm rounded-lg m-4 px-5 py-2.5"
                            onClick={() => {
                                localStorage.removeItem(key)
                                setMemes(loadMemesFromLocalStorage())
                            }}
                        >
                            Discard
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}