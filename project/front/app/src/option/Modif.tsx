import { MDBCard } from "mdb-react-ui-kit";
import React, { useState } from 'react';
import axios

function Modif () {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        // Effectuer l'appel API ici
        const apiUrl = `https://fr.wiktionary.org/w/api.php?action=opensearch&search=${newSearchTerm}`;
        fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const results = data[1] as string[];
            setSearchResults(results);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    };

    return (
        <MDBCard>
            <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Tapez un caractère..."
            />
            <ul>
                {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
                ))}
            </ul>
            </div>
        </MDBCard>
    );
}

export default Modif;