
import React from 'react';

export function useNodeSelection():[number, string[]] {
  const [count, setCount] = React.useState<number>(0);
  const [types, setTypes] = React.useState<string[]>([]);

  React.useEffect(() => {
    window.onmessage = (event: MessageEvent) => {
      const { type, count, nodeTypes } = event.data.pluginMessage;
      switch (type) {
        case 'selection-change':
            setCount(count);
            setTypes(nodeTypes);
          break;
        default:
          break;
      }
    };
     
  }, []);

  return [count, types]
}