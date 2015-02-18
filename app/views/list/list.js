var listEl = document.getElementById('thread-list');

for (var i = 0; i < 20; i++) {
  var item = document.createElement('a');
  item.innerHTML = 'Message Thread #' + i;
  listEl.appendChild(item);
}
