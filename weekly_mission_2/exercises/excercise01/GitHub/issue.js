const issue = {
    title: "issue1k",
    repositoryNameAssociated: "playbook",
    status: "Active",
    numberOfComments: 100,
    labels:["test","js","nodeJS","launchx"],
    author:"hectorSampieri",
    dateCreated: "2022/04/12",
    lastUpdate: "2022/04/12",
    getTitleAndAuthor: function(){
      return `This Issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
      return `Issue ${this.title} ${this.repositoryNameAssociated}`
    }
   }
   
   console.log("Issue " + issue.title)
   console.log("Datos  " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())