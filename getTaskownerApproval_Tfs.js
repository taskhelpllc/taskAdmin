

function getTaskownerApprovalTfs(taskownersId, taskhelpersId, taskNumber, tasksInProject, aprvRmdrTfs, aprvTfs, s4AprvTfs, phase){
    

    if(phase == 1){     

     if(s4AprvTfs == 1){
        
          aprvRmdrTfs += 1;
          
          
           
    
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";

    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {aprvRmdrTfs : aprvRmdrTfs}};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});

 

        
    if(aprvTfs != 1){
            

            if(aprvRmdrTfs == 48){
                 
    
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskownersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;
  




var loginUrl = "https://task.help/log_in_username/";

var sms_msgLink21 = "TaskAdmin.  Final reminder to make Taskflow-suggest into task.   Please click here to login and make Taskflow-suggest into task.  " + loginUrl; 


var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink21,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
})


    db.close();
  });
});
 
    
    
                }
      
      
    
       

         
    
 
        
        if(aprvRmdrTfs == 72){
            


 

           
            
            
var msg = "taskownersId:" +  taskownersId +  "taskhelpersId:" +  taskhelpersId + "taskNumber:" +  taskNumber + "tasksInProject:" +  tasksInProject + "aprvRmdrTfs:" + aprvRmdrTfs;
var subject = "auto_make_tfs_into_task";
 
var postmark = require("postmark");

var serverToken = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx";
var client = new postmark.ServerClient(serverToken);

client.sendEmail({
    "From": "noreply@task.help",
    "To": "automaketfsintotask@task.help",
    "Subject": subject,
    "TextBody": msg
});    
 
          
            
            
            
        }
        
            
        }
  
     }
  
    }
        
   
}









var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  dbo.collection("taskAdmintable").find({phase: 1, s4AprvTfs: 1}, { projection: { _id: 0, taskownersId: 1, taskhelpersId: 1, taskID: 1, tasksInProject: 1, aprvRmdrTfs: 1, aprvTfs: 1, s4AprvTfs: 1, phase: 1  } }).toArray(function(err, result) {
    if (err) throw err;
    
    result.forEach(function (result) {
    getTaskownerApprovalTfs(result.taskownersId, result.taskhelpersId, result.taskID, result.tasksInProject, result.aprvRmdrTfs, result.aprvTfs, result.s4AprvTfs, result.phase );
});

    db.close();
  });
});








