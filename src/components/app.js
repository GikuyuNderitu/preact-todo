import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

const FILTERS = {
	checked(val) {
		return val.checked
	},
	unchecked(val) {
		return !val.checked
	}
}

const display_list = list => list.map((val, idx)=> {val.rootIdx = idx; return val}).filter(FILTERS.unchecked).concat(list.filter(FILTERS.checked))

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	constructor(props) {
		super()
		this.state = {
			list: [
				{checked: false, todo: 'Wash Cat'},
				{checked: false, todo: 'Have fun'},
				{checked: false, todo: 'Read books'},
				{checked: false, todo: 'Grade tests'},
				{checked: false, todo: 'Code like a Monkey'},
				{checked: false, todo: 'Binge Netflix'},
				{checked: false, todo: 'Clean Piano'}
			]
		}
	}

	addItem = todo => {
		const newList = this.state.list.slice();
		newList.push({checked: false, todo})
		this.setState({list: newList})
	}

	handleRoute = ({url}) => {
		this.currentUrl = url;
	};

	handleListChange = () => this.setState({})

	handleDelete = idx => {
		console.log(idx);
		let newList = this.state.list.slice();

		newList.splice(idx, 1);
		this.setState({list: newList})
	}

	render(props, state) {
		const list = display_list(state.list)
		console.log(list);
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home list={list} deleteItem={this.handleDelete} handleChange={this.handleListChange} addItem={this.addItem} path="/" />
					<Profile list={list} path="/profile/" user="me" />
					<Profile list={list} path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
