import axios from "axios";
 const LOGINSUCCESS = "LOGINSUCCESS"
 const LOGINFAILURE = "LOGINFAILURE"
//dashboard//
export const dashBoard = (token) => {
    return async dispatch => {
      const timePeroid = {
        "time_period" : "custom",
        "from" : "2022-08-01",
        "to" : "2022-08-18"
    }
    
      const res = await axios.post(`https://test.touchapp.in/admin/dashboard`, timePeroid, {
        headers:
        {
          "Authorization": `Bearer ${token}`
        }
  
      })
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: "DASH_BOARD",
          payload: res.data.data
  
        })
    
      }
    
    }
  }
  

  //login//
 


const baseURL = "https://test.touchapp.in"
export const loginFailure = (error) =>{
    return{
        type: LOGINFAILURE,
        payload:error
    }
}

export const loginAction =   (formData,navigate) => async(dispatch) => {
    console.log("action", formData)
    try{
        const response =  await axios.post(`${baseURL}/auth/admin/login`, formData)
        console.log("login response", response)
        if(response.data.status === 200){
            dispatch({ type:"LOGINSUCCESS", payload:response.data})
            navigate("/admin/dashboard")
        }
        return response
    }
    catch(error){
        dispatch(loginFailure(error))
        console.log("action login error", error)
    }

}
//leaderbaord//
export const leaderBoard = (token) => {
  return async dispatch => {
    const limit = {
      "limit" : 3,
      "offset" : 0
    
  }
  
    const resp = await axios.get(`https://test.touchapp.in/admin/leaderboard?limit=10&offset=0`, {
      headers:
      {
        "Authorization": `Bearer ${token}`
      }

    })
    console.log(resp);
    if (resp.status === 200) {
      dispatch({
        type: "LEADER_BOARD",
        payload: resp.data.data

      })
  
    }
  
  }
}
