const cron = require('node-cron')
const axios = require('axios')

const key = 'n@e#w$f%a^r&m*m(e)m_o+r1i2z3e4567890'
const { SERVER_URL } = process.env

function log(job) {
  console.log(`${new Date().toISOString()}: Success ${job}`)
}

// add jobs
cron.schedule('*/1 * * * * *', async () => {
  try {
    await axios.post(
      `${SERVER_URL}/jobs/addAlertJobs`,
      {
        key,
      }, {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
    log('AddAlertJobs')
  } catch (e) {
    console.log(e)
  }
})

// delete keys
cron.schedule('*/10 * * * *', async () => {
  try {
    await axios.post(
      `${SERVER_URL}/jobs/deleteJobKeys`,
      {
        key,
      }, {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
    log('DeleteJobKeys')
  } catch (e) {
    console.log(e)
  }
})

// start socket
cron.schedule('*/15 * * * *', async () => {
  try {
    await axios.post(
      `${SERVER_URL}/jobs/startSocketProductPrice`,
      {
        key,
      }, {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
    log('startSocketProductPrice')
  } catch (e) {
    console.log(e)
  }
})
