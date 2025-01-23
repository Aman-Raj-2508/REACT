import './NewProduct.css'

import ProductForm from './ProductForm';

function NewProduct(props) {

    function onSaveProduct(proddata) {
        console.log("I am inside New Product.js");
        console.log(proddata);

        //calling the parent function
        props.newAddedProduct(proddata);
    }
    return (
        <div className='new-product'>
            <ProductForm onSaveProduct={onSaveProduct} />
        </div>
    )
}

export default NewProduct;