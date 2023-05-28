# Create custom hook for local storage
Створити кастомний хук useSemiPersistentState, який прийматиме в себе 2 параметри:
key (ключ, по якому ми записуватимемо значення у localStorage. наприклад 'search')
initialValue (початкове значення стейту) Замінити ним наші useState та useEffect для searchTerm.