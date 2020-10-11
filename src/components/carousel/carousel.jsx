import React, {useEffect, useState} from "react";
import './carousel.css';

export default function Carousel({albumPictures, show, setShow, currentPicture, albumPictureIndex}) {

    let numCurrentPicture = +currentPicture;
    let numAlbumPictureIndex = parseInt(albumPictureIndex) + 1;
    let [currentIndex, setCurrentIndex] = useState(numCurrentPicture);
    let [currentPictureIndex, setCurrentPictureIndex] = useState(numAlbumPictureIndex)

    useEffect(() => {
        setCurrentIndex(numCurrentPicture);
        setCurrentPictureIndex(numAlbumPictureIndex);
    }, [numCurrentPicture, numAlbumPictureIndex]);

    return show && (
        <>
            <div className="slideshow-container">
                {
                    albumPictures.filter(picture => picture.id === currentIndex).map(
                        item =>
                            <div id={item.id} className="current-slide">
                                <div className="number">{currentPictureIndex} / {albumPictures.length}</div>
                                <button type='button' className='close' onClick={() => setShow(false)}>X</button>
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
        currentIndex++;
        currentPictureIndex++;
        if (currentPictureIndex > albumPictures.length) {
            setCurrentIndex(currentIndex = albumPictures[0].id);
            setCurrentPictureIndex(currentPictureIndex = 1);
        }
        setCurrentIndex(currentIndex);
        setCurrentPictureIndex(currentPictureIndex);
    }

    function previousPicture() {
        currentIndex--;
        currentPictureIndex--;
        if (currentPictureIndex === 0) {
            setCurrentIndex(currentIndex = albumPictures[albumPictures.length - 1].id);
            setCurrentPictureIndex(currentPictureIndex = albumPictures.length);
        }
        setCurrentIndex(currentIndex);
        setCurrentPictureIndex(currentPictureIndex);
    }

}