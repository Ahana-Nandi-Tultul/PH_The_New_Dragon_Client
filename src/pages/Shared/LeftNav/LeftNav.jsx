import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://ph-the-news-dragon-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>All Caterogy</h2>
            <div className='p-4 my-2'>
                {
                    categories.map(category => <p
                    key={category.id}
                    >
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-dark'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;