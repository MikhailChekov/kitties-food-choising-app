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
        <div className="container__item">
            <div 
                onClick={()=>{ changeActive(id, isDisabled) }}
                className={`box container__box ${isDisabled ? 
                            'box_theme_disabled' : isActive ? 
                            'box_theme_active' : 'box_theme_default'}
                          `} 
            >
                <div className="box__text-cont">
                    <div className="box__pre-title">{preTitle}</div>
                    <h2 className="box__sub-title">{subTitle}</h2>
                    <div className="box__sm-title">{smSubtitle}</div>
                    <div className="box__descr">{descr}</div>
                </div>
                <div className="box__img-cont">
                    <div className={`box__circle ${isDisabled ? 'box__circle_theme_disabled' :
                                                     isActive ? 'box__circle_theme_active' : 
                                                                'box__circle_theme_default'}
                                    `}>
                    <span className="box__weight-number">{weightNum}</span>
                    <span className="box__weight-measure">{weightMeasure}</span>
                    </div>
                    <div className="box__image"></div>
                </div>
            </div>
            {/* Outer-text */}
            {isDisabled ? <div className="outer-text container__outer-text outer-text_theme_disabled">{boxOutDis}</div> : 
               isActive ? <div className="outer-text container__outer-text outer-text_theme_active">{boxOutAct}</div> :
                          <div className="outer-text container__outer-text outer-text_theme_default">
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