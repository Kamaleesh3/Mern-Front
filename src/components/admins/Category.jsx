// CategoryList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/category')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h2>Categories</h2>
            <h1>dummy</h1>
            <ul>
                {categories.map(category => (
                    <li key={category._id}>
                        {category.name}
                        <ul>
                            {category.subcategories.map(subcategory => (
                                <li key={subcategory._id}>{subcategory.name}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
