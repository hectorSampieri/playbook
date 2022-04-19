const UserService= require('../../app/services/UserService')

describe("Test for User Service",()=>{
    test("1. Create a new user using the UserService",()=>{
        const user=  UserService.create(1,"hectorSC","Hector")

        expect(user.username).toBe("hectorSC")
        expect(user.name).toBe("Hector")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

})


describe("Test for User Service",()=>{
    test("2. Get all user data un a list",()=>{
        const user=  UserService.create(1,"hectorSC","Hector")
        const userInfoInList= UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("hectorSC")
        expect(userInfoInList[2]).toBe("Hector")
        expect(userInfoInList[3]).toBe("Sin Bio")
       
    })

})


describe("Test for User Service",()=>{
    test("3.Update Username",()=>{
        const user=  UserService.create(1,"hectorSC","Hector")
        UserService.updateUserName(user,"hectorSampieri")
        expect(user.username).toBe("hectorSampieri") 
    })    
})

describe("Test for User Service",()=>{
    test("4.Given list of user give me the list of usernames",()=>{
        const user=  UserService.create(1,"hectorSC","Hector")
        const user1=  UserService.create(1,"hectorSampieri","Hector")
        const user2=  UserService.create(1,"hectorSC2","Hector")
        const usernames= UserService.getAllUserNames([user,user1,user2])
        expect(usernames).toContain("hectorSampieri") 
        expect(usernames).toContain("hectorSC") 
        expect(usernames).toContain("hectorSC2") 
       
    })
})