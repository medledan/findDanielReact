import React from 'react';

export default function Skill(props) {
  const { image, title, alt, spinning } = props;

  return (
    <div className="py-2 col-md-3 text-center col-sm-6">
      <img
        className={!spinning ? 'imgLogo' : 'imgLogo spinningReactLogo'}
        src={image}
        alt={alt}
      />
      <h2 className="mt-2">{title}</h2>
    </div>
  );
}
