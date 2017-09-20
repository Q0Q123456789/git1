import axios from "axios";
var ajax={
    
        
    
        quire:function(type,url,data,callback){
            axios({
                method:type,
                url:url,
                data:data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                } 
            }).then(function(res){
                callback(res)
            })
        }
       
            
        
    
    }
    
    export default ajax;
    
    
    