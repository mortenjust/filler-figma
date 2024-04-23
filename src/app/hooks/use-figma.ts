import React from 'react';

/// Listen to figma events and manage state based on those messages
export function useFigma() { 
    const [fillProgress, setFillProgress] = React.useState(0);
    const [selectedNodesCount, setSelectedNodesCount] = React.useState(0);
    const [selectedNodeTypes, setSelectedNodeTypes] = React.useState<string[]>([]);

    React.useEffect(() => {
        window.onmessage = (event: MessageEvent) => {
            const { type, progress, count, nodeTypes } = event.data.pluginMessage;
            switch (type) {
                case 'fill-progress':
                    setFillProgress(progress);
                    break;
                case 'selection-change':
                    setSelectedNodesCount(count);
                    setSelectedNodeTypes(nodeTypes);
                    break;
                default:
                    break;
            }
        };
    }, []);

    return { fillProgress, selectedNodesCount, selectedNodeTypes };
}