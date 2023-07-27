import { useState } from "react";
import Oneword, { Word } from "./Oneword";




const Daywords = () => {

    const [listWord] = useState<Word[]>([
        {
            name:'Tophet', etymologie:'vient de l\'hébreu <tōfet> qui désigne un lieu prés de Jérusalem, où, selon la bible, les cananéens sacrifiaient leurs enfants', definition:'désigne la partie centrale des sanctuaire dans les religions phéniciennes, dans lequel il y a des urnes contenant les cendres des enfants et animaux sacrifiés, et où se trouvent de nombreuses stèles votives', otherwords:'bah bien', type:4
        },
        {
            name:'Échanson', etymologie:'vient du vieux allemand <skenkan> qui veut dire "verser à boire"', definition:'officier chargé de servir à boire à une personne de haut rang, personne de confiance, en raison de la crainte de complot, Hébé était la déesse de la jeunesse, et l\'échanson des dieux dans la mythologie grecque, Béhémoth est l\'échanson des enfers, l\'échanson avait aussi un blason au Moyen-Âge', otherwords:' le bouteillers est le nom de l\'échanson au Moyen-Âge', type:4
        },
        {
            name:'Me revoilà', etymologie:'comment ça va', definition:'ça va et toi', otherwords:'bah bien', type:4
        },
        {
            name:'Me revoilo', etymologie:'comment ça va', definition:'ça va et toi', otherwords:'bah bien', type:4
        },
        {
            name:'Me revoilu', etymologie:'comment ça va', definition:'ça va et toi', otherwords:'bah bien', type:4
        }
])
    
    return (Oneword(listWord))
}
export default Daywords;