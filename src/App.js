import React, { useState }from 'react';

import ProductsList from './components/ProductsList';

const GOODS_LIST = [
  {
    id: 1,
    isActive: false,
    data: {
      preTitle: 'Сказочное заморское явство',
      mainTitle: 'Нямушка',
      smTitle: 'с фуа-гра',
      descr: '10 порций мышь в подарок',
      weightNum: 0.5,
      weightMeasure: 'кг',
      slogan: 'Чего сидишь? Порадуй котэ, ',
      sloganDif: 'купи.',
    }
  },
  {
    id: 2,
    isActive: false,
    data: {
      preTitle: 'Сказочное заморское явство',
      mainTitle: 'Нямушка',
      smTitle: 'с рыбой',
      descr: '40 порций 2 мыши в подарок',
      weightNum: 2 ,
      weightMeasure: 'кг',
      slogan: 'Головы щучьи с чесноком да свежайшая семгушка.',
    }
  },
  {
    id: 3,
    isActive: false,
    data: {
      preTitle: 'Сказочное заморское явство',
      mainTitle: 'Нямушка',
      smTitle: 'с курой',
      descr: '100 порций 5 мышей в подарок заказчик доволен',
      weightNum: 5 ,
      weightMeasure: 'кг',
      // check for change text
      slogan: 'Печалька, с курой закончился',
    }
  },
]

const App = () => {
  const [Goods, setGoods] = useState(GOODS_LIST);

  const changeActive = (id) => {
    setGoods(Goods.map(item => {
      if(item.id === id ){
        return {...item, isActive: !item.isActive};
      }else{
        return item;
      }
    }))
  }

  return (
      <>
        <h1 className="title">Ты сегодня кормил кота?</h1>
        <ProductsList changeActive={changeActive} goodsList={Goods} />
      </>
  );

}

export default App;
