import createReducers from '../utils/createReducers'
import Constants from '../utils/constants'

const initState = {
	struct: {
		metaType: 'layout',
	}
}

const designerHandler = {
	[Constants.PROPERTYCHANGE]: (state, action) => {
		return Object.assign({}, state, {
			loading: false,
			data: action.data,
		});
	},
	[Constants.STRUCTCHANGE]: (state, action) => {
		return Object.assign({}, state, {
			loading: false,
			data: action.data,
		});
	},
}


export default createReducers(initState, designerHandler);