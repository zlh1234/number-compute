declare class Compute {
    private val;
    private current;
    private x;
    /**
     * 构造函数
     * @param value 初始数值
     */
    constructor(value?: number);
    /**
     * 计算前设置当前传入的数值和x的值
     * @param value 当前传入的数值
     */
    private setValidate;
    /**
     * done
     * 完成链式调用 返回计算后的值
     */
    done(): number;
    /**
     * 加法
     */
    add(value: number): this;
    /**
     * 减法
     */
    minus(value: number): this;
    /**
     * 乘法
     */
    multiply(value: number): this;
    /**
     * 除法
     */
    divide(value: number): this;
}
export default Compute;
