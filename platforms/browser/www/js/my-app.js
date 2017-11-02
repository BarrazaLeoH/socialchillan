// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

$$('.open-right-panel').on('click', function (e) {
        // 'right' position to open Right panel
        myApp.openPanel('right');
    });
 
$$('.panel-close').on('click', function (e) {
        myApp.closePanel();
});

$$("#log").on("click",function(e){
	document.location="Login.html";
});

$$("#reg").on("click",function(e){
	document.location="Register.html";
});

//funcion para cambiar de pantalla
//document.location="main.html";

// Add view
var mainView=myApp.addView('.view-main',{
	dynamicNavbar:true
});
myApp.onPageInit('about',function(page){
	$$('.create-page').on('click',function(){
		createContentPage();
	});
});
var dynamicPageIndex=0;function createContentPage(){
	mainView.router.loadContent('<!-- Top Navbar-->'+'<div class="navbar">'+' <div class="navbar-inner">'+'    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>'+'    <div class="center sliding">Dynamic Page '+(++dynamicPageIndex)+'</div>'+'  </div>'+'</div>'+'<div class="pages">'+'  <!-- Page, data-page contains page name-->'+'  <div data-page="dynamic-pages" class="page">'+'    <!-- Scrollable page content-->'+'    <div class="page-content">'+'      <div class="content-block">'+'        <div class="content-block-inner">'+'          <p>Here is a dynamic page created on '+ new Date()+' !</p>'+'          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>'+'        </div>'+'      </div>'+'    </div>'+'  </div>'+'</div>');
	return;
}



$$(document).on('deviceready',initapp);

function initapp(){

}

