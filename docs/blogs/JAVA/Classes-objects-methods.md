---
title: 类和对象、方法
date: 2022-06-26
tags:
- JAVA
categories:
- JAVA
---

- 类和对象内存分配机制

  栈：一般存放基本数据类型（局部变量）

  堆：存放对象（Cat  cat，数组等）

  方法区：常量池（常量，字符串），类加载信息（属性、方法信息）

- 方法调用

  - 当程序执行方法是，就会开辟一个独立的空间（栈空间）
  - 当方法执行完毕，或者执行到return语句时，就会返回
  - 返回到调用方法的地方
  - 返回后，继续执行方法后面的代码
  - 当main方法（栈）执行完毕，整个程序退出

```java
person p1 = new person();
int rerurnRes =p1.getSum(10,20);
System.out.println("getSum方法返回的值=" + returnRes);

public int getSum(int num1, int num2){
    int res = num1 + num2;
    return res;
}    
```

