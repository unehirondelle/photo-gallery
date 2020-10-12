import React, {useState} from 'react';
import './authorsList.css';
import AlbumsList from "../authorAlbumsList/albumsList";

export default function AuthorsList({authors}) {

    const [showAlbumsList, setShowAlbumsList] = useState(false);
    const [selectedAuthor, setSelectedAuthor] = useState(0);
    const [albums, setAlbums] = useState([]);
    const [authorName, setAuthorName] = useState('');

    return (
        <>
            <ul>
                {authors.map(author => (
                    <React.Fragment key={author.id}>
                        <li id={author.id} onClick={(e) => handleTargetAuthor(e)
                        }>[Author]: &nbsp;
                            {author.name}
                        </li>
                    </React.Fragment>
                ))}
            </ul>

            <AlbumsList authorName={authorName} albums={albums} key={selectedAuthor} showAlbumsList={showAlbumsList}
                        setShowAlbumsList={setShowAlbumsList}
            />
        </>
    );

    function handleTargetAuthor(event) {
        const selectedAuthorId = event.target.id;
        setSelectedAuthor(selectedAuthorId);
        const author = authors.filter(author => author.id === +selectedAuthorId)[0]

        setAlbums(author.albums);
        setShowAlbumsList(true);
        setAuthorName(author.name)
        return selectedAuthorId;
    }
}