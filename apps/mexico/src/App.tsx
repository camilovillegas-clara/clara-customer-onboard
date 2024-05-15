import React from 'react';
import Button from '@repo/ui/Button'

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello Mexico</h1>
      <Button appName="Mexico">
        Click me!
      </Button>
    </div>
  );
};

export default App;
