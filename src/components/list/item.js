import { h } from 'preact';
import {itemContainer, checkbox, message, deleteButton, buttonStyle, complete} from "./style.css"



const Item = ({item, toggleComplete, deleteItem, idx, readOnly}) => (
    item ? 
    <div className={!item.checked ? itemContainer : `${itemContainer} ${complete}`}>
        {readOnly ? null : <input class={checkbox} onclick={_ => {item.checked = !item.checked; toggleComplete()}} checked={item.checked} type="checkbox"/>}
        <span class={message}>{item.todo}</span>
        {readOnly ? null : <div class={deleteButton}>
            <button class={buttonStyle} onclick={() => deleteItem(item.rootIdx)}>X</button>
        </div>}
    </div> : null

)


export default Item;