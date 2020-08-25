import React, { useState }from 'react';

import ProductsList from './components/ProductsList';

const GOODS_LIST = [
  {
    id: 1,
    isActive: false,
    isDisabled: false,
    data: {
      preTitle: 'Сказочное заморское яство',
      subTitle: 'Нямушка',
      smSubtitle: 'с фуа-гра',
      descr: '10 порций \n мышь в подарок',
      weightNum: 0.5,
      weightMeasure: 'кг',
      boxOutDef: 'Чего сидишь? Порадуй котэ, ',
      boxOutDefBuy: 'купи',
      boxOutDis: 'Печалька, с фуа-гра закончился',
      boxOutAct: 'Головы щучьи с чесноком да свежайшая семгушка.',
    }
  },
  {
    id: 2,
    isActive: false,
    isDisabled: false,
    data: {
      preTitle: 'Сказочное заморское яство',
      subTitle: 'Нямушка',
      smSubtitle: 'с рыбой',
      descr: '40 порций \n  2 мыши в подарок',
      weightNum: 2 ,
      weightMeasure: 'кг',
      boxOutDef: 'Чего сидишь? Порадуй котэ, ',
      boxOutDefBuy: 'купи',
      boxOutDis: 'Печалька, с фуа-гра закончился',
      boxOutAct: 'Головы щучьи с чесноком да свежайшая семгушка.',
    }
  },
  {
    id: 3,
    isActive: false,
    isDisabled: true,
    data: {
      preTitle: 'Сказочное заморское яство',
      subTitle: 'Нямушка',
      smSubtitle: 'с курой',
      descr: ' 100 порций \n  5 мышей в подарок \nзаказчик доволен',
      weightNum: 5 ,
      weightMeasure: 'кг',
      boxOutDef: 'Чего сидишь? Порадуй котэ, ',
      boxOutDefBuy: 'купи',
      boxOutDis: 'Печалька, с фуа-гра закончился',
      boxOutAct: 'Головы щучьи с чесноком да свежайшая семгушка.',
    }
  },
]

const App = () => {
  const [Goods, setGoods] = useState(GOODS_LIST);

  const changeActive = (id, isDisabled) => {
    // don't choising if disabled
    if(isDisabled) return;

    setGoods(Goods.map(item => {
      if(item.id === id ){
        return {...item, isActive: !item.isActive};
      }else{
        return item;
      }
    }))
  }

  return (
      <div className="main">
        <h1 className="mainTitle">Ты сегодня покормил кота?</h1>
        <ProductsList changeActive={changeActive} goodsList={Goods} />
      </div>
  );

}

export default App;
