import { useRef } from "react";
import { useMemes } from "../context/MemeContext";

export const MemePreview = () => {
    const ref = useRef()
    const {
        setPreviewMeme,
        previewMeme,
    } = useMemes();

    const savePreviewMemeToLocalStorage = () => {
        if (!ref.current) return;

        const content = ref.current.innerHTML;
        const base64 = btoa(content);
        localStorage.setItem(previewMeme.id, base64);
        setPreviewMeme()
    }

    const discardPreview = () => {
        setPreviewMeme(null)
    };

    return previewMeme && (
        <div>
            <div ref={ref} style={{ position: "relative" }}>
                <img src={previewMeme.url} className="w-2/3 rounded-sm m-3" />

                <input
                    id="top"
                    type="text"
                    rows="2"
                    className="m-4 text-indigo-800"
                    defaultValue="insert top text"
                    value={previewMeme.topText}
                    style={{ background: "none", display: "block", position: "absolute", top: 10, }}
                    onChange={({ target }) =>
                        setPreviewMeme({
                            ...previewMeme,
                            topText: target.value
                        })
                    }
                />

                <input
                    defaultValue="insert bottom text"
                    value={previewMeme.bottomText}
                    id="bottom"
                    type="text"
                    className="m-4 text-indigo-800"
                    style={{ background: "none", position: "absolute", bottom: 10, }}
                    onChange={({ target }) =>
                        setPreviewMeme({
                            ...previewMeme,
                            bottomText: target.value
                        })
                    }
                />
            </div>

            <button
                type='button'
                className="bg-indigo-500 hover:bg-amber-600 w-36 transition-all text-white 
             text-sm rounded-lg m-4 px-5 py-2.5"
                onClick={savePreviewMemeToLocalStorage}>
                Save Meme
            </button>

            <button
                type='button'
                className="bg-indigo-500 hover:bg-amber-600  transition-all text-white 
             text-sm rounded-lg m-4 px-5 py-2.5"
                onClick={discardPreview}>
                Discard Preview
            </button>
        </div>
    )
}
