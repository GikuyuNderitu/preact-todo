import {h, Component} from 'preact';

import {card} from './styles.css';

class TodoCard extends Component {
    render(props) {
        return (
            <div class={card}>
                {props.children}
            </div>
        )
    }
}

export default TodoCard;