import React from 'react';
import { Link } from 'react-router';
import styles from './ThingCard.module.css';

interface ThingCardProps {
    id: number;
    imgUrl: string;
    name: string;
    key: string;
}
const baseUrl = "https://cjoshmartin.github.io/react-spa-seo";

export function ThingCard(props:ThingCardProps) {

    return (
      <Link to={`/about/${props.id}`} key={props.key} className={styles.card}>
        <img src={baseUrl + props.imgUrl} alt={props.name} />
        <h2>{props.name}</h2>
        <Link to={"#"}>learn more about {props.name}</Link>
      </Link>
    );
}

export default ThingCard;