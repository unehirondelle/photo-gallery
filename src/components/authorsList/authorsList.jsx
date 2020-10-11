import React, {useEffect, useState} from 'react';
import './authorsList.css';
import AuthorAlbumsList from "../authorAlbumsList/authorAlbumsList";
import Carousel from "../carousel/carousel";

export default function AuthorsList() {

    const [authors, setAuthors] = useState([]);
    const [show, setShow] = useState(false);
    const [currentAuthor, setCurrentAuthor] = useState(0);

    useEffect(() => {
        async function getAuthors() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = res.json();
            return result;
        }

        getAuthors().then(res => {
            const authorsFromData = res;
            console.log("authors", authorsFromData);
            setAuthors(authorsFromData);
        });
    }, []);

    return (
        <>
            <ul>
                {authors.map(author => (
                        <>
                            <li id={author.id} onClick={(e) => targetAuthor(e)
                            }>
                                {author.name}
                            </li>
                            <AuthorAlbumsList key={author.id} authors={authors} show={show} setShow={setShow}
                                              currentAuthor={currentAuthor}/>
                        </>
                    )
                )}
            </ul>

        </>
    );

    function targetAuthor(event) {
        const currentAuthor = event.target.id;
        setShow(true);
        setCurrentAuthor(currentAuthor);
        return currentAuthor;
    }
}