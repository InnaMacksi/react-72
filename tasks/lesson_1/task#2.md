# Add styles to components
1. Додати загальну обгортку:
```
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  padding: 20px;

  background: #83a4d4;
  background: linear-gradient(to left, #b6fbff, #83a4d4);

  color: #171212;
```
2. Стилізацію хедера:
```
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 2px;
```
3. Стилізацію айтема:
```
  display: flex;
  align-items: center;
  padding: 5px;
```

4. Стилізацію спану в айтемі (реалізувати передачу width в якості параметрів):
```
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  a {
    color: inherit;
  }

  width: ...;
```
5. Стилізацію кнопок (реалізувати стильове наслідування). Зробити один загальний стилізований компонент StyledButton:
```
  background: transparent;
  border: 1px solid #171212;
  padding: 5px;
  cursor: pointer;

  transition: all 0.1s ease-in;

  &:hover {
    background: #171212;
    color: #ffffff;
  }
```
І його потомків - StyledButtonSmall і StyledButtonLarge:
```
//small
  padding: 5px;

//large
  padding: 10px;
```
6. Стилізацію форми:
```
  padding: 10px 0 20px 0;
  display: flex;
  align-items: baseline;
```
Інпуту:
```
  border: none;
  border-bottom: 1px solid #171212;
  background-color: transparent;

  font-size: 24px;
```
Лейблу:
```
  border-top: 1px solid #171212;
  border-left: 1px solid #171212;
  padding-left: 5px;
  font-size: 24px;
```

