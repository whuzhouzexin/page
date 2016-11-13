 var Vue = require("./vue");
 console.log("module is init");
 new Vue({
 	el: "#page",
 	data: {
 		list: [{
 			name: "page1"
 		},{
 			name: "page2"
 		}]
 	}
 })