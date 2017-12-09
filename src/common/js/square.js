/**
 *
 */
export default class squareMethod {
  constructor(item) {
    this.current_merchant = item.current_merchant
    this.name = item.name
    this.describe = item.describe
    this.address = item.address
    this.id = item.id
    this.mobile = item.mobile
    this.open_time = item.open_time
    this.close_time = item.close_time
    this.week_day = item.week_day
    this.longitude = item.longitude
    this.latitude = item.latitude
    this['logo_image'] = item['logo_image']
    var iconPath = ''
    if (item.open_status === 0 || item.open_status === 3) {
      iconPath = './src/common/image/icon/icon-shop_close.png'
    } else if (item.open_status === 1) {
      iconPath = './src/common/image/icon/icon-shop_money.png'
    } else if (item.open_status === 2 ) {
      iconPath = './src/common/image/icon/icon-shop_Renovation.png'
    }
    if(item.current_merchant){
      this.width = '48px'
      this.height = '43px'
    }else {
      this.width = '32px'
      this.height = '28px'
    }
    this.iconPath = iconPath
  }
}
