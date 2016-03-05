function Person(firstName){
    this.firstName = firstName;
}

Person.prototype.walk = function(){
    cc.log('I am walking!');
};

Person.prototype.sayHello = function(){
    cc.log('Hello, I`m ' + this.firstName);
};

//定义student构造器
function Student(firstName, subject){
    //调用父类构造器， 确保(使用Function#call)"this"在调用过程中设置正确
    Person.call(this,firstName);
    
    //初始化Student类特有属性
    this.subject = subject;
}

//建立一个由Person.prototype继承而来的Student.prototype对象
//注意： 常见的错误是使用 "new Person()"来建立Student.prototype
//这样做的错误之处有很多,最重要的一点是我们在实例化时
//不能赋予Person类任何的FirstName参数
//调用Person的正确位置如下, 我们从Student中来调用它
Student.prototype = Object.create(Person.prototype);

//设置'constructor'属性指向Student
Student.prototype.constructor = Student;

//更换'sayHello'方法
Student.prototype.sayHello = function(){
    cc.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
}

//加入'sayGoodBye'方法
Student.prototype.sayGoodBye = function(){
    cc.log('Goodbye');
};

cc.MySub = module.exports = Student;