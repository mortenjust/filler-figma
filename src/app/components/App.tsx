import React from 'react';
import '../styles/ui.css';
import { ProgressBar } from './progress-bar';
import { useFigma } from '../hooks/use-figma';
import { SubmitButton } from './submit-button';

function App() {

  const [keyword, setKeyword] = React.useState('');
  const { fillProgress, selectedNodesCount } = useFigma(); // also gives you selectedNodeTypes

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFill();
  }

  const onFill = () => {  
    parent.postMessage({ pluginMessage: { type: 'fill-with-images', keyword } }, '*');
  }
  const canFill = selectedNodesCount > 0

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={keyword}
          placeholder='Enter keyword'
          onChange={(e) => setKeyword(e.target.value)} />
        <SubmitButton count={selectedNodesCount} />
      </form>

      {fillProgress > 0 && fillProgress < 1 && (
        <ProgressBar progress={fillProgress} />
      )}

      {/* This may not be needed as we're showing the count in the button */}
      {!canFill && (
        <div
          style={{ marginTop: 50, color: '#888' }}>
          Select one or more rectangles to fill</div>
      )}
    </div>

  )
}
export default App;