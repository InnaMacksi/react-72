# Add data fetching and conditional rendering
1. Додати в компоненту App стейти isLoading та isError.
2. Додати conditional rendering з текстом 'Something went wrong' та 'Loading'
3. Додати data fetching. Ендпоінт для використання:
```
https://hn.algolia.com/api/v1/search?query=
```
Дані повинні оновлюватись, коли оновлюється наш searchTerm. Тобто тепер фільтрування має бути server-side.