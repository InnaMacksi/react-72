import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";
import SearchTerm from "./components/SearchTerm/SearchTerm";
import { StyledContainer, StyledTitle } from "./styles";
import { fetchData } from "./Api";

class App extends Component {
  state = {
    searchTerm: "",
    stories: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    const searchTerm = localStorage.getItem("searchTerm");
    if (searchTerm) {
      this.setState({ searchTerm });
    };
   this.fetchStories()
  }

  componentDidUpdate(_, { searchTerm }) {
    if (searchTerm !== this.state.searchTerm) {
      localStorage.setItem("searchTerm", this.state.searchTerm);
      this.fetchStories()
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const searchTerm = event.target.elements.search.value;

    this.setState({ searchTerm });
    event.target.reset();
  };

  fetchStories = () => {
    this.setState({ isLoading: true });

    fetchData(this.state.searchTerm).then(res => {
      this.setState({ stories: res.hits })
    }).catch((error) => {
      this.setState({ isError: true })
    }).finally(() => {
      this.setState({ isLoading: false })
    });
  };

  // filterStories = () => {
  //   return this.state.stories.filter((story) => {
  //     if (!story.title) return true;    
  //       return story.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //   }
      
  //   );
  // };

  handleRemoveStory = (objectID) => {
    this.setState((prevState) => ({
      stories: prevState.stories.filter((story) => story.objectID !== objectID),
    }));
  };

  resetSearchTerm = () => {
    this.setState({ searchTerm: "" });
  };

  render() {
    const { searchTerm, isLoading, isError, stories } = this.state;
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
        {isLoading && <p>Loading</p>}
        {isError && <p>Something went wrong</p>}
        <List stories={stories} handleRemoveStory={this.handleRemoveStory} />
      </StyledContainer>
    );
  }
}

export default App;
