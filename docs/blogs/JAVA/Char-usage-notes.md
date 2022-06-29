---
title: Char用法注意
date: 2022-06-26
tags:
- JAVA
categories:
- JAVA
---

建议，程序中最好不要使用char类型，除非你想处理代码单元。像操作Unicode字符，可以使用Java中的String类型。

```java
   public static void main(String[] args) { 
       // 字符串中放入需要两个码点表示的字符'𝕆'
    String  str = "𝕆A";

    // 获取索引为0的代码单元，而不是字符
    char ch0 = str.charAt(0);
    char ch1 = str.charAt(1);
    char ch2 = str.charAt(2);

    System.out.println(ch0);
    System.out.println(ch1);
    System.out.println(ch2);

}
```

![image-20220604165903094](C:\Users\87276\AppData\Roaming\Typora\typora-user-images\image-20220604165903094.png)

有些字符不能被正确的处理

![image-20220604165953935](C:\Users\87276\AppData\Roaming\Typora\typora-user-images\image-20220604165953935.png)