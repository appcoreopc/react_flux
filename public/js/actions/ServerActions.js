import AppDispatcher from "../AppDispatcher";
import { ActionTypes } from "../Constants";

let ServerActions = { 
  	receiveLinks(link) {
  		console.log('calling app dispatcher!');
  		AppDispatcher.dispatch({actionType : ActionTypes.RECEIVE_LINKS , link});
  	}
};

export default ServerActions; 


