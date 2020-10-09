import React, {useEffect, useState} from "react";
import './carousel.css';

export default function Carousel() {
    const [pictures, setPictures] = useState([]);
    let [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        async function getPictures() {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const result = res.json();
            return result;
        }

        getPictures().then(res => {
            const picturesFromData = res.slice(0, 10);
            console.log("pictures", picturesFromData);
            setPictures(picturesFromData);
        });
    }, []);

    return (
        <div className="slideshow-container">
            {
                pictures.filter(picture => picture.id === currentIndex).map(
                    picture =>
                        <div id={picture.id} className="current-slide">
                            <div className="number">{picture.id} / {pictures.length}</div>
                            <button type='button' className="prev" onClick={previousPicture}>&#10094;</button>
                            <button type='button' className="next" onClick={nextPicture}>&#10095;</button>
                            <img src={picture.thumbnailUrl} alt="{picture.id}"/>
                            <div className="caption">{picture.title}</div>
                        </div>
                )
            }
        </div>
    );

    function nextPicture() {
        currentIndex++;
        if (currentIndex > pictures.length) {

            setCurrentIndex(currentIndex=1);
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