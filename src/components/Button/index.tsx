import { OutWave } from 'lh-ui-react';
import React from 'react';

type Param = {
  /**
   * @description 宽度
   * @default 74
   */
  width?: number;
  /**
   * @description 高度
   * @default 34
   */
  height?: number;
};
export default ({ width = 74, height = 34 }: Param) => (
  <OutWave>
    <button
      className="button"
      style={{
        //@ts-ignore
        '--width': `${width}px`,
        '--height': `${height}px`,
      }}
    >
      点击
    </button>
  </OutWave>
);
