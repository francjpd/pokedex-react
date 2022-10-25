import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useLoaderData, useNavigate } from "react-router-dom";
import { getPokemon, listPokemons } from "../../features/common/local-storage";
import { NameUrl } from "../../features/common/NameUrl.type";
import { PokedexListType } from "../../features/PokedexList/PokedexList.type";
import PokedexList from '../../features/PokedexList/PokedexList';
import './ListPage.css';
import './ListPage.sm.css';
import './ListPage.md.css';
import './ListPage.lg.css';
import './ListPage.xl.css';

export function ListPage() {

    const list: PokedexListType = useLoaderData() as PokedexListType

    const [{ results, next, previous, count }, setPokemonList] = useState(list)

    const { t } = useTranslation()
    const navigate = useNavigate();

    const onPokemonClick = async ({ url, name }: NameUrl) => {
        if (url) {
            const response = await (await fetch((url as string))).json();
            navigate('/detail', { state: { details: response } })
        } else {
            navigate('/detail', { state: { details: getPokemon(name) } });
        }

    }

    const onButtonClick = async (url: string) => {
        const response = await (await fetch(url)).json();
        setPokemonList(response);
    }

    const buttonContent = [
        [previous, t('Previous')],
        [next, t('Next')]
    ].map(([url, label]) => {
        if (url && label) {
            return (
                <button className='pokedex-buttons' key={url} value={url} onClick={() => onButtonClick(url)}> {label}</button>
            )
        }
    })
    const customPokemons = listPokemons();

    return (
        <div className="pokedex-paginated-list">
            <div className="pokedex-paginated-list__card" >
                <div className='pokedex-paginated-list__header'>
                    {t('Official pokemons: ') + count}
                </div>
                <div className='pokedex-paginated-list__list'>
                    <PokedexList elements={results} onPokemonClick={onPokemonClick} />
                </div>
                {customPokemons.length > 0 &&
                    <>
                        <div className='pokedex-paginated-list__header'>
                            {t('Custom pokemons: ') + customPokemons.length}
                        </div>
                        <div className='pokedex-paginated-list__list'>
                            <PokedexList elements={customPokemons} onPokemonClick={onPokemonClick} />
                        </div>
                        <div className="pokedex-paginated-list__buttons">
                            {buttonContent}
                        </div>
                    </>
                }

            </div>
        </div>
    )
}
