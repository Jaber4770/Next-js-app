import React from 'react';

const AboutSlugsPages = async({ params }) => {
    const p = await params;
    console.log(p);
    return (
        <div>
            <h1>About slugs pages.</h1>
        </div>
    );
};

export default AboutSlugsPages;