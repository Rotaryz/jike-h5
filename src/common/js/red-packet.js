/**
 * Created by user on 2017/12/14.
 */
/**
 * 红包数据修改
 */
export default class redPacket {
  constructor(item) {
    if (item.ispacket === 0) {
      this.image = './src/common/image/icon/icon_yeschecked.png'
      this.title = ''
      this.showTitle = 0
    } else if (item.ispacket === 1) {
      this.image = './src/common/image/icon/icon-1_money.png'
      this.title = '奖励'
      this.showTitle = 1
    } else if (item.ispacket === 2) {
      this.image = './src/common/image/icon/icon-22_money.png'
      this.title = '奖励'
      this.showTitle = 1
    } else if (item.ispacket === 3) {
      this.image = './src/common/image/icon/icon-33_money.png'
      this.title = '奖励'
      this.showTitle = 1
    }
  }
}

