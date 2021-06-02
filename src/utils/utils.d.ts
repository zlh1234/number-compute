/**
 * 判断是否是科学计数法
 * @returns {Number} v
 */
export declare const getOriNum: (num: number) => string | number;
/**
 * 获取到两个数间小数点长度的10的倍数
 * @param n1 数值1
 * @param n2 数值2
 * @returns {Number} x 10的倍数
 */
export declare const getLength: (n1?: number, n2?: number) => number;
/**
 * 传入的是否为数值
 * 不是的话则转换
 * @returns {Number} v
 */
export declare const validateNumber: (v: number) => number;
