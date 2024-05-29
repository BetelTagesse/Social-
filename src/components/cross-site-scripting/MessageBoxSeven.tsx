import React, { useState } from 'react';
import MessageBoxSix from './MessageSix';
import MessageBoxSeven from './MessageBoxSeven';

const ParentComponent: React.FC = () => {
  const [showMessageBoxSeven, setShowMessageBoxSeven] = useState(false);

  const navigateToNext = () => {
    setShowMessageBoxSeven(true);
  };

  return (
    <div>
      {showMessageBoxSeven ? (
        <MessageBoxSeven />
      ) : (
        <MessageBoxSix navigateToNext={navigateToNext} />
      )}
    </div>
  );
};

export default ParentComponent;
