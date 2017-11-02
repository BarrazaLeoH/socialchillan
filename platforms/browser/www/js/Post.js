// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});


$$(document).on('deviceready',camera);

function camera(){
  $$('#btn').on('click',tomarfoto);
  $$('#load').on('click',publicar);


}
function tomarfoto(){
  console.log("Dispositivo listo");
  navigator.camera.getPicture(onSuccess, onFail,{
        sourceType: 0,
        quality: 50,
        destinationType: 1,
        allowEdit: false,
        correctOrientation: true,
        saveToPhotoAlbum: true
  });
}

function publicar(){
  
}

function onSuccess(imageURI){
  $$('#foto').attr('src',imageURI);
}

function onFail(message){
  console.log('Failed Because: '+message);
}


