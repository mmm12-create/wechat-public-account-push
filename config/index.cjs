/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2af9b8f4ccf98b41',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd1c2e43d235c16c1d105d90df31a4f20',

  PROVINCE: '江苏',
  CITY: '苏州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小猪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyGwu6tz7G8gJo2_mgsZn3LUJOA4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'OQfcvwtK-vbaFFFJzwl1H91jtGcl7gSsuIULRU4qxWY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号     
        {
          type: '节日', name: '你的破壳日', year: '2003', date: '08-15',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-12-12' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'sjkMWgg7BwATx1ys2KVhNrPTq8fHDeaYDfvs8aDpeSg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyGwu6vHBHpWvUK_fQceOdnGOPeY',
    }
  ],

}

module.exports = USER_CONFIG

