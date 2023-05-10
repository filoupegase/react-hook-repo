import { useState, useCallback } from "react";


/**
 *
 * @name useRefresh
 *
 * To force a re-rendering of the component.
 *
 */
const useRefresh = (): [() => void, number] => {
    const [count, setCount] = useState<number>(0);

    const refresh = useCallback(() => {
        setCount((prevCount: number) => {
            return prevCount + 1;
        });
    }, []);

    return [refresh, count];
};

export default useRefresh;