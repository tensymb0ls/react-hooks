import React from 'react';
import { useState, useEffect } from 'react';
import HeaderFunc from './HeaderFunc';

const Effect = () => {
    // useEffect hook
    const [state, setState] = useState(null);
    const [state2, setState2] = useState(null);

    useEffect(() => { // useEffect в качестве первого аргумента принимает колбэк-функцию(эффект), которая будет выполнена в момент монтирования текущего компонента в DOM-дерево 
        console.log('component did mount');
    }, [state]) // в качестве второго аргумента может передаваться массив зависимостей. в этом случае функция-эффект срабатывает в тот момент, когда одно из состояний зависимостей меняется.
    return (
        <div>
            <HeaderFunc count={state} setCount={setState} />
            <HeaderFunc count={state2} setCount={setState2} />
        </div>
    );
};

export default Effect;