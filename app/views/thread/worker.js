importScripts('/components/pipe.js/pipe.js');

var pipe = new Pipe();

pipe.handle('get', params => {
  return new Promise(resolve => {
    if (params.id == 0) {
      resolve({
        from: 'Kevin Grandon',
        messages: [
          'Hello this message rocks',
          'omg another message'
        ]
      });
    } else {
      resolve({
        from: 'Your mom',
        messages: [
          'Clean your room!'
        ]
      });
    }
  });
});
