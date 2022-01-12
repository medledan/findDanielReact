import React from 'react';

export default function LargeButton(props) {
  const {
    btnText,
    bootStrapBtnColor,
    bootStrapBtnStyle,
    hrefTarget,
    btnSize,
    btnMargin,
  } = props;

  return (
    <>
      <a
        role="button"
        className={`btn ${btnSize} ${bootStrapBtnColor} ${bootStrapBtnStyle} ${btnMargin}`}
        href={hrefTarget}
      >
        {btnText}
      </a>
    </>
  );
}
