import React, {useState} from "react";
import './albumsList.css';
import Album from "../album/album";

export default function AlbumsList({authorName, albums, showAlbumsList, setShowAlbumsList}) {

    const [showAlbum, setShowAlbum] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(0);
    const [photos, setPhotos] = useState([]);
    const [albumTitle, setAlbumTitle] = useState('');

    return showAlbumsList && (
        <div id='albums-list' className='album-container'>
            <button id='btn-back' type="button" onClick={() => {
                setShowAlbumsList(false)
            }}>
                Close
            </button>

            <h3 id={authorName} className='author'>
                <u>Author:</u>&nbsp;{authorName}
            </h3>

            <ul id='album-list' className='album'>
                {albums.map(album => (
                    <li key={album.id} id={album.id}>
                        <figure className='album-picture'>
                            <img id={album.id} src={album.photos[0].thumbnailUrl} alt={album.photos[0].id}
                                 onClick={selectAlbum}/>
                            <figcaption>
                                [Album]:&nbsp; {album.title}
                                <p>{album.photos.length} pictures</p>
                            </figcaption>
                        </figure>
                    </li>
                ))
                }
            </ul>

            <Album photos={photos} authorName={authorName} albumTitle={albumTitle} showAlbum={showAlbum}
                   setShowAlbum={setShowAlbum}
                   selectedAlbum={selectedAlbum}/>
        </div>
    );

    function selectAlbum(event) {
        const selectedAlbum = event.target.id;
        setShowAlbum(true);
        setSelectedAlbum(selectedAlbum);
        const album = albums.filter(album => album.id === +selectedAlbum)[0];
        setPhotos(album.photos);
        setAlbumTitle(album.title);
        return selectedAlbum;
    }
}