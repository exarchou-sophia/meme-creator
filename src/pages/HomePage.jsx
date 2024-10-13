export const HomePage = ({ onSearchInputChanged, onSearchClicked }) => {

    return (
        <div>
            <h1>Create your own meme</h1>
            <div>Preview</div>

            <aside className="flex items-center justify-end w-1/3 px-4 py-4 ml-auto bg-stone-100">

                <div className="bg-white flex px-1 py-1 rounded-lg border border-indigo-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                    <input
                        type='email'
                        placeholder='Search for a picture...'
                        className="w-full outline-none bg-white pl-4 text-sm"
                        onChange={({ target }) => {
                            onSearchInputChanged(target.value)
                        }}
                    />
                    <button
                        type='button'
                        className="bg-indigo-500 hover:bg-amber-600 transition-all text-white text-sm rounded-lg px-5 py-2.5"
                        onClick={onSearchClicked}
                    >
                        Search
                    </button>

                </div>
            </aside>

        </div>
    )
}