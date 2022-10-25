import { NameUrl } from "../common/NameUrl.type"

export type Ability = {
    /**
     * The ability the Pokémon may have
     */
    ability: NameUrl

    /**
     * Whether or not this is a hidden ability
     */
    isHidden: boolean, // patternAdapter is_hidden

    /**
     * The slot this ability occupies in this Pokémon specie
     */
    slot: number
}

export type Stat = {
    /**
     * 	The base value of the stat
     */
    baseStat: number; // patternAdapter base_stat

    /**
     * The effort points (EV) the Pokémon has in the stat
     */
    effort?: number;

    /**
     * The stat the Pokémon has
     */
    stat: NameUrl | { name: string },
}

export type PokemonType = {
    /**
     * The order the Pokémon's types are listed in
     */
    slot: number;

    /**
     * The type the referenced Pokémon has
     */
    type: NameUrl
}

export type PokemonDetail = {
    /**
     * A list of abilities that were introduced in this generation.
     */
    abilities?: Ability[]

    /**
     * The base experience gained for defeating this Pokémon.
     */
    baseExperience: number // patternAdapter base_experience

    /**
     * A list of forms this Pokémon can take on.
     */
    forms?: NameUrl[]

    /**
     * The height of this Pokémon in decimetres.
     */
    height: number;

    /**
     * The identifier for this resource.
     */
    id?: number;

    /**
     * A list of moves along with learn methods and level details pertaining to specific version groups.
     */
    moves?: any[] // TODO typing , is any

    /**
     * Pokemon's name
     */
    name: string;

    /**
     * Order for sorting. Almost national order, except families are grouped together.
     */
    order?: number;

    /**
     * Images used to render the pokemon form at the Detail page.
     */
    sprites?: {
        front: string,
        back: string,
    }

    /**
     * A list of details showing types this Pokémon has.
     */
    types: PokemonType[]

    /**
     * A list of base stat values for this Pokémon
     */
    stats: Stat[] // TODO typing , is any

    /**
     * The weight of this Pokémon in hectograms.
     */
    weight: number;
}