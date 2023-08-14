import React, { useEffect, useState } from 'react';
import Space from '../Space';
import NumItem from './NumItem';

type Param = {
  /**
   * @description 数字
   */
  number: number;
  /**
   * @description 大小
   * @default 1
   */
  size?: number;
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
};
export default ({
  number = 5,
  size = 1,
  transTime = 1,
  spaceSize = 5,
}: Param) => {
  const [numList, setNumList] = useState<number[]>([]);

  useEffect(() => {
    numToList(number);
    getTransTime(transTime);
  }, []);
  const numToList = (num: number) => {
    const list = num
      .toString()
      .replace(/(?=(\d{1})+$)/g, ',')
      .split(',')
      .filter(Boolean);
    setNumList(list.map((item) => Number(item)));
  };

  const getTransTime = (transTime: number | number[]) => {
    const transTimeList: number[] = [];
    if (typeof transTime === 'number') {
      for (let i = 0; i < numList.length; i++) {
        transTimeList.push(transTime);
      }
    } else {
      for (let i = 0; i < numList.length; i++) {
        transTimeList.push(transTime[i] ? transTime[i] : 1);
      }
    }

    return transTimeList;
  };

  return (
    <Space spaceSize={spaceSize}>
      {numList.map((item, index) => (
        <NumItem
          key={index}
          number={item}
          size={size}
          transTime={getTransTime(transTime)[index]}
        />
      ))}
    </Space>
  );
};
