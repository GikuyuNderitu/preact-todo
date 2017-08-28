import {h, Component} from 'preact';

import {newContainer} from './style.css'

// import '../../elements/paper-textarea';



export default class NewItem extends Component {
    state = {
        value: ''
    }

    handleKeypress = ({key, ctrlKey, target}) => {
        if(ctrlKey && key === "Enter") this.handleSubmit();
        else this.setState({value: target.value});
    }

    handleSubmit = _ => {
        const {value} = this.state
        
        if(value.trim() === '') return;

        this.props.addItem(value);
        this.setState({value: ''.trim()})
    }

    render({addItem}, {value}) {
        return (
            <div className={newContainer}>
                <textarea onKeyUp={this.handleKeypress} value={value} placeholder="Add a todo!" rows="3"></textarea>
                <button onclick={this.handleSubmit}>+</button>
            </div>
        )
    }
}