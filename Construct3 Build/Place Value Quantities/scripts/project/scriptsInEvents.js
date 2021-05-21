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

		async Egame_Event1_Act9(runtime, localVars)
		{
			// localstorage.clear();
			// console.log("log", runtime.getInstanceByUid(486).getJsonDataCopy()); 
			
			runtime.goToLayout("Tutorial");
			
		},

		async Egame_Event11_Act1(runtime, localVars)
		{
			localStorage.setItem("pvq-data", JSON.stringify(runtime.getInstanceByUid(486).getJsonDataCopy()));
			AppInterface.sendToApp(runtime.getInstanceByUid(486).getJsonDataCopy());
		},

		async Egame_Event33_Act1(runtime, localVars)
		{
			
		},

		async Etutorial_Event4_Act4(runtime, localVars)
		{
			if(eval("runtime.globalVars.L"+runtime.globalVars.GameLevel+"TutorialDone")){
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel)
			}
			else{
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel+"_Tutorial");
			}
			
		},

		async Etutorial_Event5_Act1(runtime, localVars)
		{
			if(eval("runtime.globalVars.L"+runtime.globalVars.GameLevel+"TutorialDone")){
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel)
			}
			else{
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel+"_Tutorial");
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