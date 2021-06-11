mergeInto(LibraryManager.library, {

// get data from unity Don't change name of it.
GetDataFromUnity: function ( arg )
{
  //console.log("called ", Pointer_stringify(arg);
  if (window && window.ReactNativeWebView) {
  window.ReactNativeWebView.postMessage(Pointer_stringify(arg)) // pushes the data to app
  }
   //alert( Pointer_stringify(arg) );
  },

});
