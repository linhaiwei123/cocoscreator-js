//加载类
//require('oo');
//require('sub');
//require('myClass');
//require('mySubClass');
//require('getsetClass');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {
        
        //this.ooTest();
        
        //this.subTest();  
        
        // var point = new cc.MyPoint(2,3);
        // console.log(point);
        // console.log(cc.MyPoint.name);
        
        // var colorPoint = new cc.MyColorPoint(2,3,'red');
        // console.log(colorPoint);
        // console.log(cc.MyColorPoint.name);
        
            // let getsetinstance = new cc.MyGetSetClass();
            
            // console.log(getsetinstance.prop);
            // getsetinstance.prop = 123;
            
        

            
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
