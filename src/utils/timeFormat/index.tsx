import timeParse from './timeParse'

type Option = {
    /**
     * @description 格式
     * @default {y}-{m}-{d} {h}:{i}:{s}
     */
    pattern?: string;
    /**
     * @description 是否显示和现在对比的汉字
     * @default false
     */
    textFormat?: boolean;
}

type Param = {
    /**
     * @description 时间
     */
    time?: Date | string | number;
    /**
     * @description 配置
     * @default 
     */
    option?: Option;
};

export default function timeFormat({ time, option={textFormat:false} }: Param) {
    if (!option?.textFormat) {
        return timeParse({ time, pattern: option?.pattern })
    }
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000
    } else {
        time = +time
    }
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }

    return timeParse({ time, pattern: option.pattern })
    //   if (option) {
    //     return timeParse({time, pattern:option})
    //   } else {
    //     return (
    //       d.getMonth() +
    //       1 +
    //       '月' +
    //       d.getDate() +
    //       '日' +
    //       d.getHours() +
    //       '时' +
    //       d.getMinutes() +
    //       '分'
    //     )
    //   }
}