// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

$$("#backr").on("click",function(e){
  document.location="index.html";
});

function click_btn(){
  var name = $$('#nombre').val();
  var nick = $$('#apellido').val();
  var company = $$('#email').val();
  var email = $$('#username').val();
  var pass = $$('#password').val();


  myApp.showPreloader("Registrando");

  if(name.length > 0 && nick.length > 0 && company.length > 0 && email.length > 0 && pass.length > 0){
      //Inicio de servicios web
    $$.ajax({
      url:'http://servicioswebmoviles.hol.es/index.php/REGISTER_UBB',
      method: 'POST',
      dataType: 'json',
      data: {
              name: nombre,
              nickname: nick,
              mail: email,
              login: nick,
              pass: pass
      },
      success: function(data){
              myApp.hidePreloader();
              if(data.resp){
                      myApp.alert("Hola "+data.data.nombre ,"Exito!"{
                        myApp.closeModal('.login-screen',true);
                      });
              }else{
                      myApp.alert(data.info,"Error!, intente nuevamente");
              }
      },
      error: function(){
                myApp.hidePreloader();
                myApp.alert("El WS no ha respondido","Error!");
      }
    });  
  }else{
    myApp.hidePreloader();df
    myApp.alert("Debe llenar los campos solicitados","ERROR!");
  }

}
