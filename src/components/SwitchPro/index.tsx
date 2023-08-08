import React, { useState } from 'react';
type Param = {
  /**
   * @description 大小
   * @default 1
   */
  size?: number;
};

export default ({ size = 1 }: Param) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`switch-pro ${isOn ? 'on-color' : 'off-color'}`}
      style={{
        //定义css变量，忽略ts检查
        //@ts-ignore
        '--width': `${size * 44}px`, //按钮宽度
        '--height': `${size * 22}px`, //按钮高度
        '--circleWidth': `${size * (22 - 4)}px`, //圆形label直径
        '--circleLeft': `${24 * size}px`, //圆形label到边缘距离
        '--translateX': isOn ? 0 : `${-22 * size}px`, //label移动距离
        '--textPadding': `${size * 8}px`, //文字距离边缘距离
        '--textSize': `${size * 12}px`, //文字大小
      }}
      onClick={() => {
        setIsOn((isOn) => !isOn);
      }}
    >
      <div className="switch-pro-label">
        <div className="on-text">开</div>
        <div className="off-text">关</div>
      </div>
    </div>
  );
};
