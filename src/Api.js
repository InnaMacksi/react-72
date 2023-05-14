const ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

export const fetchData = (searchTerm) => {
   return fetch(`${ENDPOINT} ${searchTerm}`).then(
    res => res.json()
    )
};