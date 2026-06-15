import React, { useState, useEffect, useMemo, forwardRef } from "react";

export const ExpandingCards = forwardRef(({
  className = "",
  items,
  defaultActiveIndex = 0,
  onActiveCardClick,
  ...props
}, ref) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridStyle = useMemo(() => {
    if (activeIndex === null) return {};

    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    if (onActiveCardClick) {
      onActiveCardClick(index);
    }
  };

  return (
    <ul
      className={`ec-grid-container ${className}`}
      style={{
        ...gridStyle,
        ...(isDesktop
          ? { gridTemplateRows: '1fr' }
          : { gridTemplateColumns: '1fr' }
        )
      }}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <li
            key={item.id}
            className="ec-card-item"
            onMouseEnter={() => handleHover(index)}
            onFocus={() => handleHover(index)}
            onClick={() => handleClick(index)}
            tabIndex={0}
            data-active={isActive}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="ec-img"
              style={{
                transform: isActive ? "scale(1)" : "scale(1.1)",
                filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
              }}
            />
            <div className="ec-overlay" />

            <article className="ec-content">
              {/* Vertical Title shown when collapsed */}
              <h3 className="ec-title-vertical">
                {item.title}
              </h3>

              {/* Horizontal detailed content shown when expanded */}
              <div className="ec-icon-wrapper">
                {item.icon}
              </div>

              <h3 className="ec-title-horizontal">
                {item.title}
              </h3>

              <p className="ec-desc">
                {item.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  );
});

ExpandingCards.displayName = "ExpandingCards";

export default ExpandingCards;
