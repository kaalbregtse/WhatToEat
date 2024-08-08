import React from "react";
import '../App.css';

export default function Banner() {
    return (
        <div className="wte-hero-banner">
            <h2>Welcome to</h2>
            <h1>WHATTOEAT?</h1>
            <div>
                <button>What's in my cabinet?</button>
                <button>Recommended Recipes</button>
            </div>
        </div>
    )
}