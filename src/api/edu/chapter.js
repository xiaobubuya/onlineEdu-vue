import request from '@/utils/request'

const api_name = '/edu/chapter'

export default {

  getNestedTreeList(courseId) {
    return request({
      url: `${api_name}/nested-list/${courseId}`,
      method: 'get'
    })
  },

  removeById(chapterId) {
    return request({
      url: `${api_name}/deleteChapter/${chapterId}`,
      method: 'delete'
    })
  },

  save(chapter) {
    return request({
      url: `${api_name}/addChapter`,
      method: 'post',
      data: chapter
    })
  },

  getById(chapterId) {
    return request({
      url: `${api_name}/findChapter/${chapterId}`,
      method: 'get'
    })
  },

  updateById(chapter) {
    return request({
      url: `${api_name}/updateChapter/${chapter.id}`,
      method: 'put',
      data: chapter
    })
  }
}
