import React from 'react';

import styles from './ThingContainer.module.css';

function ThingContainer({children}: any) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default ThingContainer;