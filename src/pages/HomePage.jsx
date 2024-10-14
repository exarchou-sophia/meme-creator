import { useState, useEffect } from "react";
import { useMemes } from "../context/MemeContext";
import { getMemes } from "../api"
import { MemePreview } from "../components/MemePreview";

export const HomePage = () => {
    const {
        memes,
        setMemes,
        setPreviewMeme,
    } = useMemes();
    const [search, setSearch] = useState("");
    const [filteredMemes, setFilteredMemes] = useState([]);

    useEffect(() => {
        getMemes().then(setMemes)
    }, []);

    const filterMemes = search => memes.filter(({ name }) =>
        name.toLowerCase()
            .includes(search?.toLowerCase())
    )

    return (
        <div className='items-start flex'>
            <main className="flex w-2/3 px-4 py-4 ">

                <MemePreview />
            </main>

            <aside

                className="flex items-start w-1/3 flex-col px-4 py-4 ml-auto my-2h-auto "
            >
                <div className="flex bg-white  px-1 py-1 rounded-lg border border-indigo-500 
                overflow-hidden max-w-md mx-auto font-[sans-serif]">
                    <input
                        type='email'
                        placeholder='Search for a picture...'
                        className="w-full outline-none bg-white pl-4 text-sm"
                        onChange={({ target }) =>
                            setSearch(target.value)
                        }
                    />

                    <button
                        type='button'
                        className="bg-indigo-500 hover:bg-amber-600  transition-all text-white 
                        text-sm rounded-lg px-5 py-2.5"
                        onClick={() => setFilteredMemes(filterMemes(search))}
                    >
                        Search
                    </button>
                </div>

                <div>
                    {filteredMemes.map(meme => (
                        <div
                            key={meme.id}
                            onClick={() => setPreviewMeme(meme)}
                            className="text-stone-200 m-1 grid grid-cols-1 bg-slate-700 p-4 rounded-md shadow-lg
                             overflow-hidden transition-transform transform hover:scale-95 hover:shadow-md "
                        >
                            <img src={meme.url} className="w-auto rounded-sm m-3 px-3" />

                            <p>{meme.name}</p>

                        </div>
                    ))}
                </div>
            </aside>
        </div>
    )
}