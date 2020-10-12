import React, {useState} from "react";
import './albumsList.css';
import Album from "../album/album";

export default function AlbumsList({authorName, albums, showAlbumsList, setShowAlbumsList}) {

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


            <h3 id={authorName}>
                Author{authorName}
            </h3>

            <ol>
                {albums.map(album => (
                    <li key={album.id} id={album.id} onClick={selectAlbum}>
                        [Album]:&nbsp;
                        {album.title}
                    </li>
                ))
                }
            </ol>

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