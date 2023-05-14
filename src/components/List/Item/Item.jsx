import { StyledItem, StyledSpan, StyledButtonSmall } from "../../../styles";

const Item = ({ item, handleRemoveStory }) => {
  return (
    <StyledItem>
      <StyledSpan width="40%">
        <a href={item.url}>{item.title}</a>
      </StyledSpan>
      <StyledSpan width="30%">{item.author}</StyledSpan>
      <StyledSpan width="10%">{item.num_comments}</StyledSpan>
      <StyledSpan width="10%">{item.points}</StyledSpan>
      <StyledSpan width="10%">
        <StyledButtonSmall type="button" onClick={()=>handleRemoveStory(item.objectID)}>Dismiss</StyledButtonSmall>
      </StyledSpan>
    </StyledItem>
  );
};
export default Item;
