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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCLDBCQUEwQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTSxHQUFHLE9BQU8sSUFBSSxRQUFRO0FBQ3RFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS5vbignc2VsZWN0aW9uY2hhbmdlJywgc2VuZFNlbGVjdGlvbkNoYW5nZSk7XG5maWdtYS5vbigncnVuJywgc2VuZFNlbGVjdGlvbkNoYW5nZSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50eXBlID09PSAnZmlsbC13aXRoLWltYWdlcycpIHtcbiAgICAgICAgaGFuZGxlRmlsbFdpdGhJbWFnZXMobXNnLmtleXdvcmQpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBoYW5kbGVGaWxsV2l0aEltYWdlcyhrZXl3b3JkKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgdmFyIHRvdGFsID0gbm9kZXMubGVuZ3RoO1xuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1JFQ1RBTkdMRScpIHtcbiAgICAgICAgICAgIG5vZGUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjUsIGc6IDAuNSwgYjogMC41IH0gfV07XG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IGdldEltYWdlVXJsKG5vZGUud2lkdGgsIG5vZGUuaGVpZ2h0LCBrZXl3b3JkKTtcbiAgICAgICAgICAgIHNlbmRQcm9ncmVzc1VwZGF0ZSgwLjAxKTtcbiAgICAgICAgICAgIGZpZ21hLmNyZWF0ZUltYWdlQXN5bmMoaW1hZ2VVcmwpLnRoZW4oKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgZmlsbE5vZGVXaXRoSW1hZ2Uobm9kZSwgaW1hZ2UpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCsrO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gY29tcGxldGVkIC8gdG90YWw7XG4gICAgICAgICAgICAgICAgc2VuZFByb2dyZXNzVXBkYXRlKHByb2dyZXNzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZW5kU2VsZWN0aW9uQ2hhbmdlKCkge1xuICAgIGNvbnN0IG5vZGVzID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3Rpb25jaGFuZ2UnLCBub2Rlcyk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnc2VsZWN0aW9uLWNoYW5nZScsXG4gICAgICAgIGNvdW50OiBub2Rlcy5sZW5ndGgsXG4gICAgICAgIG5vZGVUeXBlczogbm9kZXMubWFwKG5vZGUgPT4gbm9kZS50eXBlKVxuICAgIH0pO1xufVxuZnVuY3Rpb24gc2VuZFByb2dyZXNzVXBkYXRlKHByb2dyZXNzKSB7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnZmlsbC1wcm9ncmVzcycsXG4gICAgICAgIHByb2dyZXNzXG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaWxsTm9kZVdpdGhJbWFnZShub2RlLCBpbWFnZSkge1xuICAgIG5vZGUuZmlsbHMgPSBbe1xuICAgICAgICAgICAgdHlwZTogJ0lNQUdFJyxcbiAgICAgICAgICAgIGltYWdlSGFzaDogaW1hZ2UuaGFzaCxcbiAgICAgICAgICAgIHNjYWxlTW9kZTogJ0ZJTEwnLFxuICAgICAgICB9XTtcbn1cbmZ1bmN0aW9uIGdldEltYWdlVXJsKHdpZHRoLCBoZWlnaHQsIGtleXdvcmQpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8ke3dpZHRofXgke2hlaWdodH0vPyR7a2V5d29yZH1gO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9