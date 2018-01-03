/**
 * Created by user on 2017/12/14.
 */
/**
 * 红包数据修改
 */
import img1 from '@/base/reg_map/image/icon_yeschecked.png'
import img2 from '@/base/reg_map/image/icon-1_money.png'
import img3 from '@/base/reg_map/image/icon-22_money.png'
import img4 from '@/base/reg_map/image/icon-33_money.png'
export default class redPacket {
  constructor(item) {
    if (item.ispacket === 0) {
      this.image = img1
      this.title = ''
      this.showTitle = 0
    } else if (item.ispacket === 1) {
      this.image = img2
      this.title = '奖励'
      this.showTitle = 1
    } else if (item.ispacket === 2) {
      this.image = img3
      this.title = '奖励'
      this.showTitle = 1
    } else if (item.ispacket === 3) {
      this.image = img4
      this.title = '奖励'
      this.showTitle = 1
    }
  }
}

