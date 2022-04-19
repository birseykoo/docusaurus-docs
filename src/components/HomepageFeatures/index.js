import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [

  {
    Svg: () => (
      <svg width="50%" height="50%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5 0C11.2 0 0 11.2 0 25.5C0 39.8 11.2 50 25.5 50C39.8 50 50 39.8 50 25.5C50 11.2 39.8 0 25.5 0ZM25.5 1.5C12.8 1.5 1.5 12.8 1.5 25.5C1.5 38.2 12.8 49.5 25.5 49.5C38.2 49.5 49.5 38.2 49.5 25.5C49.5 12.8 38.2 1.5 25.5 1.5Z" fill="#FFC107"/>
    </svg>
    ),
    title: 'Easy to use',
    description: 'We have a simple and easy to use API to create your own custom components.'
  },
  {
    Svg: () => (
      <svg width="50%" height="50%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5 0C11.2 0 0 11.2 0 25.5C0 39.8 11.2 50 25.5 50C39.8 50 50 39.8 50 25.5C50 11.2 39.8 0 25.5 0ZM25.5 1.5C12.8 1.5 1.5 12.8 1.5 25.5C1.5 38.2 12.8 49.5 25.5 49.5C38.2 49.5 49.5 38.2 49.5 25.5C49.5 12.8 38.2 1.5 25.5 1.5Z" fill="#FFC107" />
      </svg>
    ),
    title: 'Easy to use',
    description: 'We have a simple and easy to use API to create your own custom components.'
  },
  {
    Svg: () => (
      <svg width="50%" height="50%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5 0C11.2 0 0 11.2 0 25.5C0 39.8 11.2 50 25.5 50C39.8 50 50 39.8 50 25.5C50 11.2 39.8 0 25.5 0ZM25.5 1.5C12.8 1.5 1.5 12.8 1.5 25.5C1.5 38.2 12.8 49.5 25.5 49.5C38.2 49.5 49.5 38.2 49.5 25.5C49.5 12.8 38.2 1.5 25.5 1.5Z" fill="#FFC107" />
      </svg>
    ),
    title: 'Easy to use',
    description: 'We have a simple and easy to use API to create your own custom components.'
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
