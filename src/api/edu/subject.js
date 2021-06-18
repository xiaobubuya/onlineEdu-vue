import request from '@/utils/request'

const api_name = '/edu/subject'

export default {
  getNestedTreeList() {
    return request({
      url: `${api_name}/treeList`,
      method: 'get'
    })
  }
}
