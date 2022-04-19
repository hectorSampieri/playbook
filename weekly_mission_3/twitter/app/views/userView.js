const UserService= require('../../app/services/UserService')

class UserView{
    static createUser (payload){
        const keys =[`username`,'id','name']
        if (payload === null){
           return {error:"payload not found"}
        }
        if( Object.keys(payload).some(key => payload[key] === null)){
            return {error:"invalid values"}
        }
        if(!keys.every(key=>Object.keys(payload).includes(key))){
            return {error:"key missing"}
        }
      
        const user = UserService.create(payload.id,payload.username,payload.name)
        return {id:user.id,username:user.username,name:user.name}

    }

   
}

module.exports = UserView