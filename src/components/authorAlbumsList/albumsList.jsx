import React, {useState} from "react";
import './albumsList.css';
import Album from "../album/album";

export default function AlbumsList({authorName, albums, showAlbumsList, setShowAlbumsList}) {

    const [showAlbum, setShowAlbum] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(0);
    const [photos, setPhotos] = useState([]);


    return showAlbumsList && (
        <div className='album-container'>
            <button id='btn-back' type="button" onClick={() => {
                setShowAlbumsList(false)
            }}>
                Close
            </button>


            <h3 id={authorName}>
                Author{authorName}
            </h3>

            <ul id='album-list' className='album'>
                {albums.map(album => (
                    <li key={album.id} id={album.id} onClick={selectAlbum}>
                        <figure className='album-picture'>
                            <img id={album.id} src={album.photos[0].thumbnailUrl} alt={album.photos[0].id}/>
                            <figcaption>
                                [Album]:&nbsp; {album.title}
                                <p>{album.photos.length} pictures</p>
                            </figcaption>
                        </figure>
                    </li>
                ))
                }
            </ul>

            <Album photos={photos} showAlbum={showAlbum} setShowAlbum={setShowAlbum}
                   selectedAlbum={selectedAlbum}/>
        </div>
    );

    function selectAlbum(event) {
        const selectedAlbum = event.target.id;
        setShowAlbum(true);
        setSelectedAlbum(selectedAlbum);
        setPhotos(albums.filter(album => album.id === +selectedAlbum)[0].photos)
        return selectedAlbum;
    }
}