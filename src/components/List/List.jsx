import Item from "./Item/Item";

const List = ({ stories, handleRemoveStory }) => {
    return (
        <ul>
            {stories.map((item) => <Item item={ item } key={item.objectID} handleRemoveStory={handleRemoveStory}/>)}
        </ul>)
}

export default List;