/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
figma.showUI(__html__);
figma.on('selectionchange', () => {
    const nodes = figma.currentPage.selection;
    console.log('selectionchange', nodes);
    figma.ui.postMessage({
        type: 'selection-change',
        count: nodes.length,
        nodeTypes: nodes.map(node => node.type)
    });
});
figma.ui.onmessage = (msg) => {
    if (msg.type === 'fill-with-images') {
        console.log('filling with images', figma.currentPage.selection);
        const nodes = figma.currentPage.selection;
        if (nodes.length === 0) {
            console.log('Select a frame to fill with images');
        }
        var completed = 0;
        var total = nodes.length;
        nodes.forEach((node) => {
            if (node.type === 'RECTANGLE') {
                console.log("got rectange");
                const width = node.width;
                const height = node.height;
                const keyword = msg.keyword;
                const imageUrl = `https://source.unsplash.com/${width}x${height}/?${keyword}`;
                figma.ui.postMessage({
                    type: 'fill-progress',
                    progress: 0.0
                });
                figma.createImageAsync(imageUrl).then((image) => {
                    console.log('image', image);
                    node.fills = [{
                            type: 'IMAGE',
                            imageHash: image.hash,
                            scaleMode: 'FILL',
                        }];
                    completed++;
                    const progress = completed / total;
                    console.log('progress', progress);
                    figma.ui.postMessage({
                        type: 'fill-progress',
                        progress
                    });
                });
            }
        });
    }
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxNQUFNLEdBQUcsT0FBTyxJQUFJLFFBQVE7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvLi9zcmMvcGx1Z2luL2NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbmZpZ21hLm9uKCdzZWxlY3Rpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgY29uc3Qgbm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGlvbmNoYW5nZScsIG5vZGVzKTtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdzZWxlY3Rpb24tY2hhbmdlJyxcbiAgICAgICAgY291bnQ6IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZVR5cGVzOiBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnR5cGUpXG4gICAgfSk7XG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdmaWxsLXdpdGgtaW1hZ2VzJykge1xuICAgICAgICBjb25zb2xlLmxvZygnZmlsbGluZyB3aXRoIGltYWdlcycsIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0IGEgZnJhbWUgdG8gZmlsbCB3aXRoIGltYWdlcycpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb21wbGV0ZWQgPSAwO1xuICAgICAgICB2YXIgdG90YWwgPSBub2Rlcy5sZW5ndGg7XG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdSRUNUQU5HTEUnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgcmVjdGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBub2RlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXdvcmQgPSBtc2cua2V5d29yZDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IGBodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vJHt3aWR0aH14JHtoZWlnaHR9Lz8ke2tleXdvcmR9YDtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxsLXByb2dyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDAuMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZpZ21hLmNyZWF0ZUltYWdlQXN5bmMoaW1hZ2VVcmwpLnRoZW4oKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZScsIGltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5maWxscyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0lNQUdFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhhc2g6IGltYWdlLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVNb2RlOiAnRklMTCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gY29tcGxldGVkIC8gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9ncmVzcycsIHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGwtcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=