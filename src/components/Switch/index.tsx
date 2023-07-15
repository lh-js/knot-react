import React, { useState } from 'react';

type Param = {
  /**
   * @description 开或关
   * @default false
   */
  isChecked?: boolean;
  /**
   * @description 大小
   * @default 1
   */
  size?: number;
};

export default ({ isChecked = false, size = 1 }: Param) => {
  const [isOn, setIsOn] = useState(isChecked);

  const switchClick = () => {
    setIsOn(!isOn);
  };
  return (
    <div
      className="switch"
      style={{
        //定义css变量，忽略ts检查
        //@ts-ignore
        '--width': `${size * 44}px`,
        '--height': `${size * 22}px`,
        '--circleWidth': `${size * (22 - 4)}px`,
        '--circleRight': `${2 * size}px`,
        '--translateX': isOn ? 0 : `${-22 * size}px`,
        '--background': isOn ? '#1677ff' : '#888888',
      }}
      onClick={switchClick}
    >
      <div className="switch-label"></div>
    </div>
  );
};
