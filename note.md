# 笔记

## 1. 跳转路由的几种方法

- 1.1 跳转到上一次浏览的页面
     this.$router.go(-1);
- 1.2 跳转到指定的地址
     this.$router.replace('/menu');
- 1.3 跳转到指定的路由名字下
     this.$router.replace({name:'menu'});
- 1.4 通过push进行跳转
     this.$router.push('/menu');

## 2. 