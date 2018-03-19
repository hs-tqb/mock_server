/**
 * 站内信获取
 * @param id
 * @param state             0：未读，1：已读
 * @param delState          0：未删除，1：已删除
 */
module.exports = {
  state: 1, 
  data : {
    list: [
      {
        id:111111111,
        title:'标题标题标题标题标题标题',
        content:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        "gmtCreate":"2017-12-05 16:49:50",
        state:1,
        delState:0
      },
      {
        id:111111111,
        title:'标题标题标题标题标题标题22',
        content:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容222',
        state:1,
        delState:0
      }
    ]
  },
  message: 'some message'
}