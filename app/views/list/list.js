var pipe = new Pipe({src: '/views/list/worker.js'});
var listEl = document.getElementById('thread-list');

pipe.request('getAll').then(results => {
  results.forEach((result, idx) => {
    var item = document.createElement('a');
    item.innerHTML = `<div data-id="${idx}">
      <h3>Message From: ${result.from}</h3>
      <p>${result.content}</p>
    </div>`;
    listEl.appendChild(item);
  });
});

listEl.addEventListener('click', e => {
  pipe.requestPage('/views/thread/index.html?id=' + e.target.dataset.id);
  e.preventDefault();
});
