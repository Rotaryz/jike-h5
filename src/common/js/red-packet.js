/**
 * Created by user on 2017/12/14.
 */
/**
 * 红包数据修改
 */
import img1 from '@/base/reg_map/image/icon_yeschecked.png'
import img2 from '@/base/reg_map/image/icon-r_money32@2x.png'
export default class redPacket {
  constructor(item) {
    if (item.ispacket === 0) {
      this.image = img1
      this.title = ''
      this.showTitle = 0
    } else {
      this.image = img2
      this.title = ''
      this.showTitle = 2
    }
  }
}

