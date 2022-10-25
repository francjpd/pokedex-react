import { Ability, PokemonDetail, PokemonType, Stat } from "./PokemonDetail.type"

/**
 * Pattern adapter used to modify the incoming data from the backend to our app's model
 */
export default function adaptDetails({
    abilities,
    base_experience,
    forms,
    height,
    id,
    moves,
    name,
    order,
    sprites,
    stats,
    types,
    weight
}: any) {

    let abilitiesAdapted: Ability[] = []
    if (abilities) {
        abilitiesAdapted = abilities.map((abilityBackend: any) => ({
            ability: abilityBackend.ability,
            isHidden: abilityBackend.is_hidden,
            slot: abilityBackend.slot
        }))
    }

    const statsAdapted: Stat[] = stats.map((dirtyStat: any) => {
        const { base_stat, effort, stat } = dirtyStat;
        if (base_stat) {
            return {
                baseStat: base_stat,
                effort,
                stat
            }
        }
        return dirtyStat;
    });

    const sortedTypes = (types as PokemonType[]).sort((a, b) => a.slot - b.slot)

    const hasAnimatedSprite = (property: string) => {
        return sprites &&
            sprites.versions['generation-v'] &&
            sprites.versions['generation-v']['black-white'] &&
            sprites.versions['generation-v']['black-white'].animated[property];
    }

    const frontSprite = hasAnimatedSprite('front_default');
    const backSprite = hasAnimatedSprite('back_default');

    const front = frontSprite || sprites.front_default;
    const back = backSprite || sprites.back_default;

    const pokemonDetail: PokemonDetail = {
        abilities: abilitiesAdapted,
        baseExperience: base_experience,
        forms,
        height,
        id,
        moves,
        name,
        order,
        sprites: {
            front,
            back
        },
        stats: statsAdapted,
        types: sortedTypes,
        weight,
    };


    return pokemonDetail
}