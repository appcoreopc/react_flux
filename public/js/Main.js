import React from "react";
import API from "./API";
import LinkStore from "./stores/LinkStore"

let _getAppState = () => {
  return { links : LinkStore.getAll() };
};

export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = _getAppState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		API.fetchLinks();
		LinkStore.on("change", this.onChange);
	}

	onChange() {
		console.log('4. in the view');
		this.setState(_getAppState());
	}

	componentWillUnmount() { 
          LinkStore.removeListener("change", this.onChange);
	}

	render() {
		console.log('working out!!');
		console.log(this.state.links);
		let content = this.state.links.map(l => {
			return <li key={l._id}>  
				<a href='{l.url}'>{l.title} </a>
			</li>
		});	
		return <h3>lalalal : {content}</h3>;
	}
}
