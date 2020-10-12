import React, {useState} from 'react';
import './authorsList.css';
import AlbumsList from "../authorAlbumsList/albumsList";

export default function AuthorsList({authors}) {

    const [showAlbumsList, setShowAlbumsList] = useState(false);
    const [selectedAuthor, setSelectedAuthor] = useState(0);
    const [albums, setAlbums] = useState([]);
    const [authorName, setAuthorName] = useState('');

    return (
        <div className='album-container'>
            <h3 className='author'>Authors</h3>
            <ul className='album'>
                {authors.map(author => (
                    <React.Fragment key={author.id}>
                        <li id={author.id} className='author-list album-picture' onClick={(e) => handleTargetAuthor(e)
                        }>
                            {author.name}
                        </li>
                    </React.Fragment>
                ))}
            </ul>

            <AlbumsList authorName={authorName} albums={albums} key={selectedAuthor} showAlbumsList={showAlbumsList}
                        setShowAlbumsList={setShowAlbumsList}
            />
        </div>
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