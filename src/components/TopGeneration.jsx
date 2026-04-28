import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async () => {

    const res = await fetch("https://pixgen-fawn.vercel.app/data.json")
    const photos = await res.json();
    console.log(photos)
    return (
        <div>
            <h1 className='font-bold text-2xl text-green-400'>Top Geration</h1>

            <div className='grid grid-cols-1 lg:grid-cols-4  m-5 gap-5'>
                { 
                    photos.map((photo,ind) =>
                      <PhotoCard key={ind} photo={photo}/>
                    )
                }
            </div>
        </div>
    );
};

export default TopGeneration;