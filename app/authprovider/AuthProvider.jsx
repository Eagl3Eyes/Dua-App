import { createContext, useEffect, useState } from "react";

export const FetchContext = createContext();


export const FetchProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [s_categories, setS_Categories] = useState([]);
    const [duas, setDuas] = useState([]);
    const [filteredS_Cat, setFilteredS_Cat] = useState([]);
    const [filteredDuas, setFilteredDuas] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(1)



    useEffect(() => {
        fetch("/api/category")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    useEffect(() => {
        fetch("/api/sub_category")
            .then((response) => response.json())
            .then((data) => setS_Categories(data))
            .catch((error) => console.error("Error fetching sub_categories:", error));
    }, []);

    useEffect(() => {
        fetch("/api/duas")
            .then((response) => response.json())
            .then((data) => setDuas(data))
            .catch((error) => console.error("Error fetching duas:", error));
    }, []);



    const authInfo = {
        categories,
        s_categories,
        duas,
        filteredS_Cat,
        setFilteredS_Cat,
        filteredDuas,
        setFilteredDuas,
        selectedCategory, setSelectedCategory
    };

    return <FetchContext.Provider value={authInfo}>
        {children}
    </FetchContext.Provider>;
};