import CreateItem from "./components/createItem";
import "./showItems.css";


function ShowItems({items}) {
    return (
        <div className="items">
            {items.map(item => {
               return  CreateItem(item);
            })}
        </div>
    );
}

export default ShowItems;