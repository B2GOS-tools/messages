importScripts('/components/pipe-core/pipe.js');

var currentContacts = [
  {
    from: 'Kevin Grandon',
    messages: [
      'Hello this message rocks',
      'I <3 robots.',
      'Open source is awesome.',
      'But not as awesome as duck.'
    ]
  },
  {
    from: 'Some guy',
    messages: [
      'Another awesome message.'
    ]
  },
  {
    from: 'Your mother',
    messages: [
      'Hello dear.',
      'Clean your room.'
    ]
  }
];

var pipe = new Pipe();

pipe.handle('newMessage', params => {
  return new Promise(resolve => {
    pipe.debug('GOT updateContact event')
    resolve({
      id: params.id,
      from: params.from
    });
  });
});

pipe.handle('newMessage', params => {
  return new Promise(resolve => {
    pipe.debug('Got newMessage event.')
    // TOD: Add to database
    resolve({
      id: params.id,
      content: params.content
    });
  });
});

pipe.handle('getAll', () => {
  return new Promise(resolve => {
    resolve(currentContacts);
  });
});

pipe.handle('getMessages', params => {
  return new Promise(resolve => {
    resolve(currentContacts[params.id]);
  });
});
