import React, {useState} from 'react';
import './authorsList.css';
import AlbumsList from "../authorAlbumsList/albumsList";

export default function AuthorsList({authors}) {

    const [showAlbumsList, setShowAlbumsList] = useState(false);
    const [selectedAuthor, setSelectedAuthor] = useState(0);
    const [albums, setAlbums] = useState([]);

    return (
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

            <AlbumsList albums={albums} key={selectedAuthor} showAlbumsList={showAlbumsList}
                        setShowAlbumsList={setShowAlbumsList}
                        selectedAuthor={selectedAuthor} />
        </>
    );

    function handleTargetAuthor(event) {
        const selectedAuthorId = event.target.id;
        setSelectedAuthor(selectedAuthorId);
        setAlbums(authors.filter(author => author.id === +selectedAuthorId)[0].albums);
        setShowAlbumsList(true);
        return selectedAuthorId;
    }
}