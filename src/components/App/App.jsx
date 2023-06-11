import { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/toDoSlice';

export function App() {
const todos = useSelector(getTodos);

    return (
      <>
        <Header />
        <Section>
          <Container>
            <SearchForm/>

            {todos.length === 0 && (
              <Text textAlign="center">There are no any todos ... </Text>
            )}

            <Grid>
              {todos.length > 0 &&
                todos.map((todo, index) => (
                  <GridItem key={todo.id}>
                    <Todo
                      id={todo.id}
                      text={todo.text}
                      counter={index + 1}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        </Section>
      </>
    );
  }
