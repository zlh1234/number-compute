/**
 * 判断是否是科学计数法
 * @returns {Number} v
 */
export const getOriNum = (num: number) => {
	if (/\d(?:\.(\d*))?e([+-]\d+)/.test(num.toString())) {
		let m: any = num.toString().match(/\d(?:\.(\d*))?e([+-]\d+)/);
		return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
	}
	return Number(num);
};

/**
 * 获取到两个数间小数点长度的10的倍数
 * @param n1 数值1
 * @param n2 数值2
 * @returns {Number} x 10的倍数
 */
export const getLength = (n1: number = 0, n2: number = 0): number => {
	let sn1: string = getOriNum(n1).toString().split('.')[1] || '';
	let sn2: string = getOriNum(n2).toString().split('.')[1] || '';
	let length: number = 0;
	if (sn1.length > sn2.length) {
		length = sn1.length;
	} else {
		length = sn2.length;
	}
	return Math.pow(10, length);
};
/**
 * 传入的是否为数值
 * 不是的话则转换
 * @returns {Number} v
 */
export const validateNumber = (v: number): number => {
	if (!v) return 0;
	if (typeof v !== 'number') {
		let c: number = Number(v);
		if (isNaN(c)) {
			throw new Error('请传入数值');
		}
		return c;
	}
	return v;
};
