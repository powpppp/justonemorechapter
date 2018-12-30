
Appcontext = {}
var modal = document.getElementById('myModal');
var myModalTxt = document.getElementById('myModalTxt');
var closeMdl = document.getElementsByClassName("closeMdl")[0];

Appcontext.init = function () {
	Appcontext._loading = document.getElementById('loading');
	Appcontext._bookContainer = document.getElementById('bookContainer');
	Appcontext.loadBooks();
	Appcontext.alertMessage();
}

Appcontext.alertMessage = function () {
	// window.onclick = function (event) {
	// 	if (event.target == modal) {
	// 		modal.style.display = "none";
	// 	}
	// }
	// closeMdl.onclick = function() {
	// 	modal.style.display = "none";
	// }
}

Appcontext.loadBooks = function () {
	if (Appcontext._bookContainer) {
		// Appcontext.emptyNode(Appcontext._bookContainer);
		for (var i in books) {
			var book = books[i];
			Appcontext._bookContainer.appendChild(Appcontext.createBook(book));
		}
	}
}

Appcontext.createBook = function (item) {
	var a = document.createElement("a");
	a.className = "grid__item";
	if (item.banner) {
		var banner = document.createElement("div");
		banner.className = 'corner-ribbon top-left sticky red shadow'
		banner.innerHTML = item.banner;
		a.appendChild(banner);
	}
	var h2 = document.createElement("h2");
	h2.className = "title title--preview";
	h2.innerHTML = item.name;
	a.appendChild(h2);
	var loader = document.createElement("div");
	loader.className = "loader";
	a.appendChild(loader);
	var category = document.createElement("span");
	category.className = "category";
	category.innerHTML = item.type;
	a.appendChild(category);
	var meta = document.createElement("div");
	meta.className = "meta meta--preview";
	a.appendChild(meta);
	var imgPath = item.images;
	var imgAlt = "author01";
	var date = item.status;
	var read = 0;
	if (item.chapters) read = item.chapters;
	var newChild = '<img class="meta__avatar" width="60px" height="60px" src="img/authors/' + imgPath + '" alt="' + imgAlt + '" /><span class="meta__date"><i class="fa fa-calendar-o"></i>' + read + ' chapters</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> ' + date + '</span>';
	meta.insertAdjacentHTML('beforeend', newChild);
	a.info = item;
	return a;
}

Appcontext.showLoading = function () {
	Appcontext._loading && Appcontext.removeClass(Appcontext._loading, 'hidden');
}

Appcontext.hideLoading = function () {
	Appcontext._loading && Appcontext.addClass(Appcontext._loading, 'hidden');
}

Appcontext.hasClass = function (ele, cls) {
	return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

Appcontext.addClass = function (ele, cls) {
	if (!Appcontext.hasClass(ele, cls)) ele.className += (' ' + cls);
}

Appcontext.removeClass = function (ele, cls) {
	if (Appcontext.hasClass(ele, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		ele.className = ele.className.replace(reg, ' ');
	}
}

Appcontext.emptyNode = function (node) {
	if ('innerHTML' in node) {
		try {
			node.innerHTML = ''; return;
		} catch (e) { }
	}
	for (var c; c = node.lastChild;) {
		node.removeChild(c);
	}
}

Appcontext.init();