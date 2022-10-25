import { NameUrl } from "../common/NameUrl.type";
import './PokedexList.css';
import './PokedexList.md.css';
import './PokedexList.sm.css';

export default function PokedexList({ elements, onPokemonClick }: { elements: NameUrl[], onPokemonClick: (nameAndUrl: NameUrl) => void }) {
    const elementsContent = elements.map(
        (nameAndUrl: NameUrl) => (
            <div className="pokedex-list__element" key={nameAndUrl.name} onClick={() => onPokemonClick(nameAndUrl)} >
                {nameAndUrl.name}
            </div>
        )
    )
    return (
        <div className="pokedex-list">
            {elementsContent}
        </div>
    )
}