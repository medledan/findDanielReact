import React from 'react';
import './header.css';
import LargeButton from './LargeButton';

export default function Header(props) {
  return (
    <header
      id="header"
      className="
          jumbotron
          text-center
          d-flex
          align-items-center
          justify-content-center
        "
    >
      <div className="lh-1 jumbotronContents">
        {props.heroTitle}
        <LargeButton
          btnText="View My Work"
          bootStrapBtnColor="btn-danger"
          bootStrapBtnStyle="btn-outline-light"
          hrefTarget="#projects"
          btnSize="btn-lg"
          btnMargin="mt-4"
        />
      </div>
    </header>
  );
}
