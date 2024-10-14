export const GalleryPage = () => (
    <div
        style={{ gap: "16px", display: "flex", flexDirection: "column" }}
        className="bg-indigo-500 text-white"
    >
        <p>Your saved Memes</p>

        {Object.keys(localStorage)
            .map(key => localStorage.getItem(key))
            .map(base64Str => atob(base64Str))
            .map(meme => (
                <div style={{ position: "relative" }}>
                    <div dangerouslySetInnerHTML={{ __html: meme }} />
                </div>
            ))}
    </div>
)