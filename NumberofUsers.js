/*
Create a class named User and create a way to check the number of users (number of instances) that
 were created, so that the value can be accessed as a class attribute.

Examples
u1 = new User("johnsmith10")
User.userCount ➞ 1

u2 = new User("marysue1989")
User.userCount ➞ 2

u3 = new User("milan_rodrick")
User.userCount ➞ 3
Make sure that the usernames are accessible via the instance attribute username.

u1.username ➞ "johnsmith10"

u2.username ➞ "marysue1989"

u3.username ➞ "milan_rodrick"
*/
class NumberofUsers
{ 
    NumberofUsers()
    {
        let name
        var count=0;
    }
    setName=(name)=>{this.name=name;this.count=count+1}
    getName=()=>{return this.name}
    getcount=()=>{return this.count}
    
}
Users= new NumberofUsers()
Users.setName("Abhishek")
console.log(Users.getName())
console.log(Users.getcount())