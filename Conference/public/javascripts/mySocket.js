  var roomNumber = document.getElementById('roomNumber').value;
  var socket = io.connect();
  socket.on('message',function(message){
     console.log('I receive ',message);
  });
  function sendMessage(cmd,message){
      console.log('Client sent: ',cmd," -- ", message);
      socket.emit(cmd,message);
  }
  function requestJoinRoom(){
      sendMessage('requestJoin',roomNumber);
      webrtc.joinRoom(roomNumber);
  }      var roomNumber = document.getElementById('roomNumber').value;
  var socket = io.connect();
  socket.on('message',function(message){
     console.log('I receive ',message);
  });
  function sendMessage(cmd,message){
      console.log('Client sent: ',cmd," -- ", message);
      socket.emit(cmd,message);
  }
  function requestJoinRoom(){
      sendMessage('requestJoin',roomNumber);
      webrtc.joinRoom(roomNumber);
  }