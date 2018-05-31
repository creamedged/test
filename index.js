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

$('pop').style.height = getWidthHeight().h + 'px';
$('pop').onclick = function() {
	$('pop').style.display = "none"
};
for (var i = 1; i < $('list').children.length; i++) {
    $('list').onclick = function (event){
        var el = el || window.event;
        var tag = el.target || el.srcElement;
        if (tag.nodeName.toLowerCase() == 'a'){
            $('pop').style.display = "block"
        }
    }
};

var aa = new Slide('.list',{});