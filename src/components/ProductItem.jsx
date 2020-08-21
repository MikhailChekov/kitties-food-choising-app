import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({data, id, isActive, changeActive}) => {

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
        <div className={`box ${isActive ? 'active' : ''}`} onClick={()=>{ changeActive(id) }}>
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
    id: PropTypes.number,
    isActive: PropTypes.bool,
    changeActive: PropTypes.func,

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
    id: 0,
    isActive: false,
    preTitle: '',
    smTitle: '',
    descr: '',
    weightNum: 0,
    weightMeasure: '',
    slogan: '',
    sloganDif: '',
}

export default ProductItem;