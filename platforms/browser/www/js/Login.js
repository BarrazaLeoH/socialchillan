// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

$$("#backl").on("click",function(e){

	document.location="index.html";
	
});

function initapp(){

  $$("#iniciar").on("click", click_btn);

}

function click_btn(){
  console.log("click");
  var usuario = $$('#username').val();
  var pass = $$('#password').val();

  	$$.ajax({
		url: 'http://servicioswebmoviles.hol.es/index.php/LOGIN_UBB',
		method: 'POST',
		dataType: 'json',
		data: {
			login: usuario,
			pass: pass
		},
		success: function(data){
		if(data.resp){
			console.log('login exitoso');
			document.location="main.html";
		}else{
			console.log('datos incorrectos');
			myApp.alert('Datos Incorrectos!',"ERROR!");
		}
		},
			error: function(){
			myApp.alert('Datos Incorrectos!',"ERROR!");
		}
	})

}

