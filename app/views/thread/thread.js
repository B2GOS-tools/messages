var pipe = new Pipe({src: '/views/thread/worker.js'});

var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

var id = qs.id;
pipe.request('get', {id: id}).then(result => {
  var h1 = document.querySelector('gaia-header h1');
  h1.textContent = result.from;

  var list = document.getElementById('message-list');
  result.messages.forEach(message => {
    var newMessage = document.createElement('div');
    newMessage.textContent = message;
    list.appendChild(newMessage);
  });
});
