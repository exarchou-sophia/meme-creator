export const getMemes = () =>
    fetch("https://api.imgflip.com/get_memes").then(res => res.json());