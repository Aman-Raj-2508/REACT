import { useState } from 'react';
import './ProductForm';

function ProductForm(props) {


    // handling multiple state with useState one by one

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        // console.log(event.target.value);
        setTitle(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate
        };
        // console.log(productData);
        // To call the fucntion of parent class
        props.onSaveProduct(productData);
        setTitle('');
        setDate('');
    }
    return (
        < form onSubmit={submitHandler}>
            <div className='new-product_controls'>

                <div className='new-product_title'>
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
                </div>

                <div className='new-product_date'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2023-12-12' value={newDate} onChange={dateChangeHandler}></input>
                </div>

                <div className='new-product_button'>
                    <button type='submit'>Add Product</button>
                </div>
            </div>

        </form >
    )
}

export default ProductForm;