import { useState, useEffect } from 'react';
import Lista from '../assets/Lista.js';

function Main() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(Lista);

    useEffect(() => {
        const results = Lista.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.genre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
    }, [searchTerm]);

    return (
        <div className="main">
            <input
                type="text"
                placeholder="Search by title or genre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong> - {item.genre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Main;


