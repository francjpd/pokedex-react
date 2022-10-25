import { render, screen } from '@testing-library/react';
import { Stat } from '../PokemonDetail/PokemonDetail.type';
import PokemonStats from './PokemonStats';

jest.mock('react-router-dom')

describe('PokemonStats component test', () => {

    let component: any;
    it('should render the PokemonStats layout correctly', () => {
        const mock: Stat[] = [
            {
                baseStat: 1,
                stat: {
                    name: 'test',
                }
            }
        ]
        component = render(<PokemonStats stats={mock} />);

        expect(component).toMatchSnapshot();
    });

    it('should render the right stats with the images passed through it', () => {

        const mock: Stat[] = [
            {
                baseStat: 2
                ,
                stat: {
                    name: "hp"
                }
            },
            {
                baseStat: 2
                ,
                stat: {
                    name: "attack"
                }
            },
            {
                baseStat: 2
                ,
                stat: {
                    name: "defense"
                }
            },
            {
                baseStat: 2
                ,
                stat: {
                    name: "special-attack"
                }
            },
            {
                baseStat: 2
                ,
                stat: {
                    name: "special-defense"
                }
            },
            {
                baseStat: 2
                ,
                stat: {
                    name: "speed"
                }
            }
        ]

        component = render(<PokemonStats stats={mock} />);
    })

})
