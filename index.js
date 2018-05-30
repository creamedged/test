var getWidthHeight = function() {
	return {
		w: document.documentElement.offsetWidth,
		h: document.documentElement.clientHeight
	}
};
var $ = function(id) {
	return document.getElementById(id)
};
$('logo').style.height = getWidthHeight().h + 'px';
$('list').style.height = getWidthHeight().h + 'px';
var items = document.getElementsByClassName('list')[0].children;
for (var i = 0,len = items.length;i < len; i++){
    items[i].style.height = getWidthHeight().h + 'px';
}
/*
$('navList').style.height = getWidthHeight().h + 'px';
$('closed').onclick = function() {
	$('navList').style.display = "none"
};
var oLi = $('navList').getElementsByTagName('li');
for (var i = 0; i < oLi.length; i++) {
	oLi[i].onclick = function() {
		$('navList').style.display = "none"
	}
};
$('navBtn').onclick = function() {
	$('navList').style.display = "block"
}

$('navList').onclick = function (event){
    var event = event || window.event;
    var target = event.target || event.srcElement;
    if(target.nodeName.toLowerCase() === 'a'){
        var x=-event.target.dataset.n*getWidthHeight().h
        $('list').style.webkitTransform = 'translate3d( 0,'+x+'px, 0)';
    }
}
*/
var aa = new Slide('.list',{});