import React, {useState, useEffect} from 'react';
import Jumbotron from './components/jumbotron/jumbotron';
import AuthorsList from './components/authorsList/authorsList';

export default function App() {

    let [authors, setAuthors] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users").then(value => value.json()),
            fetch("https://jsonplaceholder.typicode.com/albums").then(value => value.json()),
            fetch("https://jsonplaceholder.typicode.com/photos").then(value => value.json())
        ])
            .then(([authors, albums, photos]) => {
                const newAuthors = authors.map(author => {
                    return {
                        ...author,
                        albums: albums.filter(album => album.userId === author.id).map((album) => {
                            return {
                                ...album,
                                photos: photos.filter(photo => photo.albumId === album.id)
                            }
                        })
                    }
                })
                setAuthors(newAuthors);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Jumbotron/>
            <main>
                <AuthorsList authors={authors}
                />
            </main>
            <footer>
                <small>Irina Plaksina &copy; 2020</small>
            </footer>
        </>
    );
}