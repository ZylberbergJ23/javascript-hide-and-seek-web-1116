function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.getElementById('app').querySelector('div#nested div div div div.target')
}

function deepestChild() {
	return document.getElementById('app').querySelector('div#grand-node div div div div')
}


function increaseRankBy(n) {
	const list =  document.querySelectorAll('ul.ranked-list li')
	for (let i=0; i < list.length; i++) {
		list[i].innerHTML = parseInt(list[i].innerHTML) + n
	}
}
