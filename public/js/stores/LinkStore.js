import AppDispatcher from "../AppDispatcher";
import { ActionTypes } from "../Constants";
import {EventEmitter} from "events";

let _links = [];

class LinkStore extends EventEmitter { 
	constructor(props)
	{
		super(props);
		AppDispatcher.register(action => {
			switch (action.actionType) {
				case ActionTypes.RECEIVE_LINKS: 
					_links = action.links;
					this.emit("change");
					console.log('in store');
				break;
					// 
				default:

			};
		});
	}
	getAll() { 

		return _links;
	}
}

// self init here
export default new LinkStore();