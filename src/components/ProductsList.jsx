import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductsList = ({goodsList, changeActive}) => {

    
    return (
        <div className="cont">
            {goodsList.map(({data, isActive, id}) => 
                <ProductItem key={id} data={data} id={id} isActive={isActive} changeActive={changeActive} />
            )}
        </div>
    );
    
};

ProductsList.propTypes = {
    goodsList: PropTypes.array.isRequired,
};

export default ProductsList;