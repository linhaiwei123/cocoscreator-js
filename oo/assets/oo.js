function Person(firstName){
    this.firstName = firstName;
}

Person.prototype.sayHello = function(){
   cc.log('hello~'+this.firstName);
};

cc.MyOO = module.exports = Person;