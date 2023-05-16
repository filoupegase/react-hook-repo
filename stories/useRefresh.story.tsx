import * as React from 'react';
import { useEffect } from 'react';
import { useRefresh } from '../src';


const Demo = () => {
    const [refresh, count] = useRefresh();

    const handleClick = (): void => {
        refresh();
    };

    useEffect(() => {
        console.log('passes into the useEffect because the count value has changed');
    }, [count]);

    return (
        <div>
            <button onClick={ handleClick }>Click for update data</button>
        </div>
    );
};
