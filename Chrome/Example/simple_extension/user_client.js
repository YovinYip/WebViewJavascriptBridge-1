console.log("user_client.js called!");
document.addEventListener('WebViewJavascriptBridgeReady', function onBridgeReady(event) {
    var bridge = event.bridge
    bridge.init(function(message, responseCallback) {
        alert('Received message: ' + message)   
        if (responseCallback) {
            responseCallback("Right back atcha")
        }
    })
    bridge.send('Hello from the javascript')
    bridge.send('Please respond to this', function responseCallback(responseData) {
        console.log("Javascript got its response", responseData)
    })
    bridge.registerHandler("showAlert", function(data,responseCallback) 
        { console.log("alert:"+data);responseCallback("response from alert") });
    bridge.callHandler("handler1","gift for handler1",function(responseData){
        console.log("got handler1 response:"+responseData);
    });
}, false)