"use strict";var http=require("http"),createHandler=require("github-webhook-handler"),handler=createHandler({path:"/onpush",secret:"XmkzRV8gHgzv33-"});function run_cmd(e,o,n){var o=(0,require("child_process").spawn)(e,o),t="";o.stdout.on("data",function(e){t+=e.toString()}),o.stderr.on("data",function(e){console.log("stderr: "+e)}),o.stdout.on("end",function(){n(t)})}http.createServer(function(e,o){handler(e,o,function(e){o.statusCode=404,o.end("no such location")})}).listen(15535,function(){console.log("WebHooks Listern at 15535")}),handler.on("push",function(e){console.log("Received a push event for %s to %s",e.payload.repository.name,e.payload.ref),"refs/heads/master"===e.payload.ref&&(console.log("deploy master.."),run_cmd("sh",["./deploy.sh"],function(e){console.log(e)}))});