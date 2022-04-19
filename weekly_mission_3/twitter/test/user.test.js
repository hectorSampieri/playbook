const User = require('../app/models/user.js')

describe ('Unit test from User Class',()=>{
    test('1) Create a user objet',()=>{
        const user= new User(1,"hectorSampieri","Hector","Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("hectorSampieri")
        expect(user.name).toBe("Hector")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})
describe ('Unit test from User Class',()=>{
    test('2) Add getters',()=>{
        const user= new User(1,"hectorSampieri","Hector","Bio")

        expect(user.getUsername).toBe("hectorSampieri")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLasUpdated).not.toBeUndefined()
    })
})

describe ('Unit test from User Class',()=>{
    test('3) Add setters',()=>{
        const user= new User(1,"hectorSampieri","Hector","Bio")
        user.setUserName="hectorSC"
        expect(user.getUsername).toBe("hectorSC")
        user.setBio ="New Bio"
        expect(user.getBio).toBe("New Bio")
    })
})