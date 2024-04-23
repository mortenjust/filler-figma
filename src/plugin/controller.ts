figma.showUI(__html__);

// Listen to messages from Figma
// ----

figma.on('selectionchange', sendSelectionChange);
figma.on('run', sendSelectionChange)

figma.ui.onmessage = (msg) => {
  if (msg.type === 'fill-with-images') {
    handleFillWithImages(msg.keyword);
  }
};


// Actions
// ---- 

function handleFillWithImages(keyword: string) {
  const nodes = figma.currentPage.selection;
  var completed = 0;
  var total = nodes.length;
  nodes.forEach((node) => {
    if (node.type === 'RECTANGLE') {

      // make the fill gray so we get immediate feedback while images are loading
      node.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
      
    
      const imageUrl = getImageUrl(node.width, node.height, keyword);

      // Set progress to non-zero so the loader appears immediately
      sendProgressUpdate(0.01);

      // Load the image from the URL
      // @ts-ignore for some reason
      figma.createImageAsync(imageUrl).then((image: Image) => {
        fillNodeWithImage(node, image);
        completed++;
        // Set progress
        const progress = completed / total;
        sendProgressUpdate(progress);
      })

    }
  });
}


// Helpers
// ---- 

// Tell the UI that the user has selected or deselected some nodes
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
