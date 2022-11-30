import React from 'react';

const Table = () => {
  return (
  <section className='table'>
    
    <div className='table_col'>
        <div className='table_col-name'>Параметры и требования</div>
        <div className='table_col-info'>Наличие</div>
        <div className='table_col-info'>Срок изготовления</div>
        <div className='table_col-info'>Гарантийные обязательства</div>
        <div className='table_col-info'>Условия оплаты</div>
        <div className='table_col-info'>Стоимость</div>
    </div>

    <div className='table_col'>
        <div className='table_col-name'>Участник №1</div>
        <div className='table_col-info'>-</div>
        <div className='table_col-info'>80</div>
        <div className='table_col-info'>24</div>
        <div className='table_col-info'>30%</div>
        <div className='table_col-info'>3700000 руб.</div>
    </div>

    <div className='table_col'>
        <div className='table_col-name'>Участник №2</div>
        <div className='table_col-info'>-</div>
        <div className='table_col-info'>80</div>
        <div className='table_col-info'>24</div>
        <div className='table_col-info'>30%</div>
        <div className='table_col-info'>3700000 руб.</div>
    </div>

    <div className='table_col'>
        <div className='table_col-name'>Участник №3</div>
        <div className='table_col-info'>-</div>
        <div className='table_col-info'>80</div>
        <div className='table_col-info'>24</div>
        <div className='table_col-info'>30%</div>
        <div className='table_col-info'>3700000 руб.</div>
    </div>

    <div className='table_col'>
        <div className='table_col-name'>Участник №4</div>
        <div className='table_col-info'>-</div>
        <div className='table_col-info'>80</div>
        <div className='table_col-info'>24</div>
        <div className='table_col-info'>30%</div>
        <div className='table_col-info'>3700000 руб.</div>
    </div>

  </section>
  );
}

export default Table;
