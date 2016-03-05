cc.Class({
    extends: cc.Component,

    properties: {
    },

    
    onLoad: function () {
        
        //创建一个数组
        let fruits = ['Apple','Banana'];
        
        console.log(fruits.length);
        
        //通过索引访问数组
        let first = fruits[0];
        let last = fruits[fruits.length - 1];
        console.log(first);
        console.log(last);
        
        //循环遍历一个数组
        fruits.forEach(function(item,index,array){
            console.log(item,index);
        });
        
        //添加到数组的末尾
        var newLength = fruits.push('Orange');
        console.log(newLength);
        fruits.forEach(function(item,index,array){
            console.log(item,index);
        });
        
        //删除数组末尾的
        var last2 = fruits.pop();
        console.log(last2);
        fruits.forEach(function(item,index,array){
            console.log(item,index);
        });
        
        //删除数组前面的
        var first2 = fruits.shift();
        console.log(first2);
        
        //添加到数组的前面
        var newLength = fruits.unshift('Strawberry');
        console.log(newLength);
        fruits.forEach(function(item,index,array){
            console.log(item,index);
        });
        
        //找到某个元素在数组中的索引
        fruits.push('Mango');
        
        var pos = fruits.indexOf('Banana');
        console.log(pos);
        
        //通过索引位置删除元素
        var removedItem = fruits.splice(pos, 1);
        console.log(removedItem);
        fruits.forEach(function(item,index,array){
            console.log(item,index);
        });
        
        //复制一个数组
        var shallowCopy = fruits.slice();
        console.log(shallowCopy.toString());
        
        //length和数字下标属性之间的关系
        fruits = [];
        fruits.push('banana','apple','peach');
        console.log(fruits.length);
        
        //当你在array上使用了一个合法的数组下标，而且该下标超出了当前数组的大小的时候
        //引擎会根据其值自动更新array的length属性
        fruits[5] = 'mango';
        console.log(fruits[5]);  //'mango'
        console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
        console.log(fruits.length); // 6
        
        //增大length
        fruits.length = 10;
        console.log(Object.keys(fruits));
        console.log(fruits.length);
        
        //减小array的length属性会删掉超出的元素
        fruits.length = 2;
        console.log(Object.keys(fruits));
        console.log(fruits.length);
        
        //Array.from()
        //从类数组或者迭代对象中创建一个新的数组实例
        let likeArray = Array.from({0:'a',1:'b',2:'c',length:4});
        console.log(likeArray);
        
        //Array.of()
        let getArray = Array.of(1,3,2,4);
        console.log(getArray);
        
        //Array.copyWithin()
        let copyArray = getArray.copyWithin(0,2);
        console.log(copyArray);
        
        let copyArray2 = getArray.copyWithin(0,3,4);
        console.log(copyArray2);
        console.log(getArray);
        
        let copyArray3 = getArray.copyWithin(-2,-3,-2);
        console.log(copyArray3);
        
        let copyArray4 = [].copyWithin.call({length:5,3:1},0,3);
        console.log(copyArray4);
        
        //Array.fill()
        let fillArray = [1,2,3].fill(4);
        console.log(fillArray);
        let fillArray1 = [1,2,3].fill(4,1);
        console.log(fillArray1);
        let fillArray2 = [1,2,3].fill(4,1,2);
        console.log(fillArray2);
        let fillArray3 = [1,2,3].fill(4,-3,-2);
        console.log(fillArray3);
        let fillArray4 = Array(3).fill(4);
        console.log(fillArray4);
        let fillArray5 = [].fill.call({length:3},4);
        console.log(fillArray5);
        
        //Array.reverse
        let myArray = ['one','two','three'];
        let reverseArray = myArray.reverse();
        console.log(reverseArray);
        
        //Array.concat
        let alpha = ['a','b','c'];
        let num = [1,2,3];
        console.log(alpha.concat(num));
        
        //Array.includes
        console.log([1,2,3].includes(2));
        console.log([1,2,3].includes(4));
        console.log([1,2,3].includes(3,3));
        console.log([1,2,3].includes(3,-1));
        
        //Array.join
        let a = ['wind','Rain','Fire'];
        console.log(a.join());
        console.log(a.join(', '));
        console.log(a.join(' + '));
        console.log(a.join(''));
        
        //Array.slice
        
        let fruits2 = ['Banana','Orange','Lemon','Apple','Mango'];
        let citurs = fruits2.slice(1,3);
        
        console.log(citurs);
        
        let list = function(){
            return Array.prototype.slice.call(arguments);
        }
        
        var list1 = list(1,2,3);
        console.log(list1);
        
        //Array.entries
        var arr = ['a','b','c'];
        var eArr = arr.entries();
        

        console.log(eArr.next());
        console.log(eArr.next().value);
        console.log(eArr.next().value);
        
        //Array.every
        let isBigEnough = function(item,index,array){
           return (item >= 10);  
        };
        
        console.log([12,5,8,130,44].every(isBigEnough));
        console.log([12,54,18,130,44].every(isBigEnough));
        
        //Array.some
        console.log([12,5,8,130,44].some(isBigEnough));
        
        //Array.filter
        console.log([12,5,8,130,44].filter(isBigEnough));
        
         //Array.find
        console.log([12,5,8,130,44].find(isBigEnough));
        
         //Array.findIndex
        console.log([12,5,8,130,44].findIndex(isBigEnough));
        
          //Array.keys
        let iterator = [1,2,3,4,5].keys();
        
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        
        //Array.map
        console.log([5,11,23,9].map(isBigEnough));
        
        //Array.reduce
        console.log([0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
                return previousValue + currentValue;
        }, 10));
        
        //Array.reduceRight
        console.log([0,1,2,3,4].reduceRight(function(previousValue, currentValue, index, array){
                return previousValue + currentValue;
        }, 3));
        
        
        // var arrz = ['w','y','k','o','p'];
        // var eArr2 = arrz.values();
        // for(let letter of eArr2){
        //     console.log(letter);
        // }  未实现
        
        //Map()
        var myMap = new Map();
        
        var keyObj = {},
            keyFunc = function(){},
            keyString = 'a string';
            
        //添加键
        myMap.set(keyString, '和键a string关联的值');
        myMap.set(keyObj, '和键keyObj关联的值');
        myMap.set(keyFunc, '和键keyFunc关联的值');
        
        console.log(myMap.size);
        
        console.log(myMap.get(keyObj));
        console.log(myMap.get(keyFunc));
        console.log(myMap.get(keyString));
        
        //Set()
        var mySet = new Set();
        
        mySet.add(1);
        mySet.add(5);
        mySet.add('some text');
        
        console.log(mySet.has(1));
        console.log(mySet.has(3));
        console.log(mySet.has(5));
        console.log(mySet.has("Some Text".toLowerCase()));
        
        console.log(mySet.size);
        
        mySet.delete(5);
        console.log(mySet.has(5));
        
        console.log(mySet.size);
        
        

        
        
    },

});
