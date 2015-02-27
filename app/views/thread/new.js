var pipe = new Pipe({
  src: [
    '/views/thread/worker.js',
    '/views/shared_logic.js'
  ],
  overrides: overrides
});

// Handle the gaia-header back
var gaiaHeader = document.querySelector('gaia-header');
gaiaHeader.addEventListener('action', e => {
  e.preventDefault();
  window.close();
});

var newForm = document.querySelector('#new-message');
var messageWithEl = document.querySelector('input#message_with');
var messageContentEl = document.querySelector('input#message_content');
newForm.addEventListener('submit', e => {
  e.preventDefault();

  var msgObj = {
    with: messageWithEl.value,
    content: messageContentEl.value
  };
  pipe.request('newMessage', msgObj);
  window.close();
});
