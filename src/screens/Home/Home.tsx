// import React from "react";
import {livingThingsData} from '../../data';
import ThingCard from "../../components/ThingCard/ThingCard";
import ThingContainer from "../../components/ThingContainer/ThingContainer";

import styles from './Home.module.css';
import { Helmet } from "react-helmet-async";

export function Home(props: any) {
    return (
        <div className={styles.home}>
            <Helmet prioritizeSeoTags>
                <title>Home - Living Things</title>
                <meta property="og:title" content="Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house."/>
                <meta
                    name="description"
                    content="Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house." />
                <meta name="twitter:title" content="Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cjoshmartin.github.io/react-spa-seo" />
                <meta property="og:image" content="https://cjoshmartin.github.io/react-spa-seo/luke.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://cjoshmartin.github.io/react-spa-seo/luke.jpg" />
                <meta property="og:site_name" content="Living Things" />
                <meta property="og:locale" content="en_US" />
            </Helmet>
        <ThingContainer>
            {livingThingsData.map((thing) => {
                return (
                    <ThingCard key={thing?.id + thing.name} {...thing} />
                )
            })}
        </ThingContainer>
</div>
    )
}