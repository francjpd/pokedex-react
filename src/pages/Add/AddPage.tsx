import { useForm } from 'react-hook-form';
import { t } from "i18next";
import './AddPage.css';
import './AddPage.sm.css';
import './AddPage.md.css';
import './AddPage.lg.css';
import './AddPage.xl.css';
import { setPokemon } from '../../features/common/local-storage';

export default function AddPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        setPokemon(data.name, data);
    };

    return (
        <div className="pokedex-pokemon-add">
            <div className="pokedex-pokemon-add__card">
                <div className="pokedex-pokemon-add__header">
                    <div className="pokedex-pokemon-add__name">
                        <>
                            {t('Add a pokemon')}
                        </>
                    </div>
                </div>
                <div className="pokedex-pokemon-add__content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" arial-label="name" placeholder="name" {...register("name", { required: true })} />
                        <input type="number" arial-label="height" placeholder="height" {...register("height", { required: true, max: 9999, min: 0 })} />
                        <input type="number" arial-label="weight" placeholder="weight" {...register("weight", { required: true, max: 9999, min: 0 })} />
                        <input type="number" arial-label="baseExperience" placeholder="baseExperience" {...register("baseExperience", { required: true, max: 9999, min: 0 })} />
                        <input type="number" arial-label="hp" placeholder="hp" {...register("hp", { required: true, max: 9999, min: 0 })} />
                        <input type="number" arial-label="attack" placeholder="attack" {...register("attack", { required: true, max: 9999, min: 0 })} />
                        <input type="number" arial-label="defense" placeholder="defense" {...register("defense", { required: true, max: 9999, min: 0 })} />
                        <input type="number" aria-label="special-attack" placeholder="special-attack" {...register("special-attack", { required: true, max: 9999, min: 0 })} />
                        <input type="number" aria-label="special-defense" placeholder="special-defense" {...register("special-defense", { required: true, max: 9999, min: 0 })} />
                        <input type="number" arial-label="speed" placeholder="speed" {...register("speed", { required: true, max: 9999, min: 0 })} />
                        <div className='pokedex-pokemon-add__type'>
                            <label>Choose types</label>
                            <select {...register("types", { required: true })} multiple>
                                <option value="bug">bug</option>
                                <option value="dark">dark</option>
                                <option value="dragon">dragon</option>
                                <option value="electric">electric</option>
                                <option value="fire">fire</option>
                                <option value="fairy">fairy</option>
                                <option value="fighting">fighting</option>
                                <option value="flying">flying</option>
                                <option value="ghost">ghost</option>
                                <option value="grass">grass</option>
                                <option value="ground">ground</option>
                                <option value="ice">ice</option>
                                <option value="normal">normal</option>
                                <option value="poison">poison</option>
                                <option value="psychic">psychic</option>
                                <option value="rock">rock</option>
                                <option value="steel">steel</option>
                                <option value="water">water</option>
                            </select>
                        </div>
                        <div className='pokedex-pokemon-add__submit'><input type="submit" aria-label="submit" /></div>
                    </form>
                </div>
            </div>
        </div >
    )
}