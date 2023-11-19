import React, { useState, useEffect, Fragment } from 'react';

const RatingStars = ( props ) => {
    const [stars, setStars] = useState([]);

    let num = props.num;

    useEffect(() => {
        let starArr = [];

        for ( let i = 0; i < num; i++ ) {
            starArr.push(<i key={ i } className="fas fa-star i-small-xs"></i>);
        }

        setStars(starArr);
    },[num]);

    return (
        <Fragment>{stars}</Fragment>
    );
};

export default RatingStars;
