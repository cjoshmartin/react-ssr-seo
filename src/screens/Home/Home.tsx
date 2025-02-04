import React from "react";
import {livingThingsData} from '../../data';
import ThingCard from "../../components/ThingCard/ThingCard";
import ThingContainer from "../../components/ThingContainer/ThingContainer";

import styles from './Home.module.css';

export function Home(props: any) {
    return (
        <div className={styles.home}>
            {/* <h1>Home Page</h1> */}
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