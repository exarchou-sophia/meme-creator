import { useState } from "react";

const loadMemesFromLocalStorage = () => Object.keys(localStorage)
    .map(key => localStorage.getItem(key))
    .map(data => JSON.parse(data))

export const GalleryPage = () => {
    const [memes, setMemes] = useState(loadMemesFromLocalStorage())

    return (
        <div className="bg-slate-900 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-2">
                {memes
                    .sort((a, b) => b.key - a.key)
                    .map(({ creationDate, dataUrl, name, key }) => (
                        <div key={key} className="m-1" style={{ display: "flex", flexDirection: "column" }}>
                            <p>
                                {name}
                                <span style={{ fontWeight: "200" }}>
                                    {new Date(creationDate).toLocaleDateString()}
                                </span>
                            </p>

                            <button
                                type='button'
                                className="bg-indigo-500 hover:bg-amber-600 transition-all text-white text-sm rounded-lg py-1"
                                onClick={() => {
                                    localStorage.removeItem(key)
                                    setMemes(loadMemesFromLocalStorage())
                                }}
                            >
                                Discard
                            </button>

                            <img
                                src={dataUrl}
                                className="rounded-md"
                            />

                        </div>
                    ))}
            </div>
        </div>
    )
}