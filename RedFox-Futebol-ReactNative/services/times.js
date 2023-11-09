import api from '../plugins/api'

class TimeService {
  async getAllTimes() {
    const response = await api.get('/times/')
    return response.data
  }
  async saveTime(time) {
    const response = await api.post('/times/', time)
    return response.data
  }
  async deleteTimes(time) {
    const response = await api.delete(`/times/${time.id}/`)
    return response.data
  }
}

export default new TimeService()