import React, {useEffect, useState} from 'react';
import Jumbotron from './components/jumbotron/jumbotron';
import AuthorsList from './components/authorsList/authorsList';
import axios from 'axios';

export default function App() {

    return (
        <>
            <Jumbotron/>
            <main>
                <AuthorsList
                    />
            </main>
            <footer>
                <small>Irina Plaksina &copy; 2020</small>
            </footer>
        </>
    );
}