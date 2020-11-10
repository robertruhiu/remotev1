import Api from '@/services/Api'
export default {
    bidstageprojects() {
        return Api().get(`remote/v1/projects/all/`)
    },
    // project
    createproject(project, auth) {
        return Api().post(`remote/v1/projects/create/`,project, auth)
    },
    getproject( project_id,auth) {
        return Api().get(`remote/v1/projects/getproject/${project_id}`, auth)
    },
    getprojectslug( project_slug,auth) {
        return Api().get(`remote/v1/projects/getprojectslug/${project_slug}`, auth)
    },
    updateproject( project_id,project,auth) {
        return Api().patch(`remote/v1/projects/updateproject/${project_id}`,project, auth)
    },

    editproject() {
        return Api().get(`projects/projects/`)
    },
    allprojects(auth) {
        return Api().get(`remote/v1/projects/all/`,auth)
    },
    myprojects(user_id,auth) {
        return Api().get(`remote/v1/projects/myprojects/${user_id}`,auth)
    },
    developerprojects(user_id,auth) {
        return Api().get(`remote/v1/projects/developerprojects/${user_id}`,auth)
    },

    // features
    fetchallfeatures(user_id) {
        return Api().get(`projects/projects/${user_id}`)
    },
    createfeature(feature, auth) {
        return Api().post(`remote/v1/projects/features/create/`,feature, auth)
    },
    getfeatures( project_id,auth) {
        return Api().get(`remote/v1/projects/features/getprojectfeatures/${project_id}`,auth)
    },
    getfeature( feature_id,auth) {
        return Api().get(`remote/v1/projects/features/getfeature/${feature_id}`,auth)
    },
    updatefeature( feature_id,feature,auth) {
        return Api().patch(`remote/v1/projects/features/update/${feature_id}`,feature, auth)
    },
    deletefeature( feature_id,auth) {
        return Api().delete(`remote/v1/projects/features/deletefeature/${feature_id}`, auth)
    },

    // stories
    createstories(story, auth) {
        return Api().post(`remote/v1/projects/stories/create/`,story, auth)
    },
    getstories( feature_id,auth) {
        return Api().get(`remote/v1/projects/stories/getfeaturestories/${feature_id}`,auth)
    },
    updatestories( story_id,story,auth) {
        return Api().patch(`remote/v1/projects/stories/update/${story_id}`,story, auth)
    },
    deletestories( story_id,auth) {
        return Api().delete(`remote/v1/projects/stories/deletestory/${story_id}`, auth)
    },

    //tasks
    fetchfeaturetask(feature_id,auth){
        return Api().get(`remote/v1/projects/tasks/featuretasks/${feature_id}`,auth)
    },

    featuretaskpatch(task_id,task,auth){
        return Api().patch(`remote/v1/projects/tasks/updatetask/${task_id}`,task,auth)

    },
    newfeaturetask(task,auth){
        return Api().post(`remote/v1/projects/tasks/create/`,task,auth)

    },
    deletetask(task_id,auth){
        return Api().delete(`remote/v1/projects/tasks/deletetask/${task_id}`,auth)

    },

    //issues
    fetchfeatureissues(feature_id,auth){
        return Api().get(`remote/v1/projects/issues/featureissues/${feature_id}`,auth)
    },

    allissues(owner_id,auth){
        return Api().get(`remote/v1/projects/issues/allissues/${owner_id}`,auth)
    },
    developerallissues(assigned_to,auth){
        return Api().get(`remote/v1/projects/issues/developerallissues/${assigned_to}`,auth)
    },

    featureissuepatch(issue_id,issue,auth){
        return Api().patch(`remote/v1/projects/issues/updateissue/${issue_id}`,issue,auth)

    },
    newfeatureissue(issue,auth){
        return Api().post(`remote/v1/projects/issues/create/`,issue,auth)

    },
    deleteissue(issue_id,auth){
        return Api().delete(`remote/v1/projects/issues/deleteissue/${issue_id}`,auth)

    },
    //comments
    fetchissuecomments(issue_id,auth){
        return Api().get(`remote/v1/projects/comments/issuecomments/${issue_id}`,auth)
    },

    newissuecomment(comment,auth){
        return Api().post(`remote/v1/projects/comments/create/`,comment,auth)

    },

    //bids
    createbid(bid, auth) {
        return Api().post(`remote/v1/projects/bids/create/`,bid, auth)
    },
    fetchprojectbids(project_slug,auth) {
        return Api().get(`remote/v1/projects/bids/projectbids/${project_slug}`,auth)
    },
    fetchadeveloperbids(developer_id,auth) {
        return Api().get(`remote/v1/projects/bids/developerbids/${developer_id}`,auth)
    },
    activedeveloperbids(developer_id,auth) {
        return Api().get(`remote/v1/projects/bids/activedeveloperbids/${developer_id}`,auth)
    },
    updatebid( bid_id,bid,auth) {
        return Api().patch(`remote/v1/projects/bids/updatebid/${bid_id}`,bid, auth)
    },
    acceptbid(bid, auth) {
        return Api().post(`remote/v1/projects/bids/acceptbid/`,bid, auth)
    },


    //teams
    createteam(team, auth) {
        return Api().post(`remote/v1/projects/teams/create/`,team, auth)
    },
    fetchteams(leader_id,auth) {
        return Api().get(`remote/v1/projects/teams/myteams/${leader_id}`,auth)
    },

    updateteam( team_id,team,auth) {
        return Api().patch(`remote/v1/projects/teams/updateteam/${team_id}`,team, auth)
    },
    retrieveuser(email, auth) {
        return Api().get(`remote/v1/projects/teams/getuser/${email}`, auth)
    },


    //emails
    newbidemail(bid_id,auth) {
        return Api().post(`remote/v1/projects/bids/newbidemail/${bid_id}`,auth)
    },
    finishedmilestone(feature_id,auth) {
        return Api().post(`remote/v1/projects/features/finishedfeature/${feature_id}`,auth)
    },
    acceptbidemail(bid_id,auth) {
        return Api().post(`remote/v1/projects/bids/acceptedbidemail/${bid_id}`,auth)
    },
    //files
    createfile(file, auth) {
        return Api().post(`remote/v1/projects/files/create/`,file, auth)
    },
    fetchfiles(project_id,auth) {
        return Api().get(`remote/v1/projects/files/fetchfiles/${project_id}`,auth)
    },
    updatefile( file_id,team,auth) {
        return Api().patch(`remote/v1/projects/files/updatefile/${file_id}`,team, auth)
    },




}
