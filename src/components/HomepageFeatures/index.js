import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export const FeatureList = [
  {
    title: '📝 Documentation',
    description: 'Documentation for the project.',
  },
  {
    title: '💻 Development',
    description: 'Development tools for the project.',
  },
  {
    title: '🚀 Launch',
    description: 'Launch the project.',
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature, 'text--center')}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className={(styles.link, 'button button--primary button--lg')} to="/docs/intro">
        Learn more
      </Link>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}

