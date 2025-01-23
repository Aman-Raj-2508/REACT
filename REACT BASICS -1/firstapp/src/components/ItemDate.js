import './ItemDate.css';

function ItemDate(props) {
    const day = props.day;
    const month = props.month;
    const year = props.year;

    return (


        <div className="mfg-date">
            {/* It was all hard coded till now */}
            {/* <span>20</span>
            <span> June</span>
            <span> 1998</span> */}

            {/* Not hard coded now */}
            <span>{day}</span>
            <span> {month}</span>
            <span> {year}</span>
        </div>
    );
}
export default ItemDate;