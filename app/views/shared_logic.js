importScripts('/components/pipe.js/pipe.js');

var pipe = new Pipe();

pipe.handle('updateContact', params => {
  return new Promise(resolve => {
    pipe.debug('OMFG GOT updateContact')
  });
});
