import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(
                        itemName,
                        JSON.stringify(initialValue)
                    );
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                    setLoading(false);
                }
            } catch (error) {
                setError(error.message);
            }
        }, 2000);
    });

    const saveItem = (newItem) => {
        try {
            setItem(newItem);
            const stringItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringItem);
        } catch (error) {
            setError(error.message);
        }
    };
    return { item, saveItem, loading, error };
}

export { useLocalStorage };
