import { PokemonDetail, PokemonType } from "../PokemonDetail/PokemonDetail.type";
import { Stat } from '../PokemonDetail/PokemonDetail.type';
import black from '../../assets/black.png';

const customPokemons: Map<string, PokemonDetail> =
    localStorage.getItem('custom-pokemons') ?
        new Map(JSON.parse(localStorage.getItem('custom-pokemons') as any)) :
        new Map();

/**
 * obtain the data of certain pokemon
 * @returns the pokemon names
 */
export function getPokemon(name: string) {
    return customPokemons.get(name);
}

/**
 * retrieves all pokemons
 */

export function listPokemons() {
    return Array.from(customPokemons.values());
}

/**
 * Saves desired pokemon into the local storage.
 * 
 * @param name Pokemons name
 * @param data Pokemons data
 * @returns true if it succesfully adds the pokemon to the map, false otherwise
 */
export function setPokemon(name: string, data: any) {
    if (customPokemons.get(name)) {
        console.error('Pokemon already exist')
        return false;
    }

    const stats: Stat[] = [
        'hp',
        'attack',
        'defense',
        'special-attack',
        'special-defense',
        'speed'
    ].reduce((stats, statName: string) => {
        const stat: Stat = {
            baseStat: data[statName],
            stat: { name: statName }
        }
        stats.push(stat)
        return stats;
    }, new Array<Stat>)


    const types: PokemonType[] = data.types.map((typeValue: string, index: number) => {
        return {
            slot: index,
            type: { name: typeValue }
        }
    });

    const pokemon: PokemonDetail = {
        name,
        baseExperience: (data.baseExperience as number),
        height: (data.height as number),
        stats,
        weight: (data.weight as number),
        types,
        sprites: {
            front: black,
            back: black
        }
    }

    customPokemons.set(name, pokemon)
    localStorage.setItem("custom-pokemons", JSON.stringify(Array.from(customPokemons.entries())));

    return true;

}


