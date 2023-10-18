import React from 'react';

type Param = {
  /**
   * @description 图片地址
   */
  src: string;
  /**
   * @description 边框颜色
   * @default #ae3ec9
   */
  borderColor: string;
  /**
   * @description 背景颜色
   * @default #e9ecef
   */
  backgroundColor: string;
  /**
   * @description 大小
   * @default 200
   */
  size: number;
  /**
   * @description 边框宽度
   * @default 6
   */
  borderWidth: number;
};
export default ({
  src,
  borderColor = '#ae3ec9',
  backgroundColor = '#e9ecef',
  size = 200,
  borderWidth = 6
}: Param) => {


  return (
    <div className='avatar'>
      <img
        src={src}
        style={{
          //@ts-ignore
          '--c': `${borderColor}`,
          '--cb': `${backgroundColor}`,
          '--s': `${size}px`,
          '--b': `${borderWidth}px`,
        }}
      ></img>
    </div>
  );
};
