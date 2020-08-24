import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({data, id, isActive, isDisabled, changeActive}) => {

    const { 
        preTitle,
        subTitle,
        smSubtitle,
        descr,
        weightNum,
        weightMeasure,
        boxOutDef,
        boxOutDefBuy,
        boxOutDis,
        boxOutAct,
    } = data;


    return (
        <div className="item">
            <div className={`box ${isActive ? 'box-border__act' : 'box-border__def'}`} onClick={()=>{ changeActive(id, isDisabled) }}>
                <div className="box-in__up">
                    <div className="box-pre__title">{preTitle}</div>
                    <h2 className="box-sub__title">{subTitle}</h2>
                    <div className="box-sm__title">{smSubtitle}</div>
                    <div className="box-descr">{descr}</div>
                </div>
                <div className="box-in__down">
                    <div className="box-image"></div>
                    <div className={`box-circle ${isActive ? 'box-circle__act' : 'box-circle__def'}`} onClick={()=>{ changeActive(id, isDisabled) }}>
                        <div className="box-weigth__number">{weightNum}</div>
                        <div className="box-weigth__measure">{weightMeasure}</div>
                    </div>
                </div>
            </div>
            {isDisabled ? <div className="box-out box-out__dis">{boxOutDis}</div> : 
            isActive ? <div className="box-out box-out__act">{boxOutAct}</div> :
    <div className="box-out box-out__def" onClick={()=>{ changeActive(id, isDisabled)}}>{boxOutDef}<span>{boxOutDefBuy}</span></div>}
        </div>
    );
}

ProductItem.propTypes = {
    id: PropTypes.number,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    changeActive: PropTypes.func,

    data: PropTypes.shape({
        preTitle: PropTypes.string,
        subTitle: PropTypes.string.isRequired,
        smSubtitle: PropTypes.string,
        descr: PropTypes.string,
        weightNum: PropTypes.number,
        weightMeasure: PropTypes.string,
        boxOutDef: PropTypes.string,
        boxOutDefBuy: PropTypes.string,
        boxOutDis: PropTypes.string,
        boxOutAct: PropTypes.string
    })
}

ProductItem.defaultProps = {
    id: 0,
    isActive: false,
    isDisabled: false,
    changeActive: () => {},
    preTitle: '',
    smSubtitle: '',
    descr: '',
    weightNum: 0,
    weightMeasure: '',
    boxOutDef: '',
    boxOutDefBuy: '',
    boxOutDis: '',
    boxOutAct: '',
}

export default ProductItem;