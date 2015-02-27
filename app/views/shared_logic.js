importScripts('/components/pipe-core/pipe.js');

var _allMessages = [
  {
    with: 'Kevin Grandon',
    messages: [
      'Hello this message rocks',
      'I <3 robots.',
      'Open source is awesome.',
      'But not as awesome as duck.'
    ]
  },
  {
    with: 'Some guy',
    messages: [
      'Another awesome message.'
    ]
  },
  {
    with: 'Your mother',
    messages: [
      'Hello dear.',
      'Clean your room.'
    ]
  }
];

var pipe = new Pipe();

pipe.handle('newMessage', params => {
  return new Promise(resolve => {
    pipe.debug('Got newMessage event.');

    // If there is no id, it's a new message.
    if (!params.id) {
      _allMessages.push({
        with: params.with,
        messages: [
          params.content
        ]
      });

      resolve({
        id: _allMessages.length - 1,
        with: params.with,
        messages: [
          params.content
        ]
      });
      return;
    }

    // TOD: Add to database
    resolve({
      id: params.id,
      content: params.content
    });
  });
});

pipe.handle('getAll', () => {
  return new Promise(resolve => {
    resolve(_allMessages);
  });
});

pipe.handle('getMessages', params => {
  return new Promise(resolve => {
    resolve(_allMessages[params.id]);
  });
});
