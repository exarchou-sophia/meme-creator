import { useState, useEffect } from "react";
import { useMemes } from "../context/MemeContext";
import { getMemes } from "../api"
import { MemePreview } from "../components/MemePreview";
import { PostItNote } from "../components/PostItNote";

export const HomePage = () => {
    const {
        memes,
        setMemes,
        dispatch,
    } = useMemes();
    const [filteredMemes, setFilteredMemes] = useState([]);

    useEffect(() => {
        getMemes().then(setMemes)
    }, []);

    const filterMemes = search => memes.filter(({ name }) =>
        name.toLowerCase()
            .includes(search?.toLowerCase())
    )

    return (
        <div className='w-full justify-between md:flex-row  min-h-screen flex'>
            <div className="flex w-full md:w-1/3 p-2 min-w-[250px]">
                <PostItNote />
            </div>

            <main className="flex flex-col justify-between w-full md:w-1/3 p-6 text-stone-200">
                <MemePreview />
            </main>

            <div className="flex flex-col w-full md:w-1/3 px-2 py-4  gap-4">
                <div className="flex bg-white px-1 py-1 rounded-lg border border-indigo-500 overflow-hidden font-[sans-serif]">
                    <input
                        placeholder='Search for a picture...'
                        className="w-full outline-none bg-white py-1 px-4 text-md"
                        onChange={({ target }) => setFilteredMemes(
                            target.value === ""
                                ? []
                                : filterMemes(target.value)
                        )}
                    />
                </div>

                <div className="flex flex-col w-full overflow-auto ">
                    {filteredMemes.map(meme => (
                        <div
                            key={meme.id}
                            className="bg-slate-700 p-4 flex flex-col  rounded-md shadow-lg text-stone-200 m-1 transition-transform transform hover:scale-95 hover:shadow-md"
                            onClick={() => dispatch({ type: "save", payload: meme })}

                        >
                            <p>{meme.name}</p>

                            <img
                                className="w-auto rounded-sm m-1"
                                src={meme.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}