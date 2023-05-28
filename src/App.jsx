import React, { useState, useEffect, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";
import SearchTerm from "./components/SearchTerm/SearchTerm";
import { StyledContainer, StyledTitle } from "./styles";
import { fetchData } from "./Api";
import useSemiPersistentState from "./hooks/useSemiPersistentState";

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('searchTerm', '');
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputState, setInputState] = useState('')

  useEffect(() => {
    fetchStories();
  }, [searchTerm]);

  const handleChange = (event) => {
    setInputState(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchTerm(inputState);
    event.target.reset();
  };

  const fetchStories = () => {
    setIsLoading(true);

    fetchData(searchTerm)
      .then((res) => {
        setStories([...res.hits]);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };



  const handleRemoveStory = useCallback(
  (objectID) => {
    setStories((stories) => stories.filter((story) => story.objectID !== objectID));
  }, []);

  const resetSearchTerm = () => {
    setSearchTerm("");
  };

  return (
    <StyledContainer>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <StyledTitle>Hacker Stories</StyledTitle>
      </div>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} inputState={inputState} />
      {searchTerm && <SearchTerm searchTerm={searchTerm} onClick={resetSearchTerm} />}
      {isLoading && <p>Loading</p>}
      {error && <p>Something went wrong</p>}
      <List stories={stories} handleRemoveStory={handleRemoveStory} />
    </StyledContainer>
  );
}

export default App;
