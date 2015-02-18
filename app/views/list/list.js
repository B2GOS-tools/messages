var listEl = document.getElementById('thread-list');

for (var i = 0; i < 20; i++) {
  var item = document.createElement('a');
  item.innerHTML = '<div><h3>Message Thread #' + i + '</h3></div>';
  listEl.appendChild(item);
}
