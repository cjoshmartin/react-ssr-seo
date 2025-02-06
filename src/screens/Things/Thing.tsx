import { Link, useParams } from "react-router";
import {getSpeciesEmoji, LivingThing, livingThingsData} from '../../data';

import styles from './Thing.module.css';
import ThingCard from "../../components/ThingCard/ThingCard";

const baseUrl = "https://cjoshmartin.github.io/react-spa-seo";

export function Thing() {
    const { id } = useParams();
    let data: LivingThing | undefined;

    if(id){
        data = livingThingsData[(id as unknown as number) - 1];
    }

    if(!data){
        return <h1>Thing not found</h1>
    }

    return (
      <div className={styles.container}>
        <Link to="/">{"<< Back to Home"}</Link>

        <div className={styles.thingContainer}>
          <div className={styles.thing}>
            <div className={styles.leftSide}>
              <img src={ baseUrl+ data.imgUrl} alt={data.name} />
            </div>
            <div className={styles.rightSide}>
              <div className={styles.header}>
                <h2>
                  {data?.name}{" "}
                  <span>#{data?.id.toString().padStart(4, "0")}</span>
                </h2>
                <p>{data.description}</p>
              </div>
              <div className={styles.details}>
                <div>
                  <p>age:</p>
                  <p>{data.age}</p>
                </div>
                <div>
                  <p>species: </p>
                  <p>
                    {data.species} {getSpeciesEmoji(data?.species)}
                  </p>
                </div>
                <div>
                  <p>height:</p>
                  <p>
                    {Math.floor(data.height / 12)}' {data.height % 12}"{" "}
                  </p>
                </div>

                <div>
                  <p>gender:</p>
                  <p>{data.gender}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2> Other Things</h2>
          <div className={styles.otherThings}>
            {data &&
              livingThingsData
                .filter(({ id }) => id !== data?.id)
                .map((thing) => {
                  return <ThingCard {...thing} key={thing.id + thing.name} />;
                })}
          </div>
        </div>
      </div>
    );
}