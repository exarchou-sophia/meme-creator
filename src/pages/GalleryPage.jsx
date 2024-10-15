export const GalleryPage = () => (
    <div

        className="bg-slate-900 text-white"
    >
        <p className="text-xl mx-4 text-stone-200">Your Memes Collection</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
            {Object.keys(localStorage)
                .map(key => localStorage.getItem(key))
                .map(base64Str => atob(base64Str))
                .map(meme => (
                    <div className="w-auto object-cover bg-slate-700 px-4 m-4 rounded-md shadow-lg
                             overflow-hidden transition-transform transform hover:scale-95 hover:shadow-md">
                        <div dangerouslySetInnerHTML={{ __html: meme }} />
                        {/* <button
                            onClick={() => handleShare(localStorage.getItem(key))}
                            className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors"
                        >
                            Share
                        </button> */}
                    </div>
                ))}
        </div>
    </div>
)
