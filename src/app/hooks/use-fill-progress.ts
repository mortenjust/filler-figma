import React from 'react';

export function useFillProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
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

  return progress;
}