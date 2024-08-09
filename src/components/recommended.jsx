import React from "react";
import Food from '../food.jpeg';

export default function Recommended () {

    /*const url = 'https://api.spoonacular.com/recipes/random?apiKey=a3670b26718c422c82c57389e3ab404b&instructionsRequired=True&number=3';

    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    var recipesObj = JSON.parse(request.responseText);

    console.log('hello')

    fetch(url, {
        method: 'GET'
    }).then((response) => response.json());*/


    return (
        <section className="wte-recommended-meals-container">
            <h2>Recommended Meals of the Day</h2>

            <div className="wte-recipe-card-container">
                <div className='wte-recipe-card' style={{backgroundImage: `url(${Food})`}}>
                    <div className="wte-recipe-info">
                        <h3>Burger</h3>
                        <div className="wte-recipe-tags">
                            <p>Vegetarian</p>
                            <p>Simple</p>
                            <p>Dinner</p>
                        </div>
                    </div>
                </div>

                <div className='wte-recipe-card' style={{backgroundImage: `url(${Food})`}}>
                    <div className="wte-recipe-info">
                        <h3>Burger</h3>
                        <div className="wte-recipe-tags">
                            <p>Breakfast</p>
                            <p>Sweet</p>
                        </div>
                    </div>
                </div>

                <div className='wte-recipe-card' style={{backgroundImage: `url(${Food})`}}>
                    <div className="wte-recipe-info">
                        <h3>Burger</h3>
                        <div className="wte-recipe-tags">
                            <p>Tags</p>
                            <p>Tags</p>
                            <p>Tags</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}