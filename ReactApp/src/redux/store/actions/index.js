 

export default {


    increase:{
        type: 'increase'  
    },

    increaseAsync:function(dispatch,getState){ 
         
        return function(dispatch){
            var timer = setTimeout(function(){

                clearTimeout(timer);
    
                dispatch({
                    type: 'increase' 
                }); 
               
            },1000);
        }

      
    }
}