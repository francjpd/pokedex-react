import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { t } from "i18next";
import adaptDetails from "../../features/PokemonDetail/adaptDetails";
import PokemonStats from "../../features/PokemonStats/PokemonStats";
import PokemonTypes from "../../features/PokemonTypes/PokemonTypes";
import { STATS_IMAGES } from '../../features/PokemonDetail/stats-images';
import './DetailPage.css';
import './DetailPage.sm.css';
import './DetailPage.md.css';
import './DetailPage.lg.css';
import './DetailPage.xl.css';

export default function DetailPage() {

    const { state } = useLocation();

    const details = state.details.id ? adaptDetails(state.details) : state.details;

    const [pokemonImg, setPokemonImg] = useState(details.sprites.front)

    const heightMt = details.height / 10;
    const heightFeets = (heightMt * 3.28084).toFixed(3);

    const weightKg = details.weight / 10;
    const weightPounds = (weightKg * 2.20462).toFixed(2);

    useEffect(() => {
        setTimeout(() => {
            if (details.sprites.front === pokemonImg) {
                setPokemonImg(details.sprites.back)
            }
            if (details.sprites.back === pokemonImg) {
                setPokemonImg(details.sprites.front)
            }
        }, 3000)

    }, [pokemonImg]);

    return (
        <div className="pokedex-pokemon-detail">
            <div className="pokedex-pokemon-detail__card">
                <div className="pokedex-pokemon-detail__header">
                    <div className="pokedex-pokemon-detail__name">
                        {details.name}
                    </div>
                    <PokemonTypes types={details.types} />

                </div>
                <div className="pokedex-pokemon-detail__content">
                    <div className="pokedex-pokemon-detail__stats">
                        <div className="title">
                            <>{t('Stats')}</>
                        </div>
                        <div className="pokedex-pokemon-detail__stat"><img src={STATS_IMAGES.get('height')} alt={t('Height')} />{heightMt + t(' Mt - ') + heightFeets + t(' Ft')}</div>
                        <div className="pokedex-pokemon-detail__stat"><img src={STATS_IMAGES.get('weight')} alt={t('Weight')} />{weightKg + t(' Kg - ') + weightPounds + t(' Lb')}</div>
                        <div className="pokedex-pokemon-detail__stat"><img src={STATS_IMAGES.get('baseExperience')} alt={t('Base experience')} />{details.baseExperience}</div>
                        <PokemonStats stats={details.stats} />
                    </div>
                    <div className="pokedex-pokemon-detail__sprite">
                        <img src={pokemonImg} alt={details.name + t(' image')}></img>
                    </div>
                    <div className="pokedex-pokemon-detail__move">
                        <div className="title">
                            <>{t('Moves')}</>
                        </div>
                        <p> To to! </p>
                    </div>
                </div>
                <div className="footer">

                </div>
            </div>
        </div >
    )
}