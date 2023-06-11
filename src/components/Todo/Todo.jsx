import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/todoSlice';
import { useState } from 'react';

export const Todo = ({ text, counter, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(text);
  const dispatch = useDispatch();

  const handleInputUpdate = () => {
    dispatch(
      updateTodo({
        id,
        text: inputValue,
      })
    );
    setIsEdit(false);
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        {isEdit ? (
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onDoubleClick={handleInputUpdate}
          />
        ) : (
          <Text onDoubleClick={() => setIsEdit(true)}>{text}</Text>
        )}
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
