import axios from 'axios'
import { useReducer } from 'react'

const reducer = (state, action) => {
  
    if(action.type === 'REQUEST') {
      return {
        ...state,
        loading: true
      }
    }
    if(action.type === 'SUCCESS') {
      return {
        ...state,
        loading: false,
        data: action.data
      }
    }
    return state
  }

const usePost = (url) => {
	const [data, dispatch] = useReducer(reducer, {
			loading: false,
			data: {}
	})
	const post = data => {
			dispatch({ type: 'REQUEST' })
			axios
			.post(url, data)
			.then(res => {
				dispatch({ type: 'SUCCESS', data: res.data })
				console.log(res.data)

			})
	}
	return [data, post]
}
export default usePost