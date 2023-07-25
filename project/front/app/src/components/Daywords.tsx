import Oneword, { Word } from "./Oneword";




const Daywords = () => {

    const listWord: Word[] = [

        
        {
            name:'Bonjour', etymologie:'comment ça va', definition:'ça va et toi', otherwords:'bah bien', type:4
        },
        {
            name:'Aurevoir', etymologie:'comment ça va', definition:'ça va et toi', otherwords:'bah bien', type:4
        },
        {
            name:'Me revoilà', etymologie:'comment ça va', definition:'ça va et toi', otherwords:'bah bien', type:4
        }
        ]
    
    return (Oneword(listWord))
}
export default Daywords;