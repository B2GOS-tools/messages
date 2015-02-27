var pipe = new Pipe({
  src: [
    '/views/list/worker.js',
    '/views/shared_logic.js'
  ],
  overrides: overrides
});

var listEl = document.getElementById('thread-list');
function renderThread(o) {
  var item = document.createElement('a');
    item.innerHTML = `<div data-id="${o.id}">
      <h3>Message From: ${o.with}</h3>
      <p class="last-message">${o.lastMessage}</p>
    </div>`;
  listEl.appendChild(item);
}

pipe.request('getAll').then(results => {
  results.forEach((result, idx) => {
    renderThread({
      id: idx,
      with: result.with,
      lastMessage: result.messages[result.messages.length - 1]
    });
  });
});

listEl.addEventListener('click', e => {
  pipe.requestPage('/views/thread/index.html?id=' + e.target.dataset.id);
  e.preventDefault();
});

pipe.handle('newMessage', result => {
  return new Promise(resolve => {
    var lastMessage = document.querySelector('[data-id="' + result.id + '"] .last-message');

    // If we have a message element, update the content.
    if (lastMessage) {
      lastMessage.textContent = result.content;
      return;
    }

    // Otherwise we've created a new thread.
    renderThread({
      id: result.id,
      with: result.with,
      lastMessage: result.messages[result.messages.length - 1]
    });

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
