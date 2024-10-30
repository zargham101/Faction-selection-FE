import React from 'react';

const FactionCard = ({ name, description, icon, onClick }) => {
    return (
        <div className="faction-card" onClick={onClick}>
            <div className="image-container">
                <img className="icon" src={icon} alt={`${name} icon`} />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FactionCard;
