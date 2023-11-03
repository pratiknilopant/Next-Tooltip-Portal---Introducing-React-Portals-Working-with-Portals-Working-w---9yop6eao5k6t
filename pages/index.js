import { useState } from 'react';
import DynamicTooltip from '../components/DynamicTooltip';

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over this text to see the dynamic tooltip.
      </span>
      {showTooltip && <DynamicTooltip />}
    </div>
  );
}
