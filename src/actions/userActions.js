//will serve normal, non-token issues
import axios from 'axios';
//will serve protected routes
import axiosWithAuth from './../utils/axiosWithAuth';

//axios.post -- register new user
export const registerNewUser = (newUser) => {
   return (dispatch) => {
       dispatch(fetchStart('CREATING new user'));
      //  console.log('FETCHING new user')
       //dispatch({type:FETCH_START})
       axios.post('http://buildweekpotlucklambda.herokuapp.com/api/users/register', newUser)
         .then(res=> {
            dispatch(console.log(res))
            dispatch(console.log(newUser))
           dispatch(fetchSuccess(res.data));
         //   dispatch({type:FETCH_SUCCESS, payload:res.data})
       })
       .catch(err => {
           dispatch(fetchFail(err));
           //dispatch({type:FETCH_ERROR, payload:err})
       });
   }
}

//axios.get = getUsers --- will we need a getUsers //? maybe not rn
export const getUsers = () => {
   return (dispatch) => {
      console.log('GETTING new users')
       dispatch(fetchStart());
       //dispatch({type:FETCH_START})
       axiosWithAuth().get('http://buildweekpotlucklambda.herokuapp.com/api/users')
         .then(res=> {
            console.log(res)
         //   dispatch(fetchSuccess(res.data.results[0]));
           //dispatch({type:FETCH_SUCCESS, payload:res.data.results[0]})
       })
       .catch(err => {
          console.error(err)
         //   dispatch(fetchFail(err));
           //dispatch({type:FETCH_ERROR, payload:err})
       });
   }
}

//axios.put = editUser --- will need for an //?edit user form


//axios.post  -- login
export const userLogin = (credentials) =>{
   return (dispatch) => {
      console.log('GETTING new users')
      dispatch(fetchStart());
      //dispatch({type:FETCH_START})
      axios.post('https://buildweekpotlucklambda.herokuapp.com/api/users/login', credentials)
         .then(res => {
            // console.log(res)
           dispatch(fetchSuccess(localStorage.setItem('token', res.data.token)));

         //   dispatch(fetchSuccess('this is my user'));
           //dispatch({type:FETCH_SUCCESS, payload:res.data.results[0]})
       })
       .catch(err => {
         //  console.error({ err })
           dispatch(fetchFail(err));
           //dispatch({type:FETCH_ERROR, payload:err})
       });
   }
}


export const FETCH_START = 'FETCH_START';
export const fetchStart = () =>{
   return ({ type: FETCH_START})
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (user) =>{
   return ({ type: FETCH_SUCCESS, payload: user})
}

export const FETCH_FAIL = 'FETCH_FAIL';
export const fetchFail = (errorMessage) =>{
   return ({ type: FETCH_FAIL, payload: errorMessage})
}