import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotospage =async () => {
    const  res = await fetch("https://pixgen-fawn.vercel.app/data.json")
    const photos = await res.json();
    return (
        <div>
            All photos....hh

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5' >
              {
                photos.map((photo, ind) =>{
                    return <PhotoCard key={ind} photo={photo}/>
                })
              }
            </div>
        </div>
    );
};

export default AllPhotospage;