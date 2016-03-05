//加载类
//require('oo');
//require('sub');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {
        
        //this.ooTest();
        
        //this.subTest();  
        
        
    },
    
    subTest:function(){
        let student1 = new cc.MySub('linhaiwei123','css');
        
        student1.sayHello();
        student1.sayGoodBye();
        student1.walk();
    },
    
    ooTest:function(){
         //我们的第一个类实例
        let person1 = new cc.MyOO('linhaiwei123');
        
        // person1.sayHello();
        
        //第二个=.=
        let person2 = new cc.MyOO('cocoscreator');
        
        // person2.sayHello();
        
        //prototype函数绑定实例对象
        var helloFunction = person2.sayHello;
        
        helloFunction.call(person1);
    }

});
