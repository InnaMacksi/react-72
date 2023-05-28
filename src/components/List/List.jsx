import Item from "./Item/Item";
import { memo } from "react";

const List = ({ stories, handleRemoveStory }) => {
    // console.log('list')
    return (
        <ul>
            {stories.map((item) => <Item item={ item } key={item.objectID} handleRemoveStory={handleRemoveStory}/>)}
        </ul>)
}

export default memo(List);