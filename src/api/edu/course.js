import request from '@/utils/request'

const api_name = '/edu/course'

export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/save-course-info`,
      method: 'post',
      data: courseInfo
    })
  },

  // 课程回显
  getCourseInfoById(id) {
    return request({
      url: `${api_name}/course-info/${id}`,
      method: 'get'
    })
  },

  // 修改课程信息
  updateCourseInfoById(courseInfo) {
    return request({
      url: `${api_name}/update-course-info/${courseInfo.id}`,
      method: 'put',
      data: courseInfo
    })
  },

  // 根据课程id获取课程基本预览信息
  getCoursePublishInfoById(id) {
    return request({
      url: `${api_name}/course-publish-info/${id}`,
      method: 'get'
    })
  },

  // 发布课程
  publishCourse(id) {
    return request({
      url: `${api_name}/publish-course/${id}`,
      method: 'put'
    })
  },

  // 课程分页查询
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },

  // 删除课程
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  }
}
