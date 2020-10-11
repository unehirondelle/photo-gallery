import React, {useEffect, useState} from 'react';
import './authorsList.css';
import AuthorAlbumsList from "../authorAlbumsList/authorAlbumsList";

export default function AuthorsList() {

    const [authors, setAuthors] = useState([]);
    // const [showAuthorsList, setShowAuthorsList] = useState(true)
    const [showAlbumsList, setShowAlbumsList] = useState(false);
    const [targetedAuthor, setTargetedAuthor] = useState(0);

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

    return(
        <>
            <ul>
                {authors.map(author => (
                    <React.Fragment key={author.id}>
                        <li id={author.id} onClick={(e) => handleTargetAuthor(e)
                        }>
                            {author.name}
                        </li>
                    </React.Fragment>
                ))}
            </ul>

            <AuthorAlbumsList key={authors.targetedAuthor} authors={authors} showAlbumsList={showAlbumsList}
                              setShowAlbumsList={setShowAlbumsList}
                              targetedAuthor={targetedAuthor}/>
        </>
    );

    function handleTargetAuthor(event) {
        const targetedAuthor = event.target.id;
        // setShowAuthorsList(false);
        setShowAlbumsList(true);
        setTargetedAuthor(targetedAuthor);
        return targetedAuthor;
    }
}