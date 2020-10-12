import React, {useState} from "react";
import './album.css';
import Carousel from "../carousel/carousel";

export default function Album({photos, showAlbum, setShowAlbum}) {

    const [showCarousel, setShowCarousel] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(0);
    const [albumPictureIndex, setAlbumPictureIndex] = useState(0);

    return showAlbum && (
        <>
            <button type="button" onClick={() => {
                setShowAlbum(false)
            }}>
                Back
            </button>
            <br/>
            {
                photos.map((photo, index) => (
                        <button id={photo.id} className='thumbnail' onClick={(e) => selectedPicture(e)
                        }>
                            <img src={photo.thumbnailUrl} id={photo.id} alt={index}/>
                        </button>
                    )
                )
            }
            <Carousel photos={photos} showCarousel={showCarousel} setShowCarousel={setShowCarousel} currentPicture={currentPicture}
                      albumPictureIndex={albumPictureIndex}/>
        </>
    );

    function selectedPicture(event) {
        const currentPicture = event.target.id;
        const albumPictureIndex = event.target.alt;
        setShowCarousel(true);
        setCurrentPicture(currentPicture);
        setAlbumPictureIndex(albumPictureIndex);
        return {currentPicture, albumPictureIndex};
    }
}