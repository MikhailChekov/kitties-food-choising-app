import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductsList = ({goodsList}) => {

    
    return (
        <div className="cont">
            {goodsList.map(({id, data}) => 
                <ProductItem key={id} data={data} />
            )}
        </div>
    );
    
};

ProductsList.propTypes = {
    goodsList: PropTypes.array.isRequired,
};
  
ProductsList.defaultProps = {
    goodsList: [], 
};



export default ProductsList;