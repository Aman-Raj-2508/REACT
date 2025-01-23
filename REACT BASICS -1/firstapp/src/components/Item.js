import './Item.css'
//Component created
function Item(props) {
    let itemName = props.name;
    return (
        <div>
            <p className="nirma">{itemName}</p>
            {props.children}
        </div>

    )
}

export default Item;