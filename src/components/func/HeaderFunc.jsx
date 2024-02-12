import React from 'react';
import { useState } from 'react';

const HeaderFunc = (props) => {

    // useState hook
    const [state, setState] = useState('John',); // useState возвращает массив из 2 элементов: value и функция-обрабочик состояния. поэтому мы можем при инициализации переменной сразу деструктурировать массив, присвоив переменным значения элементов массива.
    // console.log(state, setState);

    // const [count, setCount] = useState(0)
    const handleClickEncrement = () => {
        setCount(count + 1)
    }
    const handleClickDecrement = () => {
        setCount(count - 1)
    }
    const { count, setCount } = props;

    return (
        <div className='HeaderFunc'>
            HeaderFunc
            <button onClick={handleClickEncrement}>+</button>
            <span> {count} </span>
            <button onClick={handleClickDecrement}>-</button>
        </div>
    );
};

export default HeaderFunc;