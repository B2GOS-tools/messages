importScripts('/components/pipe-core/pipe.js');

var pipe = new Pipe();

pipe.handle('updateContact', params => {
  return new Promise(resolve => {
    pipe.debug('GOT updateContact event')
    resolve({
      id: params.id,
      from: params.from
    });
  });
});
