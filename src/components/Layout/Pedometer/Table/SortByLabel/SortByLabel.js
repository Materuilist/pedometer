import React from "react";

import cssClasses from './SortByLabel.module.css';

export default function ({ title, upstream, active, clickHandler }) {
  return (
    <div className={cssClasses.SortByLabel} onClick={clickHandler}>
      <span>{title}</span>
      <svg
        style={{opacity:active?1:.3, transform:upstream?'rotate(180deg)':'rotate(0)'}}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="14" height="14" rx="3" fill="#EC174F" />
        <g clip-path="url(#clip0)">
          <path
            d="M11.063 5.7149C11.0327 5.78759 10.9619 5.83502 10.8834 5.83502H8.7534V10.6945C8.7534 10.8018 8.66631 10.8889 8.55901 10.8889H5.44894C5.34164 10.8889 5.25455 10.8018 5.25455 10.6945V5.83501H3.11638C3.03786 5.83501 2.9671 5.78757 2.93677 5.71526C2.90683 5.64257 2.92316 5.55898 2.97876 5.50338L6.85663 1.61268C6.89317 1.57615 6.94255 1.55553 6.99425 1.55553C7.04595 1.55553 7.09534 1.57615 7.13187 1.6123L11.021 5.503C11.0766 5.55862 11.0933 5.64219 11.063 5.7149Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="9.33333"
              height="9.33333"
              transform="matrix(1 0 0 -1 2.33331 10.8889)"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
