import React, {useState} from "react";
import './album.css';
import Carousel from "../carousel/carousel";

export default function Album({photos, authorName, albumTitle, showAlbum, setShowAlbum}) {

    const [showCarousel, setShowCarousel] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(0);
    const [albumPictureIndex, setAlbumPictureIndex] = useState(0);

    return showAlbum && (
        <div id='album' className='album-container'>
            <button id='btn-back' type="button" onClick={() => {
                setShowAlbum(false)
            }}>
                Back to Albums list
            </button>

            <h3 id={authorName} className='author'>
                <u>Author:</u>&nbsp;{authorName}
            </h3>
            <h4 id={albumTitle}>
                <u>Album:</u>&nbsp;{albumTitle}
            </h4>

            <ul className='album'>
                {photos.map((photo, index) => (
                    <li id={photo.id} key={'btn_' + photo.id}
                        onClick={(e) => selectedPicture(e)
                        }>
                        <figure className='album-picture'>
                            <img src={photo.thumbnailUrl} id={photo.id} alt={index}/>
                            <figcaption><small>{photo.title}</small></figcaption>
                        </figure>
                    </li>
                ))
                }
            </ul>
            <Carousel photos={photos} showCarousel={showCarousel} setShowCarousel={setShowCarousel}
                      currentPicture={currentPicture}
                      albumPictureIndex={albumPictureIndex}/>
        </div>
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