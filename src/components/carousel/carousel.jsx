import React, {useEffect, useState} from "react";
import './carousel.css';

export default function Carousel({photos, showCarousel, setShowCarousel, currentPicture, albumPictureIndex}) {

    let numCurrentPicture = +currentPicture;
    let numAlbumPictureIndex = parseInt(albumPictureIndex) + 1;
    let [currentIndex, setCurrentIndex] = useState(numCurrentPicture);
    let [currentPictureIndex, setCurrentPictureIndex] = useState(numAlbumPictureIndex)

    useEffect(() => {
        setCurrentIndex(numCurrentPicture);
        setCurrentPictureIndex(numAlbumPictureIndex);
    }, [numCurrentPicture, numAlbumPictureIndex]);

    return showCarousel && (
        <>
            <div className="slideshow-container">
                {
                    photos.filter(photo => photo.id === currentIndex).map(
                        item =>
                            <div id={item.id} className="current-slide">
                                <div className="number">{currentPictureIndex} / {photos.length}</div>
                                <button type='button' className='close' onClick={() => setShowCarousel(false)}>X</button>
                                <button type='button' className="prev" onClick={previousPicture}>&#10094;</button>
                                <button type='button' className="next" onClick={nextPicture}>&#10095;</button>
                                <img src={item.url} alt={item.id}/>
                                <div className="caption">{item.title}</div>
                            </div>
                    )
                }
            </div>
        </>
    );

    function nextPicture() {
        const photosCount = photos.length;
        currentIndex++;
        currentPictureIndex++;
        if (currentPictureIndex > photosCount) {
            setCurrentIndex(currentIndex = photos[0].id);
            setCurrentPictureIndex(currentPictureIndex = 1);
        }
        setCurrentIndex(currentIndex);
        setCurrentPictureIndex(currentPictureIndex);
    }

    function previousPicture() {
        const photosCount = photos.length;
        currentIndex--;
        currentPictureIndex--;
        if (currentPictureIndex === 0) {
            setCurrentIndex(currentIndex = photos[photosCount - 1].id);
            setCurrentPictureIndex(currentPictureIndex = photosCount);
        }
        setCurrentIndex(currentIndex);
        setCurrentPictureIndex(currentPictureIndex);
    }

}