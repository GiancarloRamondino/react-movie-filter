import { useState, useEffect } from 'react';
import Lista from '../assets/Lista.js';



function Main() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(Lista);

    useEffect(() => {
        const results = Lista.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
    }, [searchTerm]);

    return (
        <div className="main">
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
            {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
)
}


export default Main;