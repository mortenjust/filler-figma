/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
figma.showUI(__html__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLE1BQU0sR0FBRyxPQUFPLElBQUksUUFBUTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmaWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gJ2ZpbGwtd2l0aC1pbWFnZXMnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWxsaW5nIHdpdGggaW1hZ2VzJywgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3QgYSBmcmFtZSB0byBmaWxsIHdpdGggaW1hZ2VzJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIHZhciB0b3RhbCA9IG5vZGVzLmxlbmd0aDtcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1JFQ1RBTkdMRScpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdvdCByZWN0YW5nZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gbm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5d29yZCA9IG1zZy5rZXl3b3JkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gYGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8ke3dpZHRofXgke2hlaWdodH0vPyR7a2V5d29yZH1gO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGwtcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogMC4wXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3JlYXRlSW1hZ2VBc3luYyhpbWFnZVVybCkudGhlbigoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlJywgaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmZpbGxzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnSU1BR0UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSGFzaDogaW1hZ2UuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZU1vZGU6ICdGSUxMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBjb21wbGV0ZWQgLyB0b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2dyZXNzJywgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmlsbC1wcm9ncmVzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==