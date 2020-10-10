import React, {useEffect, useState} from "react";
import './album.css';
import Carousel from "../carousel/carousel";

export default function Album() {
    const [pictures, setPictures] = useState([]);
    const [show, setShow] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(0);
    useEffect(() => {
        async function getPictures() {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const result = res.json();
            return result;
        }

        getPictures().then(res => {
            const picturesFromData = res.filter(item => item.albumId === 1);
            console.log("pictures", picturesFromData);
            setPictures(picturesFromData);
        });
    }, []);

    return (
        <>
            <div>
                {pictures.map(item => (
                    <button id={item.id} className='thumbnail' onClick={(e) => targetPicture(e)
                    }>
                        <img src={item.thumbnailUrl} id={item.id} alt={item.id}/>
                    </button>)
                )}
            </div>
            <Carousel pictures={pictures} show={show} setShow={setShow} currentPicture={currentPicture}/>
        </>
    );

    function targetPicture(event) {
        const currentPicture = event.target.id;
        setShow(true);
        setCurrentPicture(currentPicture);
        console.log('currentPicture', currentPicture);
        return currentPicture;
    }
}