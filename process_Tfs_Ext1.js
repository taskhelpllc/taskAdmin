

function processTfs_Ext1(taskownersId, taskNumber, tasksInProject, taskhelpersId, tfsExt1Respn, tfsExt1count, phase, s4AprvTfs, tfsStatusID){
    
if(phase == 1){
 if(s4AprvTfs != 1){
    if(tfsStatusID == 2){        
        
        tfsExt1count += 1;
        
 
 
 
 
 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";

    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {tfsExt1count : tfsExt1count}};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});

 

       
    
            if(tfsExt1Respn == 1){
                
           
            if(tfsExt1count == 65){ 
                           
                           


 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskhelpersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;





var tfsReassigned_link = "https://task.help/taskAdmin/task_is_about_to_be_reassigned_tfs/?un= " + taskhelpersId + "&tnum=" + taskNumber;


var sms_msgLink23 = "TaskAdmin.  The 72 hours your requested to complete your Taskflow-suggest will expire in 7 hours. Your task will be reasigned in 7 hours  Please click link below for more information. " + tfsReassigned_link;


var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink23,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
});


    db.close();
  });
});




      
   }
  
 
                    if(tfsExt1count == 72){
                        
                            
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("reassignque");
  var myobj = { reassign: 1, taskNumber: taskNumber };
  dbo.collection("reassignqueTable").insertOne(myobj, function(err, res) {
    if (err) throw err;
     db.close();
  });
});
                    
                    
                    

    
                        
                        
                  
                    }
               
           
      
            }
            else{
                
                if(tfsExt1count == 72){
    
    
            
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("reassignque");
  var myobj = { reassign: 1, taskNumber: taskNumber };
  dbo.collection("reassignqueTable").insertOne(myobj, function(err, res) {
    if (err) throw err;
     db.close();
  });
});
    
    

    
                    }
                
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
  dbo.collection("taskAdmintable").find({phase: 1, s4AprvTfs: 0, tfsStatusID: 2}, { projection: { _id: 0, taskownersId: 1, taskID: 1, tasksInProject: 1, taskhelpersId: 1, tfsExt1Respn: 1, tfsExt1count: 1, phase: 1, s4AprvTfs: 1, tfsStatusID: 1  } }).toArray(function(err, result) {
    if (err) throw err;
    
    result.forEach(function (result) {
    processTfs_Ext1(result.taskownersId, result.taskID, result.tasksInProject, result.taskhelpersId, result.tfsExt1Respn, result.tfsExt1count, result.phase, result.s4AprvTfs, result.tfsStatusID );
});

    db.close();
  });
});














