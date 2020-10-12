import React, {useState, useEffect} from "react";
import './authorAlbumsList.css';
import Album from "../album/album";

export default function AuthorAlbumsList({authors, showAlbumsList, setShowAlbumsList, targetedAuthor}) {

    const [albums, setAlbums] = useState([]);
    const [showAlbum, setShowAlbum] = useState(false);
    const [pictures, setPictures] = useState([]);
    const [targetedAlbum, setTargetedAlbum] = useState(0);

    useEffect(() => {
        async function getAlbums() {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums');
            return res.json();
        }

        getAlbums().then(res => {
            const albumsFromData = res;
            setAlbums(albumsFromData);
        });
    }, []);

    useEffect(() => {
        async function getPictures() {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            return res.json();
        }

        getPictures().then(res => {
            const picturesFromData = res;
            setPictures(picturesFromData);
        });
    }, []);

    return showAlbumsList && (
        <>
            <button type="button" onClick={() => {
                setShowAlbumsList(false)
            }}>
                Close
            </button>

            {authors.filter(author => author.id === +targetedAuthor).map(authorId => (
                <>
                    <h2>{authorId.name}</h2>
                </>
            ))}

            {albums.filter(album => album.userId === +targetedAuthor).map(albumUserId => (
                <h5 id={albumUserId.id} onClick={targetAlbum}>
                    {albumUserId.title}
                </h5>
            ))
            }

            <Album pictures={pictures} showAlbum={showAlbum} setShowAlbum={setShowAlbum} targetedAlbum={targetedAlbum}/>
        </>
    );

    function targetAlbum(event) {
        const targetedAlbum = event.target.id;
        setShowAlbum(true);
        setTargetedAlbum(targetedAlbum);
        return targetedAlbum;
    }
}