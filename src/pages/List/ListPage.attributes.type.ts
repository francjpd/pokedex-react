import { PokedexListType } from "../../features/PokedexList/PokedexList.type"

export type ListCustomAttributes = {
    pokemonPaginatedList: PokedexListType;
    onPokemonClick?: (url: string) => void;
}