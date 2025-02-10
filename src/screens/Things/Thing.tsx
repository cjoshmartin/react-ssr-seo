import { Link, useParams, MetaArgs } from "react-router";
import {getSpeciesEmoji, LivingThing, livingThingsData} from '../../data';

import styles from './Thing.module.css';
import ThingCard from "../../components/ThingCard/ThingCard";

const baseUrl = "https://cjoshmartin.github.io/react-spa-seo";

// This isn't well documented, but I thought a lot and found some helpf links online
// appearlly cannot use `async` keyword to load metadata??????
// https://github.com/remix-run/react-router/issues/12956
// https://api.reactrouter.com/v7/interfaces/react_router.MetaArgs
export function meta({params}: MetaArgs){
    const data: LivingThing  = livingThingsData[(params?.id as unknown as number) - 1];

    const title = `About ${data?.name} #${data?.id.toString().padStart(4, "0")} - Living Things`
    return [ // such bad documentation
      {
        title,
      },
      {
        property: 'og:title',
        content: title,
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
            property: 'og:image',
            content:  data?.imgUrl
        },
        {
            property: 'twitter:image',
            content: data?.imgUrl
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

export async function loader({ params }) {
  return {
    data: livingThingsData[(params?.id as unknown as number) - 1]
  }
}

export default function Component({loaderData}) {
    let data: LivingThing | undefined = loaderData?.data;

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