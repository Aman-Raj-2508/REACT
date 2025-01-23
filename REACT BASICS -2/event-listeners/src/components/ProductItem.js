// import React from 'react';
// import ProductDate from './ProductDate';
// import Card from './Card';
// import './ProductItem.css';

// const ProductItem = (props) => {

//     let title = props.title;
//     const clickHandler = () => {
//         // It does not changes the to poopcorn when clicked on add to cart becasue our react renders the whole DOM at once so updating like this is not possible, SO we use STATES
//         title = "popcorn";
//         console.log("Button Clicked");
//     };

//     return (
//         <Card className='product-item'>
//             <ProductDate date={props.date} />
//             <div className='product-item__description'>
//                 <h2>{title}</h2>
//             </div>
//             <button onClick={clickHandler}>Add to Cart</button>
//         </Card>
//     );
// };

// export default ProductItem;

//<-----------------So we will use states ------------------------->
import React, { useState } from 'react';
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        // title = "popcorn";
        setTitle("Popcorn");
        console.log("Button Clicked");
    };

    return (
        <Card className='product-item'>
            <ProductDate date={props.date} />
            <div className='product-item__description'>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Card>
    );
};

export default ProductItem;