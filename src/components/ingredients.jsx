import React, {useState} from "react";
import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add( faPlus );

export default function Ingredients () {

    const [ingredientNum, setIngredientNum] = useState(2);

    const addIngredient = () => {
        let form = document.getElementById('form');
        setIngredientNum(ingredientNum + 1);

        form.innerHTML += 
            `
            <div className="wte-ingredient" style='display: flex; justify-content: space-around;'>
                        <div>
                            <p style='font-size: 20px;'>Ingredient ${ingredientNum}</p>
                            <input className="wte-ingredient-input" type="text" style='border: none; background-color: #efefef; padding: 4px 12px; font-size: 20px;'></input> 
                        </div>
                        <div>
                            <p style='font-size: 20px;'>Measurement</p>
                            <div className="wte-measurements" style='display:flex;'>
                                <input className='wte-measurment-input' type="text" style='border: none; background-color: #efefef; padding: 4px 12px; font-size: 20px;margin-right: 5px;'></input>
                                <select className="wte-measurement-select" style='border: none; border-bottom: 1px solid black;'>
                                    <option selected disabled hidden>Measurement</option>
                                    <option>lb</option>
                                    <option>oz</option>
                                    <option>item</option>
                                    <option>N/A</option>
                                </select>
                            </div>
                        </div>
                    </div>
            `
    }

    return (
        <div className="wte-ingredients-container">
            <h2>What's in my cabinet?</h2>
            <div className="wte-ingredients-header-form">
                <section className="wte-ingredients-form" id='form'>
                    <div className="wte-ingredient">
                        <div>
                            <p>Ingredient 1</p>
                            <input className="wte-ingredient-input" type="text"></input> 
                        </div>
                        <div>
                            <p>Measurement</p>
                            <div className="wte-measurements">
                                <input className='wte-measurment-input' type="text"></input>
                                <select className="wte-measurement-select">
                                    <option selected disabled hidden>Measurement</option>
                                    <option>lb</option>
                                    <option>oz</option>
                                    <option>item</option>
                                    <option>N/A</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="wte-button-container">
                    <button style={{marginRight: '20px'}} onClick={addIngredient}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                    <button>Start Cooking!</button>
                </div>
            </div>
        </div>
    )
}