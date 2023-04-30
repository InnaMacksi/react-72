const SearchForm = props => {
    return (<form>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <button type="submit">Submit</button>
    </form>)
};
export default SearchForm;