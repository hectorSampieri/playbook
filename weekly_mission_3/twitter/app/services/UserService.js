const User= require('../../app/models/user')

class UserService{
    static create (id,username,name){
        return new User(id,username,name,"Sin Bio")
    }
    static getInfo (user){
        const listValues= Object.keys(user).map(function(key){
            return  user[key]
        })
        return listValues
    }

    static updateUserName(user,newUsername){
        user.username=newUsername
    }

    static getAllUserNames (users){
        const listAllUserNames= users.map(function(user){
            return  user.username
        })
        console.log(listAllUserNames)
        return listAllUserNames
    }
}

module.exports = UserService