const { Octokit } = require('@octokit/core')

const checkPullRequestStatus = async () => {
  const octokit = new Octokit({ auth: `` });
  const res = await octokit.request('GET /repos/{owner}/{repo}/pulls?state=open&head=tractian:giovanirf', {
    owner: 'tractian',
    repo: 'tractian-webapp',
  })
  const pullRequests = res.data
  console.log(pullRequests.map(pullRequest => ({ title: pullRequest.title, user: pullRequest.user.login, mergeable: pullRequest.mergeable })))
}

// setInterval(() => checkPullRequestStatus(), 1000)
checkPullRequestStatus()
