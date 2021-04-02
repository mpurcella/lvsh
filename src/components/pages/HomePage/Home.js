import React from 'react';
import Hero from '../../Hero';
import { homeObjOne } from './Data';

let Home = () => {
    return (
        <>
            <Hero {...homeObjOne} />
        </>
    )
}

export default Home;
