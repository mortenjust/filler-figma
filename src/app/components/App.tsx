import React from 'react';
import '../styles/ui.css';
import { ProgressBar } from './progress-bar';
import { useFigma } from '../hooks/use-figma';

function App() {

  const [keyword, setKeyword] = React.useState('');
  const { fillProgress, selectedNodesCount, selectedNodeTypes } = useFigma();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFill();
  }

  const onFill = () => {
    parent.postMessage({ pluginMessage: { type: 'fill-with-images', keyword } }, '*');
  }

  // if needed, canFill is true when all selected are rectangles
  // const canFill = selectedNodesCount > 0 && selectedNodeTypes.every(type => type === 'RECTANGLE');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={keyword}
          placeholder='Enter keyword'
          onChange={(e) => setKeyword(e.target.value)} />
        <SubmitButton count={selectedNodesCount} />
      </form>

      {fillProgress > 0 && fillProgress < 1 && (
        <>
          <ProgressBar progress={fillProgress} />
        </>
      )}
      <div>
      </div>
    </div>

  )
}
export default App;

function SubmitButton({ count }: { count: number }) {
  return (
    <button
      className={count > 0 ? "primary" : ""}
      type="submit">
      <div style={{ display: "flex", gap: 10 }}>
        <div>
          Fill
        </div>
        <div style={{
          opacity: 0.5,
        }}>
          {count}
        </div>
      </div>
    </button>
  )
}