import React, {useEffect, useState} from "react";
import './album.css';
import Carousel from "../carousel/carousel";

export default function Album({pictures, showAlbum, currentAlbum, setShowAlbum}) {

    let numCurrentAlbum = +currentAlbum;
    const [show, setShow] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(0);

    useEffect(() => {
        setCurrentPicture(numCurrentAlbum);
    }, [numCurrentAlbum]);

    return showAlbum && (
        <>
            <button type="button" onClick={() => {
                setShowAlbum(false)
            }}>Back
            </button>
            <div>
                {
                    pictures.filter(album => album.userId === numCurrentAlbum).map(item => (
                            <button id={item.id} className='thumbnail' onClick={(e) => targetPicture(e)
                            }>
                                <img src={item.thumbnailUrl} id={item.id} alt={item.id}/>
                            </button>
                        )
                    )
                }
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