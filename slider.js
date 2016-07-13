(function(){
  
var compteur = 0 // compteur à 0//
    $currentImage = document.querySelectorAll('.slider figure'), // selectionne l'ensemble des images//
    numImage = $currentImage.length; // calcul automatique du nombre de slides//

var currentImage = function(){
  var imageToShow = Math.abs(compteur%numImage); //valeur absolue de l'image selon sa place dans le slide//
  
  [].forEach.call( $currentImage, function(el){
    el.classList.remove('show');
  });
  
  $currentImage[imageToShow].classList.add('show');    
};

document.querySelector('.next').addEventListener('click', function() {
     compteur++; //img suivante//
     currentImage();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     compteur--;//img précédente//
     currentImage();
  }, false);
  
})();