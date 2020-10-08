import React, {useEffect, useState} from 'react';
import Jumbotron from './components/jumbotron/jumbotron';
import AuthorsList from './components/authorsList/authorsList';
import axios from 'axios';

export default function App() {
    let [authors, setAuthors] = useState([]);
    let [albums, setAlbums] = useState([]);
    let [pictures, setPictures] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const authors = res.data.response;
            setAuthors(authors);
        });
    }, []);
    return (
        <>
            <Jumbotron/>
            <main>
                <AuthorsList
                    authors={authors}/>
            </main>
            <footer>
                <small>Irina Plaksina &copy; 2020</small>
            </footer>
        </>
    );
}