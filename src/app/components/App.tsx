import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/ui.css';

function App() {

  const [progress, setProgress] = React.useState(0);
  const [keyword, setKeyword] = React.useState('');


  const onFill = () => {
    parent.postMessage({ pluginMessage: { type: 'fill-with-images', keyword } }, '*');
  }

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, progress } = event.data.pluginMessage;
      switch (type) {
        case 'fill-progress':
          setProgress(progress);
          break;
        default:
          break;
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFill();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={keyword}
          placeholder='Enter keyword'
          onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit" id="create">
          Fill
        </button>
      </form>
      {progress > 0 && progress < 1 && (
        <div>
          <div
            style={{
              width: '100%',
              height: 10,
              backgroundColor: '#ccc',
              borderRadius: 5,
              marginTop: 10,
            }}
          >
          </div>
          {progress * 100}
        </div>
      )}
      <div>
      </div>
    </div>

  )
}


export default App;
