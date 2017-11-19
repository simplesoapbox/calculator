var Routes = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('./public/html/index.html');
    }
  },
  {
    method: 'POST',
    path: '/',
    handler: function(request, reply){
      reply(request.payload);
    }
  },
  {
    method: 'GET',
    path: '/public/js/{file*}',
    handler: function(request, reply){
      reply.file('./public/js/' + request.params.file);
    }
  }
];

module.exports = Routes;
