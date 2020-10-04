// Comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket')

socket.on('connect', function(){
    console.log('Conectado al servidor')
})

socket.on('disconnect', function(){
    console.log('desconcetado del servidor')
})

socket.on('estadoActual', function(resp){
    label.text(resp.actual);
})

$('button').on('click', function(){

    socket.emit('siguienteTicket', {}, function(resp){
        console.log('Respuesta', resp)
        label.text(JSON.stringify(resp.ticket));
    })

})