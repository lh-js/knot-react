import React from 'react';
import Item from './Item';
import Space from '../Space';

type Param = {
  /**
   * @description 大小
   * @default 1
   */
  size?: number;
  /**
   * @description 数字
   */
  number: number;
  /**
   * @description 过渡时间
   * @default 1
   */
  transTime?: number;
  /**
   * @description 主轴间距大小
   * @default 5
   */
  spaceSize?: number;
  /**
   * @description 数字渐进过渡
   * @default false
   */
  gradualTrans?: boolean;
};
export default ({
  size = 1,
  number = 5,
  transTime = 1,
  spaceSize = 5,
  gradualTrans = false
}: Param) => {
  return <Space spaceSize={spaceSize} reverse>
    {Array.from({ length: number.toString().length }).map((_, index) => <Item key={index}
      number={gradualTrans ? number / Math.pow(10, index) : Math.floor(number / Math.pow(10, index))} size={size} transTime={transTime} />)}
  </Space>;
};
