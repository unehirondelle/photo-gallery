import React, {useState, useEffect} from "react";
import './authorAlbumsList.css';
import Album from "../album/album";
import album from "../album/album";

export default function AuthorAlbumsList({authors, show, setShow, currentAuthor}) {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        async function getAlbums() {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums');
            const result = res.json();
            return result;
        }

        getAlbums().then(res => {
            const albumsFromData = res;
            console.log("authors", albumsFromData);
            setAlbums(albumsFromData);
        });
    }, []);

    return show && (
        <>
            {
                albums.filter(item => item.userId === +currentAuthor).map(albumUser => (

                    <h1>
                        {albumUser.title}
                    </h1>
                ))
            }
            <Album/>
        </>
    );
}