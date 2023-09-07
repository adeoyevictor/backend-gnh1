const express = require("express")
const app = express()
const moment = require("moment")

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name
    const track = req.query.track
    
    if(!slack_name || !track){
        return res.status(400).json({
            error: "please provide_slack name and track as GET params"
        })
    }
    const current_day = moment().format("dddd")
    const utc_now = moment.utc()
    const utc_time = utc_now.format("YYYY-MM-DDTHH:mm:ss[Z]")

    res.json({
      slack_name,
      current_day,
      utc_time,
      track,
      github_file_url:
        "https://github.com/adeoyevictor/backend-gnh1/blob/main/index.js",
      github_repo_url:
        "https://github.com/adeoyevictor/backend-gnh1",
      status_code: 200,
    });
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})