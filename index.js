const express = require("express");
const app = express()

app.get('/api', (req, res) => {
    res.json({
      slack_name: "example_name",
      current_day: "Monday",
      utc_time: "2023-08-21T15:04:05Z",
      track: "backend",
      github_file_url:
        "https://github.com/username/repo/blob/main/file_name.ext",
      github_repo_url: "https://github.com/username/repo",
      status_code: 200,
    });
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})