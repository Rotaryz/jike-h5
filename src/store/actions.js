import * as types from './mutation-types'

export const isshow = function ({
                                  commit
                                }, state) {
  commit(types.ISSHOW, state)
}

export const showDetail = function ({
                                  commit
                                }, state) {
  commit(types.SHOWDETAIL, state)
}
