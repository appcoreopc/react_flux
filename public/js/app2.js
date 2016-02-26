var React = require("react");
var ReactDOM = require("react-dom");

// var Hello = React.createClass({
// 	render : function() {
// 		return React.createElement("h3", null, "Hello React from far away!!");
// 	}
// });

var Hello = React.createClass({
	render : function() {
		return <h3> hello there </h3>
	}
});

//ReactDOM.render(React.createElement(Hello), document.getElementById('container'));
ReactDOM.render(<Hello />, document.getElementById('container'));