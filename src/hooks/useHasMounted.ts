import { useEffect, useState } from "react";


/**
 *
 * @name useHasMounted
 *
 * Ensures that the component has been mounted.
 *
 * @author filoupegase
 *
 */
const useHasMounted = (): boolean => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
};

export default useHasMounted;