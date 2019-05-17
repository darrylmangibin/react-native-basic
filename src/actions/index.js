import { FETCH_LIST } from './types';
import axios from 'axios';

export const fetchList = () => {
  return (dispatch) => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => {
      dispatch({
        type: FETCH_LIST,
        payload: response.data
      })
    })
  }
}