import React from "react";
import './item.css'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, age, status, id } = this.props.item;
        const { deleteItem } = this.props;
        return (
            <>
                <div className="item">
                    <p className="item_text">Name: {name}</p>
                    <p className="item_text">Age: {age}</p>
                    <p className="item_text">Status: {status}</p>
                    <span className="closeBtn" onClick={() => deleteItem(id)}>✕</span>
                </div>
            </>
        )
    }
}
export default Item;