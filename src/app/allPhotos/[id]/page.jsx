import PhotoCard from '@/components/PhotoCard';
import { getPhotos } from '@/lib/data';
import React from 'react';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)

    const photos = await getPhotos();

    const photo = photos.find(p => p.id == id)
    console.log(photo);
    return (
        <div>
            Details........
            <PhotoCard photo={photo}></PhotoCard>
        </div>
    );
};

export default PhotoDetailsPage;