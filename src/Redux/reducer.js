const userInitialState={
   loginData:{},
    error:{},
    dashBoard:[],
    leaderBoard:[]
 }
 export const reducer=(state=userInitialState,action)=>{
   switch(action.type){
    case "DASH_BOARD":
       return{
          ...state,
          dashBoard:action.payload
       }

       case "LEADER_BOARD":
       return{
          ...state,
          leaderBoard:action.payload
       }
       case "LOGINSUCCESS":
         return{
             ...state,
             loginData:action.payload,
             error:""
         }
     case "LOGINFAILURE":
         return{
             ...state,
             loginData:"",
             error:action.payload
         }
       default:
        return state;
  
 }
}