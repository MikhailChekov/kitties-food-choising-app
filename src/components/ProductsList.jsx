import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductsList = ({goodsList, changeActive}) => {

    
    return (
        <div className="container">
            {goodsList.map(({data, isActive, isDisabled, id}) => 
                <ProductItem key={id} data={data} id={id} isActive={isActive} isDisabled={isDisabled} changeActive={changeActive} />
            )}
        </div>
    );
};

ProductsList.propTypes = {
    goodsList: PropTypes.array.isRequired,
};


export default ProductsList;