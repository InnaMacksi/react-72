import Item from "./Item/Item";

const List = ({ stories }) => {
    return (
        <ul>
            {stories.map((item) => <Item item={ item } key={item.objectID}/>)}
        </ul>)
}

export default List;