
var jObj;
// Uncomment if testing without app
// let message = {"data":{"gameName":"Place VAlue Quantities","gameId":"GL_PVQ","childId":"CHILD_01","attemptId":"ATPT_01","rewardPoints":0,"isMusic":1,"level0":{"completed":0,"startDate":"","endDate":"","playCount":0},"level1":{"presentationDone":0,"completed":0,"playCount":0,"currentPlay":0,"correctAttempts":0,"incorrectAttempts":0},"level2":{"presentationDone":0,"completed":0,"playCount":0,"currentPlay":0,"correctAttempts":0,"incorrectAttempts":0},"level3":{"presentationDone":0,"completed":0,"playCount":0,"currentPlay":0,"correctAttempts":0,"incorrectAttempts":0},"level4":{"presentationDone":0,"completed":0,"playCount":0,"currentPlay":0,"correctAttempts":0,"incorrectAttempts":0}}}

//uncomment this block to mimic the data comming from app
/* window.onload = function(e){
	console.log("onload");
	handleEvent(message);
} */
//app will trigger this event on load finish.
// comment this listener if you are testing without app
document.addEventListener("message", handleEvent);
function handleEvent(message) {	
	jObj =  message.data;
	let jsonStr = JSON.stringify(message.data);
	console.log(jsonStr);
	alert("data from app"+ jsonStr);
}
runOnStartup(async runtime =>
{
	console.log("json string at start of game::",jsonStr); 
	if(jObj){
		runtime.globalVars.GameID = jObj.GameID;
		runtime.globalVars.ChildID = jObj.childId;
		runtime.globalVars.GameName = jObj.gameName;
		runtime.globalVars.AttemptID = jObj.attemptId;

		runtime.globalVars.RewardPoints = jObj.rewardPoints;

		//Presenation level
		runtime.globalVars.PresentationDone = jObj.level0.completed;	
		runtime.globalVars.L0_START_TIME = jObj.level0.startDate;
		runtime.globalVars.L0_END_TIME = jObj.level0.endDate;
		runtime.globalVars.L0_PLAY_COUNT = jObj.level0.playCount;
		runtime.globalVars.isMusic = jObj.isMusic;

		//set level 1 global vars
		runtime.globalVars.L1TutorialDone = jObj.level1.presentationDone;
		runtime.globalVars.L1_TotalTrial = jObj.level1.playCount;
		runtime.globalVars.L1_trial = jObj.level1.currentPlay;
		runtime.globalVars.L1_Completed = jObj.level1.completed;
		runtime.globalVars.L1_correctAttempts = jObj.level1.correctAttempts;
		runtime.globalVars.L1_IncorrectAttempts = jObj.level1.CorrectAttempts;
	
		//set level 2 global vars
		runtime.globalVars.L2TutorialDone = jObj.level2.presentationDone;
		runtime.globalVars.L2_TotalTrial = jObj.level2.playCount;
		runtime.globalVars.L2_trial = jObj.level2.currentPlay;
		runtime.globalVars.L2_Completed = jObj.level2.completed;
		runtime.globalVars.L2_correctAttempts = jObj.level2.correctAttempts;
		runtime.globalVars.L2_IncorrectAttempts = jObj.level2.incorrectAttempts;
	
		//set level 3 global vars
		runtime.globalVars.L3TutorialDone = jObj.level3.presentationDone;
		runtime.globalVars.L3_TotalTrial = jObj.level3.playCount;
		runtime.globalVars.L3_trial = jObj.level3.currentPlay;
		runtime.globalVars.L3_Completed = jObj.level3.completed;
		runtime.globalVars.L3_correctAttempts = jObj.level3.correctAttempts;
		runtime.globalVars.L3_IncorrectAttempts = jObj.level3.incorrectAttempts;
	
		//set level 4 global vars
		runtime.globalVars.L4TutorialDone = jObj.level4.presentationDone;
		runtime.globalVars.L4_TotalTrial = jObj.level4.playCount;
		runtime.globalVars.L4_trial = jObj.level4.currentPlay;
		runtime.globalVars.L4_Completed = jObj.level4.completed;
		runtime.globalVars.L4_correctAttempts = jObj.level4.correctAttempts;
		runtime.globalVars.L4_IncorrectAttempts = jObj.level4.incorrectAttempts;
		   
	}
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	// console.log("OnBeforeProjectStart", window.location);
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
