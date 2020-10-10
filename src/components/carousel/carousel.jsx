import React, {useEffect, useState} from "react";
import './carousel.css';

export default function Carousel({pictures, show, setShow, currentPicture}) {

    let numCurrentPicture = +currentPicture;
    let [currentIndex, setCurrentIndex] = useState(numCurrentPicture);

    useEffect(() => {
        setCurrentIndex(numCurrentPicture);
    }, [numCurrentPicture]);

    let content = show && (
            <>

                <div className="slideshow-container">

                    {
                        pictures.filter(picture => picture.id === currentIndex).map(
                            picture =>
                                <div id={picture.id} className="current-slide">
                                    <div className="number">{picture.id} / {pictures.length}</div>
                                    <button type='button' className='close' onClick={() => setShow(false)}>X</button>
                                    <button type='button' className="prev" onClick={previousPicture}>&#10094;</button>
                                    <button type='button' className="next" onClick={nextPicture}>&#10095;</button>
                                    <img src={picture.url} alt="{picture.id}"/>
                                    <div className="caption">{picture.title}</div>
                                </div>
                        )
                    }
                </div>
            </>
        )
    ;
    return content

    function nextPicture() {
        currentIndex++;
        if (currentIndex > pictures.length) {

            setCurrentIndex(currentIndex = 1);
        }
        setCurrentIndex(currentIndex);
    }

    function previousPicture() {
        currentIndex--;
        if (currentIndex === 0) {
            setCurrentIndex(currentIndex = pictures.length);
        }
        setCurrentIndex(currentIndex);
    }

}