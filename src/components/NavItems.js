import React from 'react';

export default function NavItems(props) {
  const { href, title, textColor } = props;
  return (
    <li className="nav-item">
      <a className={`nav-link ${textColor}`} aria-current="page" href={href}>
        {title}
      </a>
    </li>
  );
}
