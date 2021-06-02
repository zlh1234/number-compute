#### 1. 使用

npm i number-compute -S
或者 yarn
yarn add number-compute

```
//引入
import Compute from 'number-compute';

//使用 1+1
let val = new Compute(1).add(1).done();
```

#### 2. 链式操作完成精度计算

##### (1) 经典计算题 0.1+0.2

```
//在浏览器中 0.1+0.2 = 0.30000000000000004

//使用number compute
import Compute from 'number-compute';

let val = new Compute(0.1).add(0.2).done();
//==> 0.3
```

##### (2) 优先计算值 (0.1+0.2)\*0.2

```
//在浏览器中 (0.1+0.2)*0.2 = 0.06000000000000001

//使用number compute
import Compute from 'number-compute';

let val = new Compute(new Compute(0.1).add(0.2).done()).multiply(0.2).done();
//==> 0.06
```

##### (3) 小数点较多的计算 0.123456 + 0.00000001

```
//在浏览器中 0.123456+0.00000001 = 0.12345600999999999

//使用number compute
import Compute from 'number-compute';

let val = new Compute(0.123456).add(0.00000001).done();
//==> 0.12345601
```

#### 3. 相关 API

| 名称     | 类型 | 描述                           |
| :------- | :--- | :----------------------------- |
| add      | Func | 加法                           |
| minus    | Func | 减法                           |
| multiply | Func | 乘法                           |
| divide   | Func | 除法                           |
| done     | Func | 完成计算，此时返回计算后的数值 |
