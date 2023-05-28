import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";
import SearchTerm from "./components/SearchTerm/SearchTerm";
import { StyledContainer, StyledTitle } from "./styles";
import { fetchData } from "./Api";

function App() {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || "");
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchStories();
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchTerm = event.target.elements.search.value;

    setSearchTerm(searchTerm);
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

  const handleRemoveStory = (objectID) => {
    setStories(() => stories.filter((story) => story.objectID !== objectID));
  };

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
      <SearchForm handleSubmit={handleSubmit} />
      {searchTerm && <SearchTerm searchTerm={searchTerm} onClick={resetSearchTerm} />}
      {isLoading && <p>Loading</p>}
      {error && <p>Something went wrong</p>}
      <List stories={stories} handleRemoveStory={handleRemoveStory} />
    </StyledContainer>
  );
}

export default App;
