import request from '@/utils/request'

export default {
  // 1、讲师分页查询列表
  getTeacherListPage(page, limit, teacherQuery) {
    return request({
      url: `/edu/teacher/pageTeacherCondition/${page}/${limit}`,
      method: 'post',
      // eslint-disable-next-line no-undef
      data: teacherQuery
    })
  },

  removeById(teacherId) {
    return request({
      url: `/edu/teacher/deleteTeacher/${teacherId}`,
      method: 'delete'
    })
  },

  save(teacher) {
    return request({
      url: `/edu/teacher/addTeacher/`,
      method: 'post',
      data: teacher
    })
  },

  getById(id) {
    return request({
      url: `/edu/teacher/findById/${id}`,
      method: 'get'
    })
  },

  updateById(teacher) {
    return request({
      url: `/edu/teacher/updateTeacher/${teacher.id}`,
      method: 'put',
      data: teacher
    })
  },

  getList() {
    return request({
      url: `/edu/teacher/findAll/`,
      method: 'get'
    })
  },
}
