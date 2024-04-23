/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
figma.showUI(__html__);
figma.on('selectionchange', sendSelectionChange);
figma.on('run', sendSelectionChange);
figma.ui.onmessage = (msg) => {
    if (msg.type === 'fill-with-images') {
        handleFillWithImages(msg.keyword);
    }
};
function handleFillWithImages(keyword) {
    const nodes = figma.currentPage.selection;
    var completed = 0;
    var total = nodes.length;
    nodes.forEach((node) => {
        if (node.type === 'RECTANGLE') {
            const imageUrl = getImageUrl(node.width, node.height, keyword);
            sendProgressUpdate(0.01);
            figma.createImageAsync(imageUrl).then((image) => {
                fillNodeWithImage(node, image);
                completed++;
                const progress = completed / total;
                sendProgressUpdate(progress);
            });
        }
    });
}
function sendSelectionChange() {
    const nodes = figma.currentPage.selection;
    console.log('selectionchange', nodes);
    figma.ui.postMessage({
        type: 'selection-change',
        count: nodes.length,
        nodeTypes: nodes.map(node => node.type)
    });
}
function sendProgressUpdate(progress) {
    figma.ui.postMessage({
        type: 'fill-progress',
        progress
    });
}
function fillNodeWithImage(node, image) {
    node.fills = [{
            type: 'IMAGE',
            imageHash: image.hash,
            scaleMode: 'FILL',
        }];
}
function getImageUrl(width, height, keyword) {
    return `https://source.unsplash.com/${width}x${height}/?${keyword}`;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTSxHQUFHLE9BQU8sSUFBSSxRQUFRO0FBQ3RFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS5vbignc2VsZWN0aW9uY2hhbmdlJywgc2VuZFNlbGVjdGlvbkNoYW5nZSk7XG5maWdtYS5vbigncnVuJywgc2VuZFNlbGVjdGlvbkNoYW5nZSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50eXBlID09PSAnZmlsbC13aXRoLWltYWdlcycpIHtcbiAgICAgICAgaGFuZGxlRmlsbFdpdGhJbWFnZXMobXNnLmtleXdvcmQpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBoYW5kbGVGaWxsV2l0aEltYWdlcyhrZXl3b3JkKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgdmFyIHRvdGFsID0gbm9kZXMubGVuZ3RoO1xuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1JFQ1RBTkdMRScpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gZ2V0SW1hZ2VVcmwobm9kZS53aWR0aCwgbm9kZS5oZWlnaHQsIGtleXdvcmQpO1xuICAgICAgICAgICAgc2VuZFByb2dyZXNzVXBkYXRlKDAuMDEpO1xuICAgICAgICAgICAgZmlnbWEuY3JlYXRlSW1hZ2VBc3luYyhpbWFnZVVybCkudGhlbigoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBmaWxsTm9kZVdpdGhJbWFnZShub2RlLCBpbWFnZSk7XG4gICAgICAgICAgICAgICAgY29tcGxldGVkKys7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBjb21wbGV0ZWQgLyB0b3RhbDtcbiAgICAgICAgICAgICAgICBzZW5kUHJvZ3Jlc3NVcGRhdGUocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNlbmRTZWxlY3Rpb25DaGFuZ2UoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGlvbmNoYW5nZScsIG5vZGVzKTtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdzZWxlY3Rpb24tY2hhbmdlJyxcbiAgICAgICAgY291bnQ6IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZVR5cGVzOiBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnR5cGUpXG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZW5kUHJvZ3Jlc3NVcGRhdGUocHJvZ3Jlc3MpIHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdmaWxsLXByb2dyZXNzJyxcbiAgICAgICAgcHJvZ3Jlc3NcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpbGxOb2RlV2l0aEltYWdlKG5vZGUsIGltYWdlKSB7XG4gICAgbm9kZS5maWxscyA9IFt7XG4gICAgICAgICAgICB0eXBlOiAnSU1BR0UnLFxuICAgICAgICAgICAgaW1hZ2VIYXNoOiBpbWFnZS5oYXNoLFxuICAgICAgICAgICAgc2NhbGVNb2RlOiAnRklMTCcsXG4gICAgICAgIH1dO1xufVxuZnVuY3Rpb24gZ2V0SW1hZ2VVcmwod2lkdGgsIGhlaWdodCwga2V5d29yZCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLyR7d2lkdGh9eCR7aGVpZ2h0fS8/JHtrZXl3b3JkfWA7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=