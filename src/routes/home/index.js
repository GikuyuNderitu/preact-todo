import { h, Component } from 'preact';
import style from './style';

import List from './../../components/list';
import NewItem from './../../components/list/newItem';
import TodoCard from './../../components/todocard';

export default class Home extends Component {
	render({list, addItem, handleChange, deleteItem}) {
		return (
			<div class={style.home}>
				<h1>Add Some Todos!</h1>
				<TodoCard>
					<NewItem addItem={addItem}></NewItem>
					<List class={style.list} handleChange={handleChange} deleteItem={deleteItem} list={list} />
				</TodoCard>
			</div>
		);
	}
}
