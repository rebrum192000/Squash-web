var modal = document.querySelector('.modal');
var modalShadow = document.querySelector('.shadow');
var mOpenBtn = document.querySelector('.first--btn');
var mOpenBtn2 = document.querySelector('.play--btn');
var mOpenBtn3 = document.querySelector('.sect10__book');
var mCloseBtn = document.querySelector('.modal--close-btn');

mOpenBtn.onclick = function() {
	modal.setAttribute("style", "display:block");
	modalShadow.setAttribute("style", "display:block");
};
mOpenBtn2.onclick = function() {
	modal.setAttribute("style", "display:block");
	modalShadow.setAttribute("style", "display:block");
};
mOpenBtn3.onclick = function() {
	modal.setAttribute("style", "display:block");
	modalShadow.setAttribute("style", "display:block");
};
mCloseBtn.onclick = function() {
	modal.setAttribute("style", "display:none");
	modalShadow.setAttribute("style", "display:none");
};	
modalShadow.onclick = function() {
	modal.setAttribute("style", "display:none");
	modalShadow.setAttribute("style", "display:none");
};	