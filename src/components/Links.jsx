import React from 'react';
import { slack, github } from '../assets/';
import './links.css';

const links = [
  {
    id: 1,
    name: 'Twitter',
    url: 'https://twitter.com/shazyleshan',
  },
  {
    id: 2,
    name: 'Zuri Team',
    url: '',
  },
  {
    id: 3,
    name: 'Zuri Books',
    url: '',
  },
  {
    id: 4,
    name: 'Python Books',
    url: '',
  },
  {
    id: 5,
    name: 'Background Check for Coders',
    url: '',
  },
  {
    id: 6,
    name: 'Design Books',
    url: '',
  },
];

const Links = () => {
  return (
    <>
      <ul className="links">
        {links.map(link => (
          <li key={link.id} className="link">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="other-links">
        <a
          href="https://app.slack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={slack} alt="slack" />
        </a>
        <a
          href="https://github.com/sharon-leshan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
      </div>
    </>
  );
};

export default Links;
