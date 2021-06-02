import { validateNumber, getLength } from './utils/utils';
class Compute {
	private val: number; //构造时传入的数值
	private current: number; //当前计算方法传入的数值
	private x: number; //当前的10的倍数值

	/**
	 * 构造函数
	 * @param value 初始数值
	 */
	constructor(value?: number) {
		this.val = value || 0;
		this.current = 0;
		this.x = 1;
	}

	/**
	 * 计算前设置当前传入的数值和x的值
	 * @param value 当前传入的数值
	 */
	private setValidate(value) {
		this.current = validateNumber(value);
		this.x = getLength(this.val, this.current);
	}

	/**
	 * done
	 * 完成链式调用 返回计算后的值
	 */
	public done(): number {
		return this.val;
	}

	/**
	 * 加法
	 */
	public add(value: number) {
		this.setValidate(value);
		// console.log(this.val);
		// console.log(this.current);
		// console.log(this.x);

		this.val = (this.val * this.x + this.current * this.x) / this.x;
		return this;
	}

	/**
	 * 减法
	 */
	public minus(value: number) {
		this.setValidate(value);
		this.val = (this.val * this.x - this.current * this.x) / this.x;
		return this;
	}

	/**
	 * 乘法
	 */
	public multiply(value: number) {
		this.setValidate(value);
		this.val =
			(this.val * this.x * (this.current * this.x)) / Math.pow(this.x, 2);
		return this;
	}

	/**
	 * 除法
	 */
	public divide(value: number) {
		this.setValidate(value);
		this.val = (this.val * this.x) / (this.current * this.x);
		return this;
	}
}
export default Compute;
// let c = new Compute(98.22)
// 	.add(43.123)
// 	.minus(52.12)
// 	.multiply(2.5)
// 	.divide(6)
// 	.done();
// let c = new Compute(0.1).add(0.2).done();

// let c = new Compute(0.1).add(new Compute(6).divide(2).done()).done();
// let c = new Compute(0.123456).add(0.00000001).done();
// console.log(c);
