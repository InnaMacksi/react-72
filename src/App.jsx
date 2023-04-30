import React from "react";
import reactLogo from './assets/react.svg'
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";

const stories = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    }
]

function App() {
    return (
        <div>
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
                <h1>Hacker Stories</h1>
            </div>
            <SearchForm />
            <List stories={stories}/>
        </div>
    )
}

export default App
