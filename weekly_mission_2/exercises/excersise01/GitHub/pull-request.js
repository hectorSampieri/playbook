const pullRequest = {
    title: "LaunchX",
    branchName: "hectorSampieri",
    dateCreated: "JavaScript",
    status:"Confirmed",
    repositoryNameAssociated: "Playbook",
    author:"hectorSampieri",

    getStatus: function(){
      return this.status
    },
    getTitleAndAutor: function(){
      return `This pull request ${this.title} was created by ${this.author}`
    }
   }
   
   console.log("Status:" +pullRequest.status)
   console.log(pullRequest.getTitleAndAutor())
   