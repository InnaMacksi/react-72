import { StyledButtonLarge, StyledForm, StyledInput, StyledLabel } from "../../styles";

const SearchForm = (props) => {
  return (
    <StyledForm>
      <StyledLabel htmlFor="search">Search: </StyledLabel>
      <StyledInput id="search" type="text" />
      <StyledButtonLarge type="submit">Submit</StyledButtonLarge>
    </StyledForm>
  );
};
export default SearchForm;
