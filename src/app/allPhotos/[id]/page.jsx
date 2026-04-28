import PhotoCard from '@/components/PhotoCard';
import { getPhotos } from '@/app/lib/data';
import Image from 'next/image';
import React from 'react';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)

    const photos = await getPhotos();

    const photo = photos.find(p => p.id == id)
    console.log(photo);
    return (
        <div>

            <PhotoCard photo={photo}></PhotoCard>
            

    
        </div>
    );
};

export default PhotoDetailsPage;