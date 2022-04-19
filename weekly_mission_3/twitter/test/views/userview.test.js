const UserView = require('../../app/views/userView')

describe("Test for UserView",() =>{
    test("1) Return an error object when try createa new user with a Null payload",()=>{
        const payload=null
        const result=UserView.createUser(payload)
        expect(result.error).toMatch(/payload not found/)

    })
})

describe("Test for UserView",() =>{
    test("2) Return an error object when try createa new user with invalid properties",()=>{
        const payload={username:null,name:12,id:"id"}
        const result=UserView.createUser(payload)
        expect(result.error).toMatch(/invalid values/)

    })
})


describe("Test for UserView",() =>{
    test("3) Return an error object when try createa new user with invalid properties",()=>{
        const payload={username:"test"}
        const result=UserView.createUser(payload)
        expect(result.error).toMatch(/key missing/)

    })
})


describe("Test for UserView",() =>{
    test("4) Create user by a given valid payload",()=>{
        const payload={username:"test",name:'hector',id:1}
        const result=UserView.createUser(payload)
        expect(result.name).toBe('hector')
        expect(result.username).toBe('test')
        expect(result.id).toBe(1)
    })
})