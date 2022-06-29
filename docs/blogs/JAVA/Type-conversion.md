---
title: 类型转换
date: 2022-06-26
tags:
- JAVA
categories:
- JAVA
---

- 自动类型转换

  当java程序在进行赋值或运算时，精度小的类型自动转换为精度大的数据类型，这个就是自动类型转换。

  数据类型按精度（容量）大小排序为==（规则）==

  char$\longrightarrow$int$\longrightarrow$long$\longrightarrow$float$\longrightarrow$double

  byte$\longrightarrow$short$\longrightarrow$int$\longrightarrow$long$\longrightarrow$float$\longrightarrow$double

- 强制类型转换

  将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符（），但可能造成精度降低或溢出格外要注意。

  例：	

  ```java
  int i = 100；
  short b = (short)i;
  ```

  ==注意==：强制转换符只针对最近的操作数有效，往往会使小括号提升优先级。

