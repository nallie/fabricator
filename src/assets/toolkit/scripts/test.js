var $ = require('jquery');


function foo() {
	alert('bar');
};

function tableHide() {
	$('table').hide();
};

module.exports = { foo, tableHide };
