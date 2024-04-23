figma.showUI(__html__);


// handle events 

figma.on('selectionchange', sendSelectionChange);
figma.on('run', sendSelectionChange)

figma.ui.onmessage = (msg) => {
  if (msg.type === 'fill-with-images') {
    handleFillWithImages(msg.keyword);
  }
};


// actions

function handleFillWithImages(keyword: string) {
  const nodes = figma.currentPage.selection;
  var completed = 0;
  var total = nodes.length;
  nodes.forEach((node) => {
    if (node.type === 'RECTANGLE') {

      const imageUrl = getImageUrl(node.width, node.height, keyword);

      // start progress
      sendProgressUpdate(0.01);

      // @ts-ignore for some reason
      figma.createImageAsync(imageUrl).then((image: Image) => {
        fillNodeWithImage(node, image);
        completed++;
        const progress = completed / total;
        sendProgressUpdate(progress);
      })

    }
  });
}


// helpers

function sendSelectionChange() {
  const nodes = figma.currentPage.selection;
  console.log('selectionchange', nodes);
  figma.ui.postMessage({
    type: 'selection-change',
    count: nodes.length,
    nodeTypes: nodes.map(node => node.type)
  });
}

function sendProgressUpdate(progress: number) {
  figma.ui.postMessage({
    type: 'fill-progress',
    progress
  });
}

function fillNodeWithImage(node: RectangleNode, image: Image) {
  node.fills = [{
    type: 'IMAGE',
    imageHash: image.hash,
    scaleMode: 'FILL',
  }]
}

function getImageUrl(width: number, height: number, keyword: string) {
  return `https://source.unsplash.com/${width}x${height}/?${keyword}`;
}
