 $("details").on("click", function() {
    $("details[open]")
        .not(this)
        .removeAttr("open");
        
});



$(document).ready(function () {
    $("form").submit(function (event) {
      event.preventDefault();
      var destination = $("#destinationInput").val();
      var newSrc =
        "https://maps.google.com/maps?q=" +
        encodeURI(destination) +
        "&output=embed";
      $("#mapFrame").attr("src", newSrc);
    });
  });


  jQuery(document).ready(function () {
    $('#myModal').on('shown.bs.modal', function () {
     $('#video1')[0].play();
   })
   $('#myModal').on('hidden.bs.modal', function () {
     $('#video1')[0].pause();
   })
 });

 


 var videosISTA = [
  {

      numero: 12,
      intitule: "ista ouarzazte",
      nombreFilier: 19,
      videosrc: "https://www.youtube.com/embed/eWI_-D9Z6gc?si=bSQqFOSl55gca8NF"

  }
  ,
  {

      numero: 16,
      intitule: "ista Zagora",
      nombreFilier: 20,
      videosrc: "https://www.youtube.com/embed/eWI_-D9Z6gc?si=bSQqFOSl55gca8NF"

  }

]

 
 function Afficher(Table, NumISTA) {
  nouveau=Table.filter(x => x.numero === NumISTA)
  return nouveau[0].videosrc
}

function lireVideo(Num){
  var sourceVideo=Afficher(videosISTA,Num)
$(".video").attr("src",sourceVideo)

     
}