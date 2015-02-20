importScripts('/components/pipe-core/pipe.js');

var pipe = new Pipe();

pipe.handle('getAll', () => {
  return new Promise(resolve => {
    resolve([
    {
      from: 'Kevin Grandon',
      content: 'Hello this message rocks',
    },
    {
      from: 'A guy',
      content: 'Another awesome message.'
    }
    ]);
  });
});
