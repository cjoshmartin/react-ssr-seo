// import React from "react";
import {livingThingsData} from '../../data';
import ThingCard from "../../components/ThingCard/ThingCard";
import ThingContainer from "../../components/ThingContainer/ThingContainer";

import styles from './Home.module.css';

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