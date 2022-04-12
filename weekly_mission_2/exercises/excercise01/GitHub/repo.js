const repo = {
    name: "LaunchX",
    author: "hectorSampieri",
    language: "JavaScript",
    numberOfCommits: 30,
    stars: 10,
    forks: 10,
    issues_open: 1,
    issues_close: 2,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())