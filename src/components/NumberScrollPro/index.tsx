import React, { useEffect, useRef, useState } from 'react';

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
export default ({
  size = 1,
  number = 5,
  transTime = 1,
  startTransTime = 0,
}: Param) => {

  return (
    <div className="scorll-pro-box">
        <section>
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </section>
    </div>
  );
};
