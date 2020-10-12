import React, {useState} from "react";
import './album.css';
import Carousel from "../carousel/carousel";

export default function Album({pictures, showAlbum, setShowAlbum, targetedAlbum}) {

    const [show, setShow] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(0);
    const albumPictures = pictures.filter(picture => picture.albumId === +targetedAlbum);
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
                albumPictures.map((pictureAlbumId, index) => (
                        <button id={pictureAlbumId.id} className='thumbnail' onClick={(e) => targetPicture(e)
                        }>
                            <img src={pictureAlbumId.thumbnailUrl} id={pictureAlbumId.id} alt={index}/>
                        </button>
                    )
                )
            }
            <Carousel albumPictures={albumPictures} show={show} setShow={setShow} currentPicture={currentPicture}
                      albumPictureIndex={albumPictureIndex}/>
        </>
    );

    function targetPicture(event) {
        const currentPicture = event.target.id;
        const albumPictureIndex = event.target.alt;
        setShow(true);
        setCurrentPicture(currentPicture);
        setAlbumPictureIndex(albumPictureIndex);
        return {currentPicture, albumPictureIndex};
    }
}