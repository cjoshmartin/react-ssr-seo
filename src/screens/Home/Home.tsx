// import React from "react";
import {livingThingsData} from '../../data';
import ThingCard from "../../components/ThingCard/ThingCard";
import ThingContainer from "../../components/ThingContainer/ThingContainer";

import styles from './Home.module.css';
import { MetaArgs } from 'react-router';

export function meta({params}: MetaArgs){
    const title = "Home - Living Things"

    return [
        {
            title,
        },
        {
            property: 'twitter:title',
            content: title,
        },
        {
            property: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            property: 'description',
            content: "Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house."
        },
        {
            property: 'og:type',
            content: "website"
        },
        { // TODO
            property: 'og:url',
            content: ""
        },
        {
            property: 'og:image',
            content: "https://cjoshmartin.github.io/react-spa-seo"
        },
        {
            property: 'twitter:image',
            content: "https://cjoshmartin.github.io/react-spa-seo"
        },
        {
            property: 'og:site_name',
            content: "Living Things"
        },
        {
            property: 'og:locale',
            content: "en_US"
        },
    ]
}

export async function loader() {
    return {
        data: livingThingsData,
    }
}

export default function Component({ loaderData }) {
    return (
    <div className="App">
      <h1>Living Things</h1>
      <p>
        Welcome to the Living Things site! Here, you will find information about
        all the living things in Josh's house. From the plants that adorn the
        living room to the pets that bring joy and companionship, each living
        thing has its own story and unique characteristics. Explore the
        different sections of the site to learn more about these fascinating
        living things. Click on the links to discover interesting facts, care
        tips, and personal anecdotes about each one. Whether you're a plant
        enthusiast or an animal lover, there's something here
      </p>
        <div className={styles.home}>
        <ThingContainer>
            {loaderData?.data.map((thing) => {
                return (
                    <ThingCard key={thing?.id + thing.name} {...thing} />
                )
            })}
        </ThingContainer>
</div>
</div>
    )

}