import React from 'react';

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
};
export default ({
  size = 1,
  number = 5,
  transTime = 1,
}: Param) => {

  return (
    <div className="scorll-pro-box" 
    style={{
      //@ts-ignore
      '--transform': `${number * 36}deg`,
      '--translateZ': `${size * 30}px`,
      '--transTime': `${transTime}s`,
      '--height': `${size * 20}px`,
      '--width': `${size * 16}px`,
      '--fontSize': `${size * 14}px`,
      '--borderRadius': `${size * 3}px`,
    }}>
        <section>
            <div>0</div>
            <div>9</div>
            <div>8</div>
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
        </section>
    </div>
  );
};
