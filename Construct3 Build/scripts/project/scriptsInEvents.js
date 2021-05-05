"use strict";

export class AppInterface  {

	static showToast(msg){
        console.log('showToast', msg);
		if(typeof(Android)!="undefined")
         Android.showToast(msg);
	}
	static sendToApp(data){		
		let json_str = JSON.stringify(data);
		console.log("Send data to Webview", json_str);
		if (window && window.ReactNativeWebView) {
			window.ReactNativeWebView.postMessage(json_str);
		}

	}
}

{
	const scriptsInEvents = {

		async Egame_Event1_Act8(runtime, localVars)
		{
			runtime.goToLayout("Tutorial");
			return;
			if(runtime.globalVars.PresentationDone==0){
					/* 	runtime.globalVars.CurrentLevel = 3;
					   runtime.globalVars.L3TutorialDone = 1;
					   runtime.goToLayout("Level"+runtime.globalVars.CurrentLevel );
					   return;
					    */
					   runtime.goToLayout("Tutorial");
					   }
					   
					   else{
					   
						   
						   if(runtime.globalVars.PresentationDone==0){
							   runtime.goToLayout("Tutorial");
							   return;
						   }
						   for(let i=1; i<=4 ;i++){
							   if(!eval("runtime.globalVars.L"+i+"TutorialDone")){
								   runtime.goToLayout("Level"+i+"_Tutorial");
								   return;
							   }
							   else if(!eval("runtime.globalVars.L"+i+"_Completed")){
								   runtime.goToLayout("Level"+i);
							   }
						   }
					   
					   }
		},

		async Egame_Event4_Act1(runtime, localVars)
		{
			localStorage.setItem(runtime.globalVars.GameName+"_Music", runtime.globalVars.isMusic);
			var data = {
			GameName:runtime.globalVars.GameName,
			GameID:runtime.globalVars.GameID,
			ChildID: runtime.globalVars.ChildID,
			AttemptID:runtime.globalVars.AttemptID,
			RewardPoints: runtime.globalVars.RewardPoints,
			isMusic: runtime.globalVars.isMusic,
				Level0:{										Completed:runtime.globalVars.PresentationDone,
				StartTime: runtime.globalVars.L0_START_TIME,
				EndTime: runtime.globalVars.L0_END_TIME,
				PlayCount: runtime.globalVars.L0_PLAY_COUNT
				
			},
				Level1: {PresentationDone: runtime.globalVars.L1TutorialDone, Completed:runtime.globalVars.L1_Completed, PlayCount: runtime.globalVars.L1_TotalTrial, CurrentPlay: runtime.globalVars.L1_trial, CorrectAttempts: runtime.globalVars.L1_correctAttempts, IncorrectAttempts: runtime.globalVars.L1_IncorrectAttempts},
			
			Level2:{PresentationDone: runtime.globalVars.L2TutorialDone, Completed:runtime.globalVars.L2_Completed, PlayCount: runtime.globalVars.L2_TotalTrial,
			CurrentPlay: runtime.globalVars.L2_trial, CorrectAttempts: runtime.globalVars.L2_correctAttempts, IncorrectAttempts: runtime.globalVars.L2_IncorrectAttempts},
			
			Level3:{PresentationDone: runtime.globalVars.L3TutorialDone, Completed:runtime.globalVars.L3_Completed, PlayCount: runtime.globalVars.L3_TotalTrial, CurrentPlay: runtime.globalVars.L3_trial, CorrectAttempts: runtime.globalVars.L3_correctAttempts, IncorrectAttempts: runtime.globalVars.L3_IncorrectAttempts},
			
			Level4:{PresentationDone: runtime.globalVars.L4TutorialDone, Completed:runtime.globalVars.L4_Completed, PlayCount: runtime.globalVars.L4_TotalTrial,CurrentPlay: runtime.globalVars.L4_trial, CorrectAttempts: runtime.globalVars.L4_correctAttempts, IncorrectAttempts: runtime.globalVars.L4_IncorrectAttempts}
			
			}
			
			var json = JSON.stringify(data);
			
			localStorage.setItem(runtime.globalVars.GameID+"_"+runtime.globalVars.ChildID, json);
			AppInterface.sendToApp(data);
		},

		async Egame_Event20_Act1(runtime, localVars)
		{
			
		},

		async Etutorial_Event4_Act2(runtime, localVars)
		{
				for(let i=1; i<=4 ;i++){
					if(!eval("runtime.globalVars.L"+i+"TutorialDone")){
						runtime.goToLayout("Level"+i+"_Tutorial");
						return;
					}
					else if(!eval("runtime.globalVars.L"+i+"_Completed")){
						runtime.goToLayout("Level"+i);
					}
				}
			
		},

		async Elevel3_Event98_Act4(runtime, localVars)
		{
			
			let isMusic = localStorage.getItem(runtime.globalVars.GameName+"_Music");
			console.log(isMusic);
			runtime.globalVars.isMusic = isMusic;
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
