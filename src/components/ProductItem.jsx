import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({data}) => {

    const { 
        preTitle,
        mainTitle,
        smTitle,
        descr,
        weightNum,
        weightMeasure,
        slogan,
        sloganDif,
    } = data;


    return (
        <div className="box">
            <div className="">{preTitle}</div>
            <h2>{mainTitle}</h2>
            <div className="">{smTitle}</div>
            <div className="">{descr}</div>
            <div className="">{weightNum}</div>
            <div className="">{weightMeasure}</div>
            <div className="">{slogan}</div>
            <div className="">{sloganDif}</div>
        </div>
    );
}

ProductItem.propTypes = {
    data: PropTypes.shape({
        preTitle: PropTypes.string,
        mainTitle: PropTypes.string.isRequired,
        smTitle: PropTypes.string,
        descr: PropTypes.string,
        weightNum: PropTypes.number,
        weightMeasure: PropTypes.string,
        slogan: PropTypes.string,
        sloganDif: PropTypes.string
    })
}

ProductItem.defaultProps = {
    preTitle: '',
    smTitle: '',
    descr: '',
    weightNum: 0,
    weightMeasure: '',
    slogan: '',
    sloganDif: '',
}

export default ProductItem;