#### 链式操作完成精度计算

##### 1.经典计算题 0.1+0.2

```
//在浏览器中 0.1+0.2=0.30000000000000004

//使用number compute
import Compute from 'number-compute';

let val = new Compute(0.1).add(0.2).done();
//==> 0.3
```

##### 2.优先计算值 (0.1+0.2)\*0.2

```
//在浏览器中 (0.1+0.2)*0.2=0.06000000000000001

//使用number compute
import Compute from 'number-compute';

let val = new Compute(new Compute(0.1).add(0.2).done()).multiply(0.2).done();
//==> 0.06
```
