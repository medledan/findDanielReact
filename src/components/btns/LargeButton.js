import React from 'react';

export default function LargeButton(props) {
  const {
    btnText,
    bootStrapBtnColor,
    bootStrapBtnStyle,
    hrefTarget,
    btnSize,
    btnMargin,
    dataBsToggle,
    dataBsTarget,
  } = props;

  return (
    <>
      <a
        role="button"
        className={`btn ${btnSize} ${bootStrapBtnColor} ${bootStrapBtnStyle} ${btnMargin}`}
        href={hrefTarget}
        data-bs-toggle={dataBsToggle}
        data-bs-target={dataBsTarget}
      >
        {btnText}
      </a>
    </>
  );
}
