import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";
import SearchTerm from "./components/SearchTerm/SearchTerm";
import { StyledContainer, StyledTitle } from "./styles";

class App extends Component {
  state = {
    searchTerm: "",
    stories: [
      {
        title: "React",
        url: "https://reactjs.org/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: "Redux",
        url: "https://redux.js.org/",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    ],
  };

  componentDidMount() {
    const searchTerm = localStorage.getItem("searchTerm");
    if (searchTerm) {
      this.setState({ searchTerm });
    }
  }

  componentDidUpdate(_, { searchTerm }) {
    if (searchTerm !== this.state.searchTerm) {
      localStorage.setItem("searchTerm", this.state.searchTerm);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const searchTerm = event.target.elements.search.value;

    this.setState({ searchTerm });
    event.target.reset();
  };

  filterStories = () => {
    return this.state.stories.filter((story) =>
      story.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  handleRemoveStory = (objectID) => {
    this.setState((prevState) => ({
      stories: prevState.stories.filter((story) => story.objectID !== objectID),
    }));
  };

  resetSearchTerm = () => {
    this.setState({ searchTerm: "" });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <StyledContainer>
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <StyledTitle>Hacker Stories</StyledTitle>
        </div>
        <SearchForm handleSubmit={this.handleSubmit} />
        {searchTerm && <SearchTerm searchTerm={searchTerm} onClick={this.resetSearchTerm} />}
        <List stories={this.filterStories()} handleRemoveStory={this.handleRemoveStory} />
      </StyledContainer>
    );
  }
}

export default App;
