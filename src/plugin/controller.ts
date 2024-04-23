figma.showUI(__html__);



figma.ui.onmessage = (msg) => {

  if (msg.type === 'fill-with-images') {
    console.log('filling with images', figma.currentPage.selection);
    const nodes = figma.currentPage.selection;
    if (nodes.length === 0) {
      // figma.closePlugin('Select a frame to fill with images');
      console.log('Select a frame to fill with images');
    }
    var completed = 0;
    var total = nodes.length;
    nodes.forEach((node) => {
      if (node.type === 'RECTANGLE') {
        console.log("got rectange")

        const width = node.width;
        const height = node.height;
        const keyword = msg.keyword;
        const imageUrl = `https://source.unsplash.com/${width}x${height}/?${keyword}`;

        figma.ui.postMessage({
          type: 'fill-progress',
          progress: 0.0
        });

        // @ts-ignore
        figma.createImageAsync(imageUrl).then((image: Image) => {
          console.log('image', image);
          node.fills = [{
            type: 'IMAGE',
            imageHash: image.hash,
            scaleMode: 'FILL',
          }]
          completed++;
          const progress = completed / total;
          console.log('progress', progress);

          figma.ui.postMessage({
            type: 'fill-progress',
            progress
          });
        })
        
      }
    });
  }


};
