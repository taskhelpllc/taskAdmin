
function processTfs_statusGreen(tfsGreen, taskNumber, taskhelpersId, tfsStatusID, phase, s4AprvTfs ){
    
         if(phase == 1){       
         if(s4AprvTfs != 1){       
       
           if(tfsStatusID == 1){

         tfsGreen += 1;
      

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";

    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {tfsGreen : tfsGreen}};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});


      
      
   if(tfsGreen == 72){ 
                   
 
 
 
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskhelpersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;
    



var tfsExt1Sent = "http://task.help/taskAdmin/tfsExt1Sent/?tnum=" + taskNumber + "&un=" +  taskhelpersId;


var sms_msgLink2 = "TASK HELP.  Request more time to complete your Taskflow-suggest " + tfsExt1Sent;

var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink2,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
})


    db.close();
  });
});


 

 
 
      
      
      
   }
  
  
        
      
   if(tfsGreen == 72){ 
                   
 
     MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {tfsStatusID : 2, tfsExt1Sent: 1 }};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});

 

      
   }
  
  
    
}
}
}

}

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://txxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  dbo.collection("taskAdmintable").find({phase: 1, s4AprvTfs: 0, tfsStatusID: 1}, { projection: { _id: 0, tfsGreen: 1, taskID: 1, taskhelpersId: 1, tfsStatusID: 1, phase: 1, s4AprvTfs: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    
    result.forEach(function (result) {
    processTfs_statusGreen(result.tfsGreen, result.taskID, result.taskhelpersId, result.tfsStatusID, result.phase, result.s4AprvTfs );
});

    db.close();
  });
});




  





