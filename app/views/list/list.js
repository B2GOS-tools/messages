var pipe = new Pipe({
  src: [
    '/views/list/worker.js',
    '/views/shared_logic.js'
  ],
  overrides: overrides
});
var listEl = document.getElementById('thread-list');

pipe.request('getAll').then(results => {
  results.forEach((result, idx) => {
    var lastMessage = result.messages[result.messages.length - 1];

    var item = document.createElement('a');
    item.innerHTML = `<div data-id="${idx}">
      <h3>Message From: ${result.from}</h3>
      <p class="last-message">${lastMessage}</p>
    </div>`;
    listEl.appendChild(item);
  });
});

listEl.addEventListener('click', e => {
  pipe.requestPage('/views/thread/index.html?id=' + e.target.dataset.id);
  e.preventDefault();
});

pipe.handle('newMessage', results => {
  return new Promise(resolve => {
    var lastMessage = document.querySelector('[data-id="' + results.id + '"] .last-message');
    lastMessage.textContent = results.content;
    resolve();
  });
});

// Settings
var settings = document.getElementById('settings-button');
settings.addEventListener('click', e => {
  e.preventDefault();
  pipe.requestPage('/views/settings/index.html');
});

// New sms.
var settings = document.getElementById('add-button');
settings.addEventListener('click', e => {
  e.preventDefault();
  pipe.requestPage('/views/thread/new.html');
});
