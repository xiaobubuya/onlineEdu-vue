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
  }
}
