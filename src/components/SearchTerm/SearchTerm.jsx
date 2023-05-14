import { StyledButtonSmall, StyledSpan } from "../../styles";

const SearchTerm = ({ searchTerm, onClick }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <StyledSpan width={"250px"} style={{ display: "inline-block", fontWeight: "bold" }}>
        Searchterm: {searchTerm}
      </StyledSpan>
      <StyledButtonSmall type="button" onClick={onClick}>
        Reset
      </StyledButtonSmall>
    </div>
  );
};
export default SearchTerm;
