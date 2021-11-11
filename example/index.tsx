import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToggleSwitch } from '@snapdev-ui/capital-art-ds';
import '@snapdev-ui/capital-art-ds/dist/tailwind.css';

const App = () => {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div>
      <ToggleSwitch
        enabled={enabled}
        onChange={(value: boolean) => setEnabled(value)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
