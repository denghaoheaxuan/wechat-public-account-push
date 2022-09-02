export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx9af17ab110588229",
    // 公众号APP_SECRET
    APP_SECRET: "9969ceb40432262c339af695bf7a6180",
    // 模板消息id
    TEMPLATE_ID: "KiKAHSvZZSGf_DWkwwvbo1wJoD4Slz3KVLCV3yyktJs",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["oRhiO6fUm-LiO7KDVkIseaogOjts","oRhiO6d7fjGsiBCLc2N2oKhOoOG4"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "四川",
    // 所在城市
    CITY: "成都",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "老婆", "year": "2003", "date": "03-23"},
      {"name": "老公", "year": "2003", "date": "05-20"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2022-03-29",
    


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "宝宝我就是因为你和你朋友天天玩然后不陪我我吃醋嘛，你这个大傻蛋这个都不明白，我就是语气冲了点，又觉得自己很没用，无法带给你快乐，你只有和你朋友在一起的时候你才会快乐，真的会让我质疑我存在的意义，你你你还和我冲，我我也很委屈好不好，作比较，我认为你比我任何朋友都重要，我的生活除了工作只剩下了你，我说就这样吧你还就这样吧，就这样个大头鬼！！你换位思考一下嘛！！气死我了！好吧对不起我不该发小脾气，错了宝宝，我不能离开你（委屈）"


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
