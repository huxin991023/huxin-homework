// var a = 10;
// console.log(a);

//循环
// for(var i=0;i<10;i++){
//     console.log('循环体中：'+i);
// }
// console.log('循环体外：'+i);


//数组
// let [a,b,c,d] = [1,2,3];
// console.log(a);
// console.log(d);

// let = [a,b="hx"] = ['胡鑫',undefined];
// console.log(a+b);

// let [a,b="hx"]=['胡鑫',null];
// console.log(a+b);

// let{foo,bar} = {bar:'胡鑫',foo:'hx'};
// console.log(foo+bar);

// let foo;
//  {foo}={foo:'hx'};  //错误使用方法 注意注意注意！！！！！！！！！！
// ({foo}={foo:'hx'});
// console.log(foo);

// const [a,b,c,b] = 'hx';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// function taiji(...arg) {
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);

// let arr1 = ['www','taiji','com'];
// let arr2 = arr1;
// let arr2 = [...arr1];
// console.log(arr2);
// arr2.push('hx');
// console.log(arr2);
// console.log(arr1);

//rest
// function taiji(first,...arg){
//     console.log(arg.length);
//     // console.log(first);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

// //如何循环输出rest运算符
// function taiji(first,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);


//5.字符串模
//ES5字符串拼接的例子
//字符连接方法
// let hx = 'hx';
// let xh2 = 'hx2';
// let blog = '哦豁'+zz+'不得了';
// let blog2 = `<br>柑橘不错</br>，很可以${zz2}`;
// document.write(blog);
// document.write(blog2);

//字符串查找
//ES5的写法
// let hx = '胡鑫';
// let blog = '非常高兴你能看到这篇文章';
// document.write(blog.indexOf(hx));
// //ES6直接用includes就可以判断，不再返回索引值
// document.write(blog.includes(hx));
// //判断开头是否存在
// document.write(blog.startsWith(hx));
// //判断结尾是否存在
// document.write(blog.endsWith(hx));

//复制字符串
// document.write('*',repeat(3));

//如何判断是否是数字
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('hx'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

//ES5 判断NaN
// console.log("***************");
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('taiji'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2'));
// console.log("#####################")
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('taiji'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2'));

//判断是否是整数
// let a = 98.1;
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

//整数取值范围操作
// let hx = Math.pow(2,53)-1;
// console.log(hx);
// //最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);
// //最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);
// //安全整数的判断isSafeInteger（）
// console.log(Number.isSafeInteger(hx));

// let json = {
//     '0':'hx',
//     '1':'胡鑫',
//     '2':'散工一枚',
//     length:3
//     //length必须写
// }
// console.log(json);
// //吧json数组转换成array Arra.from方法
// let arr = Array.from(json);
// console.log(arr);

// //Array.of方法
// let arr = Array.of(3,4,5,6);
// console.log(arr);

// let arr = Array.of('太极','胡鑫','123456');
// console.log(arr);

// //find()方法
// let arr = [1,2,3,4,5,6,7,8];
// var v = arr.find((value,index,arr)=>{
//     //return value >4;
//     return index >4;
// });
// console.log(v);

// //findIndex()方法
// let arr1 = [1,2,3,4,5,6,7,8];
// var i = arr1.findIndex((value) => value >4);
// console.log(i);

//filter()方法 不同之处在于filter返回的数组
// let arr2 = [1,2,3,4,5,6,7,8];
// var a = arr2.filter((value) => value >4);
// console.log(arr2);

//数组去重
// var myArr = [1,3,4,5,6,3,7,4];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

//fill
// let arr=['lj','梁娟','太极公司','你好'];
// arr.fill('web',1,3);
// console.log(arr);
//fill左闭右开

//数组循环
// let arr = ['lj','梁娟','太极'];
// for(let index of arr.keys()){
//     console.log(index);
// }

//同时输出数组的内容和索引：我们用entries()这个实力方法,配合我们的for...of循环
// let arr=['lj','梁娟','太极公司'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// } 

//entries方法,切分数组
// let arr=['lj','梁娟','太极公司'];
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log('**************');
// console.log(list.next().value);
// console.log('&&&&&&&&&&&&&&&');
// console.log(list.next().value);
// console.log('$$$$$$$$$$$$$$$');

//ES6箭头函数
//首先是Es5中的写法
// 'use strict'
// function add(a,b=1){
//     // 'use strict'
//     if(a === 0){
//         throw new Error('This is error');
//     }
//     return a+b;
// }
// console.log(add(1));
// console.log(add.length);
//此处获得的参数的个数是必须传递参数的个数,如果默认自测不计入其内
//有严谨模式'use strict'函数有默认值的时候是不行的

// //默认值 es6箭头函数
// var add=(a,b=2) => a+b;
// console.log(add(1));

// //超过两句话就要加大括号，并且大括号里面不能new
// var add=(a,b=2)=>{
//     console.log('taiji');
//     return a+b;
// }
// console.log(add(1));

//对象的函数解析
// let json = {
//     a:'hx',
//     b:undefined
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);

//数组的函数结构
// let arr = ['lj','梁娟','太极'];
// function fun(a,b,c,d){
//     console.log(a,b,c,d);
// }
// fun(...arr);

//in的用法 用来判断对象数组中是否存在某个值
// let obj = {
//     a:'lj',
//     b:'梁娟'
// }
// // // // // c指key
// console.log('c' in obj);

//数组判断
// let arr = [,,,];
// console.log(arr.length); //3
// console.log(arr[0]);
// console.log(0 in arr); // false
// // // 注意：这里的0指的是数组下标位置是否为空
// let arr1 = ['lj','梁娟'];
// console.log(0 in arr1);//true
// console.log(0 in arr);


//数组遍历 forEach
// let arr = ['lj','梁娟','太极'];
// arr.forEach((val,index)=>console.log(index,val));

//数组遍历 filter :有循环的功能
// let arr = ['lj','梁娟','太极'];
// arr.filter(x => console.log(x));

// 数组遍历 some
// let arr = ['lj','梁娟','太极'];
// arr.some(x => console.log(x));

//数组遍历 map替换
// let arr = ['lj','梁娟','太极'];
// console.log(arr.map(x => 'map'));

//数组转换成字符串
// let arr = ['lj','梁娟','太极'];
// console.log(arr.toString);
// console.log(arr.join(' | '));

//对象
//对象赋值
// let name = '胡鑫';
// let skill = 'web';
// var obj = {name,skill};
// console.log(obj);

//key值的构建
// let key = "skill";
// var obj = {
//     [key]:'web'
// }
// console.log(obj.skill);

//自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));

//Object.is() 对象比较
//is()
// let obj1={name:"lj"};
// let obj2 = {name:"lj"};
// console.log(obj1.name === obj2.name);
// console.log(Object.is(obj1.name,obj2.name));

//===同值相等 is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

//assign
// let a = {a:'lj'};
// let b = {b:"梁娟"};
// let c = {c:'web'};
// let d = Object.assign(a,b,c);
// console.log(d);
  
//Symbol

// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// let f = Symbol();
// console.log(typeof(f));

//Symbol的打印
// let lj = Symbol("梁娟");
// console.log(lj);
// console.log(lj.toString);

//Symbol在对象中的应用
// let lj = Symbol();
// let obj = {
//     [lj]:'梁娟'
// }
// console.log(obj[lj]);

//Symbopl对象元素的保护作用
// let obj = {name:'lj',skill:'web',age:18};
// for(let item in obj){
//     console.log(obj[item]);
// }
// let obj = {name:'lj',skill:'web'};
// let age = Symbol();
// obj[age] = 18;
// console.log(obj);

//set的实现
// let setArr = new Set(['lj','梁娟','web','梁娟']);
// setArr.add('前段技术');
// console.log(setArr); 
// // setArr.clear(); // 删除全部
// setArr.delete('web');//删除一个
// console.log(setArr);

//循环输出
// for(let item of setArr){
//     console.log(item);
// }

//forEach
// setArr.forEach((value)=>console.log(value));

// let weakObj = new WeakSet();
// let obj = {a:'lj',b:'梁娟'};
// weakObj.add(obj);
// console.log(weakObj);

//  const s = new Set();

//  [2,3,5,4,5,2,2].forEach(x => s.add(x));
//  console.log('s' + s);
//  for(let i of s){
//      console.log(i);
//  }

//map数据类型
// json
// let json={
//     name:'lj',
//     skill:'web'
// };
// console.log(json.name);

// var map = new Map();
// map.set(json,'i am');
// console.log(map);
// console.log(map.get(json));
// // map.delete(json);
// // console.log(map);
// console.log(map.size);

//has 只能判断key
// console.log(map.has(json));
// console.log(map.has('I am'));

//map转成数组
// const myMap = new Map()
//     .set(true, 7)
//     .set({ foo: 3 }, ['hx']);
// const arr = [...myMap];
// console.log(arr);

//Proxy预处理  改变对象默认方法
// let obj = {
//     add:function(val) {
//         return val+100;
//     },
//     name:'hx'
// }
// console.log(obj.add(12));
// console.log(obj.name);

// const employee = {
//     firstname: 'h',
//     lastname: 'x'
// };
// console.group('employee');
// console.log(employee.firstname);
// console.log(employee.lastname);
// console.log(employee.org);
// console.log(employee.fullname);
// console.groupEnd();

// let handler = {
//     get: function (target, fieldName) {  //target是目标对象

//         if (fieldName === 'fullName') {
//             return `${target.firstname} ${target.lastname}`;
//         }

//         return fieldName in target ?
//             target[fieldName] : `No such property as, '${fieldName}'!`
//     }
// };
// let p = new Proxy(employee, handler);
// console.group('proxy');
// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.org);
// console.log(p.fullName);

//改变set方法
// const validator = {
//     set: function (obj, prop, value) {
//         if (prop === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError('Age is always an Integer, Please Correct it!');
//             }
//             if (value < 0) {
//                 throw new TypeError('This is insane, a negative age?');
//             }
//         }
//     }
// };

//get-set
// let pr = new Proxy(employee, validator);
// pr.age = 12;

// var pro = new Proxy({
//     add: function (val) {
//         return val + 100
//     },
//     name: 'I am hx',
// }, {
//     //get
//     get: function (target, key, property) {
//         console.log('Get方法' + target[key]);
//         return target[key];
//     },
//     set: function (target, key, value, recriver) {
//         console.log(` setting ${key} = ${value}`);
//         return target[key] = value + '12';
//     }
// });
// console.log(pro.add(3));
// console.log(pro.name);
// pro.name = '胡鑫';
// console.log(pro.name);

//apply的使用
// let target = function (val) {
//     console.log('I am zz');
//     return val += 100
// }
// let handler = {
//     apply(target, ctx, args) {
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro = new Proxy(target, handler);
// console.log(pro(12));

//promise对象
//一个事务：resolved完成态、rejected失败态、pending未完成态
//只有一步的操作，不可逆反，状态确定就不可更改
// let state = 1;
// function step1(resolve, reject) {
//     console.log('1.开始-洗菜做饭');
//     if (state == 1) {
//         resolve('洗菜做饭完成')
//     } else {
//         reject('洗菜做饭-错误')
//     }
// }
// // // // //
// function step2(resolve, reject) {
//     console.log('2.开始-坐下来吃饭');
//     if (state == 1) {
//         resolve('坐下来吃饭')
//     } else {
//         reject('坐下来吃饭-错误')
//     }
// }
// // //
// function step3(resolve, reject) {
//     // state = 0;
//     console.log('3.开始-收拾桌子');
//     if (state == 1) {
//         resolve('收拾桌子')
//     } else {
//         reject('收拾桌子-错误')
//     }
// }
// // // //
// new Promise(step1).then(function (val) {
//     console.log(val);
//     return new Promise(step2);
// }).then(function (val) {
//     console.log(val);
//     return new Promise(step3);
// }).then(function (val) {
//     console.log(val);
// });

//class 类的声明、实例化、使用
class Coder {
    name(val) {
        console.log(val);
        return val;
    }

    skill(val) {
        console.log(this.name('胡鑫') + ':' + 'skill-' + val);
    }

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add(val) {
        return this.a + this.b;
    }
}
zz = new Coder(11, 12);
console.log(zz.add());

// let zz2 = new Coder;
// zz2.name('zz');
// zz2.skill('web');

// let zz = new Coder;
// zz.name('胡鑫');

//类的继承
class htmler extends Coder {
    
}


