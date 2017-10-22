
function route(handle, pathname, res, postData) {

  console.log('about to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res,req);
  } else {
    console.log('no request handler  was found for ' + pathname);
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('404 not found');
    res.end();
  }
}

exports.route = route;