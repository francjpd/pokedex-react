import { Stat } from "../PokemonDetail/PokemonDetail.type";
import { STATS_IMAGES } from "../PokemonDetail/stats-images";
import './PokemonStats.css';

export default function PokemonStats({ stats }: { stats: Stat[] }) {
    return (
        <div className='pokedex-pokemon-stats'>
            {stats.map(stat => (
                <div
                    className="pokedex-pokemon-stats__stat"
                    key={stat.stat.name}
                >
                    <img
                        src={STATS_IMAGES.get(stat.stat.name)}
                        alt={stat.stat.name}
                    />
                    {stat.baseStat}
                </div>
            ))}
        </div>

    )
}