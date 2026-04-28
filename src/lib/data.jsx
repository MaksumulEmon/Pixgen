export async function getPhotos() {
    const res = await fetch("https://pixgen-fawn.vercel.app/data.json");
    const photos = await res.json();
    return photos;
}

// const res = await fetch("https://pixgen-fawn.vercel.app/data.json")
//     const photos = await res.json();
//     console.log(photos)