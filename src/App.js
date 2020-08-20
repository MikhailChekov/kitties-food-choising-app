import React from 'react';

import ProductsList from './components/ProductsList';

// import './styles/App.scss';

const DEFAULT_GOODS = [
  {
    id: 1,
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
  
  return (
      <ProductsList goodsList={DEFAULT_GOODS} />
  );

}

export default App;
