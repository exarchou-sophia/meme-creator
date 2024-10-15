import { useRef } from "react";
import { useMemes } from "../context/MemeContext";
import domtoimage from 'dom-to-image';

export const MemePreview = () => {
    const ref = useRef()
    const { previewMeme, dispatch } = useMemes();

    const savePreviewMemeToLocalStorage = () => {
        if (!ref.current) return;

        domtoimage.toPng(ref.current)
            .then(dataUrl => {
                const key = Date.now();
                localStorage.setItem(key, JSON.stringify(({
                    key,
                    creationDate: new Date(),
                    name: previewMeme.name,
                    dataUrl,
                })));
                dispatch({ type: "discard" })
            })
            .catch(error => console.error("dom to image error", error));
    }

    return previewMeme && (
        <div>
            <div
                ref={ref}
                style={{ position: "relative", }}
                className="w-2/3 rounded-sm m-3"
            >
                <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    background: "rgba(15, 23, 42, 0.4)",
                    zIndex: 100,
                }} />
                <img
                    src={previewMeme.url}
                    style={{ position: "relative" }}
                />

                <input
                    id="top"
                    type="text"
                    defaultValue="insert top text"
                    style={{
                        zIndex: 101,
                        background: "none",
                        display: "block",
                        position: "absolute",
                        top: 10,
                        left: 10,
                        right: 10,
                    }}
                    onChange={({ target }) => dispatch({
                        type: "changeTopText",
                        payload: target.value
                    })}
                />

                <input
                    defaultValue="insert bottom text"
                    id="bottom"
                    type="text"
                    cols={50}
                    rows={2}
                    style={{
                        background: "none",
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        right: 10,
                        zIndex: 101,
                    }}
                    onChange={({ target }) => dispatch({
                        type: "changeBottomText",
                        payload: target.value
                    })}
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
                onClick={() => dispatch({ type: "discard" })}
            >
                Discard Preview
            </button>
        </div>
    )
}
