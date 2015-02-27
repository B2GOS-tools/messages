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

var h1 = document.querySelector('gaia-header h1');
var list = document.getElementById('message-list');

function addMessage(message) {
  var newMessage = document.createElement('div');
  newMessage.textContent = message;
  list.appendChild(newMessage);
}

var id = querystring.id;
pipe.request('getMessages', {id: id}).then(result => {
  h1.textContent = result.with;

  result.messages.forEach(message => {
    addMessage(message);
  });
});

var newForm = document.querySelector('#new-message');
var newMessageEl = document.querySelector('input[type="text"]');
newForm.addEventListener('submit', e => {
  e.preventDefault();

  addMessage(newMessageEl.value);

  var msgObj = {
    id: id,
    content: newMessageEl.value
  };
  pipe.request('newMessage', msgObj);
  newMessageEl.value = '';
  newMessageEl.focus();
});

//newMessageEl.focus();
