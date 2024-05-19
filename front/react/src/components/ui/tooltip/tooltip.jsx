import React, { useState } from 'react';

import './tooltip.css';

function Tooltip({ children, content, width = 'auto'}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container inline-block cursor-pointer relative font-[18px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
      {children}
      {showTooltip && (
        <div className={`${width} tooltip absolute top-0 left-0 bg-zinc-900 p-2 text-center opacity-0 invisible transform-origin-top center shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-opacity duration-300 ease-in-out`}>
          <p className="m-0 text-sm text-slate-100">{content}</p>
        </div>
      )}
    </div>
  );
}

export default Tooltip;