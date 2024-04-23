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
        if (node.type === 'RECTANGLE'
            || node.type === 'ELLIPSE'
            || node.type === 'POLYGON'
            || node.type === 'STAR'
            || node.type === 'TEXT'
            || node.type === 'VECTOR'
            || node.type === 'LINE'
            || node.type === 'FRAME') {
            node.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3QkFBd0IsMEJBQTBCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTSxHQUFHLE9BQU8sSUFBSSxRQUFRO0FBQ3RFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS5vbignc2VsZWN0aW9uY2hhbmdlJywgc2VuZFNlbGVjdGlvbkNoYW5nZSk7XG5maWdtYS5vbigncnVuJywgc2VuZFNlbGVjdGlvbkNoYW5nZSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50eXBlID09PSAnZmlsbC13aXRoLWltYWdlcycpIHtcbiAgICAgICAgaGFuZGxlRmlsbFdpdGhJbWFnZXMobXNnLmtleXdvcmQpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBoYW5kbGVGaWxsV2l0aEltYWdlcyhrZXl3b3JkKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgdmFyIHRvdGFsID0gbm9kZXMubGVuZ3RoO1xuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1JFQ1RBTkdMRSdcbiAgICAgICAgICAgIHx8IG5vZGUudHlwZSA9PT0gJ0VMTElQU0UnXG4gICAgICAgICAgICB8fCBub2RlLnR5cGUgPT09ICdQT0xZR09OJ1xuICAgICAgICAgICAgfHwgbm9kZS50eXBlID09PSAnU1RBUidcbiAgICAgICAgICAgIHx8IG5vZGUudHlwZSA9PT0gJ1RFWFQnXG4gICAgICAgICAgICB8fCBub2RlLnR5cGUgPT09ICdWRUNUT1InXG4gICAgICAgICAgICB8fCBub2RlLnR5cGUgPT09ICdMSU5FJ1xuICAgICAgICAgICAgfHwgbm9kZS50eXBlID09PSAnRlJBTUUnKSB7XG4gICAgICAgICAgICBub2RlLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC41LCBnOiAwLjUsIGI6IDAuNSB9IH1dO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBnZXRJbWFnZVVybChub2RlLndpZHRoLCBub2RlLmhlaWdodCwga2V5d29yZCk7XG4gICAgICAgICAgICBzZW5kUHJvZ3Jlc3NVcGRhdGUoMC4wMSk7XG4gICAgICAgICAgICBmaWdtYS5jcmVhdGVJbWFnZUFzeW5jKGltYWdlVXJsKS50aGVuKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZpbGxOb2RlV2l0aEltYWdlKG5vZGUsIGltYWdlKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQrKztcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGNvbXBsZXRlZCAvIHRvdGFsO1xuICAgICAgICAgICAgICAgIHNlbmRQcm9ncmVzc1VwZGF0ZShwcm9ncmVzcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gc2VuZFNlbGVjdGlvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBub2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdzZWxlY3Rpb24tY2hhbmdlJyxcbiAgICAgICAgY291bnQ6IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZVR5cGVzOiBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnR5cGUpXG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZW5kUHJvZ3Jlc3NVcGRhdGUocHJvZ3Jlc3MpIHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdmaWxsLXByb2dyZXNzJyxcbiAgICAgICAgcHJvZ3Jlc3NcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpbGxOb2RlV2l0aEltYWdlKG5vZGUsIGltYWdlKSB7XG4gICAgbm9kZS5maWxscyA9IFt7XG4gICAgICAgICAgICB0eXBlOiAnSU1BR0UnLFxuICAgICAgICAgICAgaW1hZ2VIYXNoOiBpbWFnZS5oYXNoLFxuICAgICAgICAgICAgc2NhbGVNb2RlOiAnRklMTCcsXG4gICAgICAgIH1dO1xufVxuZnVuY3Rpb24gZ2V0SW1hZ2VVcmwod2lkdGgsIGhlaWdodCwga2V5d29yZCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLyR7d2lkdGh9eCR7aGVpZ2h0fS8/JHtrZXl3b3JkfWA7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=