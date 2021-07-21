import React from 'react';

const Recipe = ({ title, colaries, image, ingredients }) => {
    const showInfo = () => {
        const info = document.querySelector('.ingredient');
        const moreBtn = document.querySelector('.more-btn');
        if (info.classList.contains('display')) {
            info.classList.remove('display');
            moreBtn.innerHTML = 'More';
        } else {
            info.classList.add('display');
            moreBtn.innerHTML = 'Less';
        }
    };
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <img className="img" src={image} alt="" />
            <h3>{colaries}</h3>
            <button className="more-btn" onClick={showInfo}>
                More
            </button>
            <ul className="ingredient">
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;
