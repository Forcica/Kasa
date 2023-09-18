import React, { useState } from "react";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
  const chevronClass = (isContentVisible ? "chevron-down" + " fa-chevron-up" : "fa-chevron-up") + " fas";
  return (
    <div className="description__panel">
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}