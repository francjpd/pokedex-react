import { PokemonType } from "../PokemonDetail/PokemonDetail.type";
import { TYPES } from "./type-images";
import './PokemonTypes.css';

export default function PokemonTypes({ types }: { types: PokemonType[] }) {
    const typesContent = types.map((type) => (
        <div key={type.type.name} className={type.type.name + ' icon'} ><img src={TYPES.get(type.type.name)} width="40px" alt={type.type.name} /></div>
    ))
    return (
        <div className="pokedex-pokemon-types">
            {typesContent}
        </div>
    )
}