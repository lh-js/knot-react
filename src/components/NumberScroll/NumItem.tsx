import React, { useEffect, useState } from 'react';

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
  * @description 初始化动画过渡时间
  * @default 0
  */
  startTransTime?: number;
};
export default ({ size = 1, number = 5, transTime = 1,startTransTime = 0 }: Param) => {
  const [num, setNum] = useState(0);
  const [trans,setTrans] = useState(startTransTime)
  const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    setNum(number);
    setTimeout(()=>{
      setTrans(transTime)
    },startTransTime)
  }, [number]);

  return (
    <div
      className="box"
      style={{
        //@ts-ignore
        '--transform': `-${num * 10}%`,
        '--transTime': `${trans}s`,
        '--height': `${size * 20}px`,
        '--width': `${size * 16}px`,
        '--fontSize': `${size * 14}px`,
        '--borderRadius': `${size * 3}px`,
      }}
    >
      <div className="num">
        {numList.map((item, index) => (
          <div className="num-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
