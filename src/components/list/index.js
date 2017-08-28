import {h, Component} from 'preact';

import Item from './item';

import {container} from './style.css';


export default class List extends Component {
    constructor(props) {
        super();
    }

    handleCompletionToggle = (e, other) => {
        console.log(e);
        console.log(other);
    }

    handleDelete = () => {

    }

    render(props, state) {
        const {list} = props
        // console.log(list);
        return (
            <div className={container}>
                {list.map((val, idx) => (
                    <Item 
                        toggleComplete={props.handleChange}
                        deleteItem={props.deleteItem}
                        item={val}
                        readOnly={props.readOnly}
                        idx={idx} />
                ))}
            </div>
        )
    }
}