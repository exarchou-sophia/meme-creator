export const GalleryPage = () => (
    <div className="bg-slate-900 text-white">
        <p className="text-xl mx-4 text-stone-200">
            Your Memes Collection
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-2">
            {Object.keys(localStorage)
                .map(key => localStorage.getItem(key))
                .map(data => JSON.parse(data))
                .map(({ creationDate, dataUrl, name }) => (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p>{name}</p>
                        <p>creation date {new Date(creationDate).toLocaleDateString()}</p>
                        <img
                            src={dataUrl}
                            className="rounded-md"
                        />
                    </div>

                ))}
        </div>
    </div>
)
