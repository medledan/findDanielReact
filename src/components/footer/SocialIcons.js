import React from 'react';

export default function SocialIcons(props) {
  const { styles, href, fontAwesome } = props;

  return (
    <a
      className={styles}
      href={href}
      target="_blank"
      rel="noreferrer"
      role="button"
    >
      <i className={`fab ${fontAwesome}`}></i>
    </a>
  );
}
