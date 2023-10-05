import React, { useState } from "react";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const contentClass = `${isContentVisible ? 'visible' : 'hidden'} description__content`;
  const chevronClass = `${isContentVisible ? 'fa-chevron-up' : 'fa-chevron-down'} fas`;

  return (
    <div className="description__panel">
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      <div className={contentClass}>
        {props.content}
      </div>
    </div>
  );
}
