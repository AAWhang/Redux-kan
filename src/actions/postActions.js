import { FETCH_POSTS} from './types'

export const fetchPosts = () => dispatch => {
    fetch("https://api.kanye.rest/")
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
      }))
}
