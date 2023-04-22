import { useEffect, useState } from "react";

export default function useFilter({
    items,
    keywords,
}) {
    const [originItems, setOriginItems] = useState(items);
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        setOriginItems(items);
        setFilteredItems(items);
    }, [items]);

    const handleChange = (e) => {
        const { value } = e.target;

        if (value) {
            const regExp = new RegExp(value, 'i');

            const filteredItems = items.filter((item) => {
                return keywords.some((keyword) => {
                    return regExp.test(item[keyword]);
                })
            })
            setFilteredItems(filteredItems);
        }
        else {
            setFilteredItems(originItems);
        }
    }

    return {
        filteredItems,
        handleChange
    };
}