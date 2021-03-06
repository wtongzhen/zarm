# 文本框 Input

[demo页面](https://zhongantecheng.github.io/zarm/#/input)

### 引入

```js
import { Input } from 'zarm';
```

### 代码演示

#### 基本用法

###### 单行文本
```jsx
<Input type="text" placeholder="type is text" />
```

###### 多行文本
```jsx
<Input type="textarea" rows="3" placeholder="type is textarea" />
```

#### 高度自适应
```jsx
<Input autosize type="textarea" rows="3" placeholder="写点啥..." />
```

#### 显示输入字数
```jsx
<Input autosize showLength type="textarea" rows="4" maxLength="200" placeholder="摘要" />
```


### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-input | | 类名前缀 |
| className | string | | | 追加类名 |
| type | string | text | | 显示类型 |
| value | string |  | | 值 |
| defaultValue | string |  | | 初始值 |
| disabled | bool | false | | 是否禁用 |
| rows | string, number | | | 多行文本时的显示行数 |
| autosize | bool | false | | 是否高度自适应 |
| showLength | bool | false | | 是否显示输入字数 |
| onChange | func | noop | \(value: string\) | 值变化时触发的回调函数 |




