import React, {useState, useEffect} from "react";
import './authorAlbumsList.css';
import Album from "../album/album";

export default function AuthorAlbumsList({authors, showAlbumsList, targetedAuthor}) {

    const [albums, setAlbums] = useState([]);
    const [showAlbum, setShowAlbum] = useState(false);
    const [pictures, setPictures] = useState([]);
    const [currentAlbum, setCurrentAlbum] = useState(0);

    useEffect(() => {
        async function getAlbums() {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums');
            return res.json();
        }

        getAlbums().then(res => {
            const albumsFromData = res;
            console.log("authors", albumsFromData);
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
            console.log("pictures", picturesFromData);
            setPictures(picturesFromData);
        });
    }, []);

    return showAlbumsList && (
        <>
            {authors.filter(author => author.id === +targetedAuthor).map(authorId => (
                <>
                    <h2>{authorId.name}</h2>
                    <h3>{authorId.title}</h3>
                </>
            ))}

            {albums.filter(item => item.userId === +targetedAuthor).map(albumUser => (

                <h5 onClick={targetAlbum}>
                    {albumUser.title}
                </h5>
            ))
            }
            <Album pictures={pictures} showAlbum={showAlbum} currentAlbum={currentAlbum} setShowAlbum={setShowAlbum}/>
        </>
    );

    function targetAlbum(event) {
        const currentAlbum = event.target.userId;
        setShowAlbum(true);
        setCurrentAlbum(currentAlbum);
        return currentAlbum;
    }
}