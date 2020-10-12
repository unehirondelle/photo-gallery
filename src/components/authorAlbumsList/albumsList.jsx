import React, {useState, useEffect} from "react";
import './albumsList.css';
import Album from "../album/album";

export default function AlbumsList({albums, showAlbumsList, setShowAlbumsList}) {

    const [showAlbum, setShowAlbum] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(0);
    const [photos, setPhotos] = useState([]);


    return showAlbumsList && (
        <>
            <button type="button" onClick={() => {
                setShowAlbumsList(false)
            }}>
                Close
            </button>

            {/*{albums.map(album => (*/}
            {/*    <h5 id={album.id} onClick={targetAlbum}>*/}
            {/*        {album.title}*/}
            {/*    </h5>*/}
            {/*)))}*/}

            {albums.map(album => (
                <h5 id={album.id} onClick={selectAlbum}>
                    {album.title}
                </h5>
            ))
            }

            <Album photos={photos} showAlbum={showAlbum} setShowAlbum={setShowAlbum}
                   selectedAlbum={selectedAlbum}/>
        </>
    );

    function selectAlbum(event) {
        const selectedAlbum = event.target.id;
        setShowAlbum(true);
        setSelectedAlbum(selectedAlbum);
        setPhotos(albums.filter(album => album.id === +selectedAlbum)[0].photos)
        return selectedAlbum;
    }
}