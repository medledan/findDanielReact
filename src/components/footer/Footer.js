import React, { useState } from 'react';
import './footer.css';
import socialLinksData from '../../data/socialLinks';
import SocialIcons from './SocialIcons';

export default function Footer(props) {
  const { name } = props;
  const [socialLinks, setSocialLinks] = useState(socialLinksData);

  const today = new Date();
  const year = today.getFullYear();

  const renderSocialLinks = (item, index) => {
    return (
      <SocialIcons
        key={item.id}
        styles={item.styles}
        href={item.href}
        fontAwesome={item.fontAwesome}
      />
    );
  };

  return (
    <footer className="py-4">
      <div className="row">
        <div className="col text-center">
          {socialLinks.map(renderSocialLinks)}
        </div>
      </div>
      <p className="mt-4 text-center">
        <small>
          {name} &copy; {year}
        </small>
      </p>
    </footer>
  );
}
