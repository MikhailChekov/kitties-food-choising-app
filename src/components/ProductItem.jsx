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
            <div className={`box ${isDisabled ? 'box-dis' : isActive ? 'box-act' : 'box-def'}`}  onClick={()=>{ changeActive(id, isDisabled) }}>
                <div className="box-text">
                    <div className="box-pre__title">{preTitle}</div>
                    <h2 className="box-sub__title">{subTitle}</h2>
                    <div className="box-sm__title">{smSubtitle}</div>
                    <div className="box-descr">{descr}</div>
                </div>
                <div className="box-img">
                    <div className={`box-circle ${isDisabled ?'box-circle__dis' : isActive ? 'box-circle__act' : 'box-circle__def'}`}>
                    <span className="box-weight_number">{weightNum}</span>
                    <span className="box-weight__measure">{weightMeasure}</span>
                    </div>
                    <div className="box-image"></div>
                </div>
            </div>
            {isDisabled ? <div className="box-out box-out__dis">{boxOutDis}</div> : 
               isActive ? <div className="box-out box-out__act">{boxOutAct}</div> :
                          <div className="box-out box-out__def">
                            {boxOutDef}<span onClick={()=>{changeActive(id, isDisabled)}}>{boxOutDefBuy}</span>
                          </div>
            }
        </div>
    );
}

ProductItem.propTypes = {
    id: PropTypes.number,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    changeActive: PropTypes.func,
    data: PropTypes.objectOf(PropTypes.string),
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