import { StyledButtonLarge, StyledForm, StyledInput, StyledLabel } from "../../styles";

const SearchForm = ({handleSubmit, handleChange, inputState}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="search">Search: </StyledLabel>
      <StyledInput onChange={handleChange} id="search" type="text" value={inputState}/>
      <StyledButtonLarge type="submit">Submit</StyledButtonLarge>
    </StyledForm>
  );
};
export default SearchForm;
