import React from 'react';
import Jumbotron from './components/jumbotron/jumbotron';
import AuthorsList from './components/authorsList/authorsList';

function App() {
    return (
        <>
            <Jumbotron/>
            <main>
                <AuthorsList/>
            </main>
        </>
    );
}

export default App;
