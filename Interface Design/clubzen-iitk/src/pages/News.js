import React, { useEffect, useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import StartNews from '../components/newsevents/StartNews'

import DisplayNews from '../components/newsevents/DisplayNews'

const renderResults = results => {
    if (results && results.length === 0) {
        return (
            <div>
                Nothing to display ...
            </div>
        );
    }

    if (results && results.length > 0) {
        return (<DisplayNews data={results} />);
    }

    return null;
};

const News = () => {
    const [results, setResults] = useState(null);

    useEffect(() => {
        // Call browser API to fetch remote data
        fetch(`https://cs253-clubzen-iitk.herokuapp.com/allnewsevents`)
            .then(res => res.json())
            .then(result => {
            setResults(result);
        });
    }, [])
    console.log(results)
    return (
        <MainPageLayout>
            <StartNews />
            {renderResults(results)}
        </MainPageLayout>
    )
}

export default News