var pipe = new Pipe({
  src: [
    '/views/thread/worker.js',
    '/views/shared_logic.js'
  ],
  overrides: overrides
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
  h1.textContent = result.from;

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

newMessageEl.focus();
