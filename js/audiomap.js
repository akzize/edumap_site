function showLocationAndAudio(destination, audioPath) {
  var mapFrame = document.getElementById("mapFrame");
  var location = encodeURI(destination);
  var mapUrl = "https://maps.google.com/maps?q=" + location + "&output=embed";
  mapFrame.src = mapUrl;
  // var allAudioPlayers = document.querySelectorAll(".audio-player");
  // allAudioPlayers.forEach(function (player) {
  //   player.style.display = "none";
  //   var audio = player.querySelector(".preview-audio");
  //   audio.pause();
  //   audio.currentTime = 0;
  // });
  // var clickedCard = event.target.closest(".card");
  // var audioPlayer = clickedCard.querySelector(".audio-player");
  // audioPlayer.style.display = "block";
  // var audio = audioPlayer.querySelector(".preview-audio");
  // audio.src = "./audios/" + audioPath;
  // audio.load();
  // audio.play();
}