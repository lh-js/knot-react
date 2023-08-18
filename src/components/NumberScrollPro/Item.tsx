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
};
export default ({
    size = 1,
    number = 5,
    transTime = 1,
}: Param) => {

    const [num, setNum] = useState(0)
    const numList = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    useEffect(() => {
        setNum(number)
    }, [number])

    return (
        <div className="scorll-pro-box"
            style={{
                //@ts-ignore
                '--transform': `${num * 36}deg`,
                '--translateZ': `${size * 30}px`,
                '--transTime': `${transTime}s`,
                '--height': `${size * 20}px`,
                '--width': `${size * 16}px`,
                '--fontSize': `${size * 14}px`,
                '--borderRadius': `${size * 3}px`,
            }}>
            <section>
                {numList.map((item, index) => <div key={index}>{item}</div>)}
            </section>
        </div>
    );
};
