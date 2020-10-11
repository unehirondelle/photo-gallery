import React, {useState} from "react";
import './album.css';
import Carousel from "../carousel/carousel";

export default function Album({pictures, showAlbum, setShowAlbum, targetedAlbum}) {

    const [show, setShow] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(0);

    return showAlbum && (
        <>
            <button type="button" onClick={() => {
                setShowAlbum(false)
            }}>
                Back
            </button>
            <br/>
            {pictures.filter(picture => picture.albumId === +targetedAlbum).map(pictureAlbumId => (
                    <button id={pictureAlbumId.id} className='thumbnail' onClick={(e) => targetPicture(e)
                    }>
                        <img src={pictureAlbumId.thumbnailUrl} id={pictureAlbumId.id} alt={pictureAlbumId.id}/>
                    </button>
                )
            )
            }
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