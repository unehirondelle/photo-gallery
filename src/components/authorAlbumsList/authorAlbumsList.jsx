import React, {useState, useEffect} from "react";
import './authorAlbumsList.css';
import Album from "../album/album";

export default function AuthorAlbumsList({authors, showAlbumsList, setShowAlbumsList, targetedAuthor}) {

    const [albums, setAlbums] = useState([]);
    const [showAlbum, setShowAlbum] = useState(false);
    const [pictures, setPictures] = useState([]);
    const [targetedAlbum, setTargetedAlbum] = useState(0);

    useEffect(() => {
        Promise.all([
            fetch("https://jsonplaceholder.typicode.com/albums").then(value => value.json()),
            fetch("https://jsonplaceholder.typicode.com/photos").then(value => value.json()),
            fetch("https://jsonplaceholder.typicode.com/users").then(value => value.json())
        ])
            .then(([albums, photos, _authors]) => {
                let all = []
                albums.forEach(a => all.push({
                    'album': a,
                    'photos': photos.filter(p => p.albumId === a.id),
                    'author': _authors.filter(au => au.id  === a.userId)[0]
                }))
                //json response
                console.log('albums after', all)
            })
            .catch((err) => {
                console.log(err);
            });

        // let [albums, photos] = await Promise.all([
        //     fetch("https://jsonplaceholder.typicode.com/albums"),
        //     fetch("https://jsonplaceholder.typicode.com/photos")
        // ]);

        //     }))
        //     console.log('after reconcile', albums);


        async function getAlbums() {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums');
            return res.json();
        }

        async function getPhotos() {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            return res.json();
        }

        getAlbums().then(res => {
            const albumsFromData = res;

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

    useEffect(() => {

    })

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

            <Album pictures={pictures} showAlbum={showAlbum} setShowAlbum={setShowAlbum}
                   targetedAlbum={targetedAlbum}/>
        </>
    );

    function targetAlbum(event) {
        const targetedAlbum = event.target.id;
        setShowAlbum(true);
        setTargetedAlbum(targetedAlbum);
        return targetedAlbum;
    }
}