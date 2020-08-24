# uni-app-demo

采用uniapp

# 文件夹命名规范

小写开头，驼峰命名。

```
eg: myFileName

```
# 静态常量规范：
```
constants/
|- enum   // 详情参考此文件

```
# 静态资源：
```
static/
|- icon.png   // 存放图片等静态资源

```
# 组件命名规范：
```
components/
|- MyComponent.vue

```

# 全局样式

```
|- style/global.css

```

# 组件说明

```

新增组件丢到components 文件夹内，并在 components.md 文档中标注使用说明

```

# css单位说明【使用rpx单位】
```
rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。
如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，
1rpx = 0.5px = 1物理像素。

|设备			|rpx换算px (屏幕宽度/750)	|px换算rpx (750/屏幕宽度)	|
|iPhone5		|1rpx = 0.42px				|1px = 2.34rpx				|
|iPhone6		|1rpx = 0.5px				|1px = 2rpx					|
|iPhone6 Plus	|1rpx = 0.552px				|1px = 1.81rpx				|

建议： 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。
```