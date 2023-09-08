import { MDBCard } from "mdb-react-ui-kit";
import React, { useState } from 'react';

function removeHtmlTags(input: string): string {
  const regex = /<[^>]*>/g;
  return input.replace(regex, '');
}

function decodeHTMLEntities(input:string): string | null {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

interface IDefinition {
  definition: string[];
  nature: string;
}

function Modif () {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [definitions, setDefinitions] = useState<IDefinition[]>([]);
  const [error, setError] = useState<boolean>(false);


    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    const fetchData = async () => {
      const data = { motWiki: searchTerm };
      console.log(searchTerm);
      if (searchTerm.length > 1) {

        try {
          const response = await fetch('http://localhost:8081/app/api_wiki.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              // Autres en-têtes nécessaires (si applicables)
            },
            body: 'motWiki=' + searchTerm,
          });
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const jsonData = await response.json();
          console.log(jsonData);
          if (jsonData.error === '') {
            setError(false);
          }
          else {
            setError(true);
          }
          const natureDef = jsonData.natureDef;
          const nature = jsonData.nature;
          
          const extractedDefinitions :IDefinition[] = [];
          for (let index = 0; index < natureDef.length; index++) {
            (natureDef[index]).forEach((definitionObj:{ [key: string]: string }) => {
                let result:IDefinition = {definition: [], nature: ''};
                result.nature = nature[index];
                console.log("objet def", definitionObj)
                const definition:string[] = [];
                for (const key in definitionObj){
                    const temp = decodeHTMLEntities(removeHtmlTags(definitionObj[key]));
                    if (temp)
                    definition.push(temp);
                };
                result.definition = definition;
                extractedDefinitions.push(result);
                console.log(result);
            });
          }
          setDefinitions(extractedDefinitions);
          
          // Met à jour l'état avec les définitions extraites
        } catch (error) {
          console.error('Error fetching data:', error);
          console.log(definitions)
        }
      }
      else {
        setError(true);
      }
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
            {error && <div>Mot inconnu</div>}
            {!error &&
            
            <ul>
                {definitions.map((result, index) => (<>
                   {result.definition.map((result2, index2) => (
                     <li key={index2}> {result.nature}: {result2} </li>
                     ))}
                     </>
                  ))}
                
            </ul>
                }
            <button onClick={fetchData}>Fetch Data</button>
            </div>
        </MDBCard>
    );
}

export default Modif;