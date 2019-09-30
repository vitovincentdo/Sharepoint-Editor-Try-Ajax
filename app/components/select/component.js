import Component from '@ember/component';
// import httpntlm from 'npm:httpntlm'
import ntlm from 'npm:ntlm'

export default Component.extend({

  tagName: 'section',

  // didInsertElement(){
  // 	httpntlm.get({
  // 		url: "http://cdr/sites/project/_api/web/lists/getbytitle(\'Asset%20List\')",
  // 		username: 'U531578',
  // 		password: '180897',
  // 		domain: 'bcadomain'
  // 	}, function (err, res) {
  // 		if (err) return err;

  // 		console.log(res.headers);
  // 		console.log(res.body);
  // 	});
  // }

  didInsertElement() {
    this.$(document).ready(function () {
      // const host = Request.QueryString["SPHostUrl"]
      // const spHostUrl = GetUrlKeyValue('SPHostUrl');
      // console.log(spHostUrl)
      // function manageQueryStringParameter(paramToRetrieve) {
      // 	var params =
      // 		document.URL.split("?")[1].split("&");
      // 	var strParams = "";
      // 	for (var i = 0; i < params.length; i = i + 1) {
      // 		var singleParam = params[i].split("=");
      // 		if (singleParam[0] == paramToRetrieve) {
      // 			return singleParam[1];
      // 		}
      // 	}
      // }

      // var hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
      // var appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));
      // console.log(hostweburl)
      // console.log(appweburl)
    })
  },

  actions: {
    pressed: function () {
      const _spPageContextInfo = {
        webServerRelativeUrl: "\u002fsites\u002fproject",
        webAbsoluteUrl: "http:\u002f\u002fcdr\u002fsites\u002fproject",
        siteAbsoluteUrl: "http:\u002f\u002fcdr\u002fsites\u002fproject",
        serverRequestPath: "\u002f_layouts\u002f15\u002fstart.aspx",
        layoutsUrl: "_layouts\u002f15",
        webTitle: "Project Site",
        webTemplate: "62",
        tenantAppVersion: "0",
        isAppWeb: false,
        webLogoUrl: "_layouts\u002f15\u002fimages\u002fsiteicon.png",
        webLanguage: 1033,
        currentLanguage: 1033,
        currentUICultureName: "en-US",
        currentCultureName: "id-ID",
        clientServerTimeDelta: new Date("2019-09-19T03:10:12.4805931Z") - new Date(),
        siteClientTag: "13$$15.0.4719.1000",
        crossDomainPhotosEnabled: false,
        webUIVersion: 15,
        webPermMasks: {
          High: 2147483647,
          Low: 4294967295
        },
        pagePersonalizationScope: 1,
        userId: 2450,
        systemUserKey: "i:0\u0029.w|s-1-5-21-862529981-594047787-1136263860-332626",
        alertsEnabled: true,
        siteServerRelativeUrl: "\u002fsites\u002fproject",
        allowSilverlightPrompt: 'True',
        "themedCssFolderUrl": "/sites/project/_catalogs/theme/Themed/34D9CEA",
        "themedImageFileNames": {
          "spcommon.png": "spcommon-B35BB0A9.themedpng?ctag=14",
          "ellipsis.11x11x32.png": "ellipsis.11x11x32-2F01F47D.themedpng?ctag=14",
          "O365BrandSuite.95x30x32.png": "O365BrandSuite.95x30x32-C212E2FD.themedpng?ctag=14",
          "socialcommon.png": "socialcommon-6F3394A9.themedpng?ctag=14",
          "spnav.png": "spnav-230C537D.themedpng?ctag=14"
        }
      }
      $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Asset List')/items",
        headers: {
          "Accept": "application/json;odata=verbose",
          "Content-Type": "application/json;odata=verbose",
          "X-RequestDigest": $("#__REQUESTDIGEST").val(),
          "IF-MATCH": "*",
          "X-HTTP-Method": null
        },
        // url: siteurl + "/_api/web/lists/getbytitle('Asset List)/items",
        method: "GET",
        // headers: {
        //   "Accept": "application/json; odata=verbose"
        // },
        success: function (data) {
          console.log(data)
          // if (data.length > 0) {
          //   var value1 = data[0].fieldName; // this value1 you can assign it into your textbox
          // }
        },
        error: function (data) {
          // failure(data);
        }
      });

      // var hostweburl;
      // var appweburl;

      // // Load the required SharePoint libraries
      // $(document).ready(function () {
      //   //Get the URI decoded URLs.
      //   hostweburl = _spPageContextInfo.siteAbsoluteUrl
      // 	// appweburl = _spPageContextInfo.webAbsoluteUrl;
      // 	appweburl = window.location.protocol + "//" + window.location.host 
      // 	+ _spPageContextInfo.webServerRelativeUrl;

      //   // // // resources are in URLs in the form:
      //   // // // web_url/_layouts/15/resource
      //   var scriptbase = hostweburl + "/_layouts/15/";
      //   // Load the js files and continue to the successHandler
      //   $.getScript(scriptbase + "SP.RequestExecutor.js", execCrossDomainRequest);
      // });

      // // Function to prepare and issue the request to get
      // //  SharePoint data
      // function execCrossDomainRequest() {
      //   // executor: The RequestExecutor object
      //   // Initialize the RequestExecutor with the add-in web URL.
      //   // var executor = new SP.RequestExecutor(appweburl);
      //   var executor = new SP.RequestExecutor(appweburl);
      //   // console.log(executor)
      //   // Issue the call against the add-in web.
      //   // To get the title using REST we can hit the endpoint:
      //   //      appweburl/_api/web/lists/getbytitle('listname')/items
      //   // The response formats the data in the JSON format.
      //   // The functions successHandler and errorHandler attend the
      //   //      sucess and error events respectively.
      //   executor.executeAsync({
      //     url: appweburl +
      //       "/_api/web/lists/getbytitle('Asset List')/items",
      //     method: "GET",
      //     headers: {
      //       "Accept": "application/json; odata=verbose"
      //     },
      //     success: successHandler,
      //     error: errorHandler
      //   });

      //   // // Retrieve information from the host web
      //   // executor.executeAsync(
      //   // 	{
      //   // 		url:
      //   // 			appweburl +
      //   // 			"/_api/SP.AppContextSite(@hostweb)/web/?@hostweb='" + hostweburl + "'",
      //   // 		method: "GET",
      //   // 		headers: { "Accept": "application/json; odata=verbose" },
      //   // 		success: successHandler,
      //   // 		error: errorHandler
      //   // 	}
      //   // );
      // }

      // // Function to handle the success event.
      // // Prints the data to the page.
      // // function successHandler(data) {
      // // 	var jsonObject = JSON.parse(data.body);

      // // 	console.log(jsonObject);
      // // }

      // function successHandler(data) {
      //   console.log(data)
      //   // var result = JSON.parse(data.body).d;
      //   // console.log('Title: ' + result.Title + ' Url: ' + result.Url);
      // }

      // // Function to handle the error event.
      // // Prints the error message to the page.
      // function errorHandler(data, errorCode, errorMessage) {
      //   console.log(arguments);
      // }
    }



    // var clientContext;
    // var website;

    // // Make sure the SharePoint script file 'sp.js' is loaded before your
    // // code runs.
    // SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);

    // // Create an instance of the current context.
    // function sharePointReady() {
    // 	clientContext = SP.ClientContext.get_current();
    // 	website = clientContext.get_web();

    // 	clientContext.load(website);
    // 	clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
    // }
    // function onRequestSucceeded() {
    // 	alert(website.get_url());
    // }
    // function onRequestFailed(sender, args) {
    // 	alert('Error: ' + args.get_message());
    // }
    // function readSPRestApi() {
    // 	$.ajax({
    // 		url: "http://cdr/sites/project/_api/web/lists/getbytitle('Asset%20List')",
    // 		method: "GET",
    // 		headers: { 
    // 			"Accept": "application/json; odata=verbose",
    // 			"Authorization": "NTLM TlRMTVNTUAADAAAAGAAYAFYAAAAYABgAbgAAAAAAAABIAAAADgAOAEgAAAAAAAAAVgAAAAAAAACGAAAABYKIogUBKAoAAAAPVQA1ADMAMQA1ADcAOABQNaEO977uBQAAAAAAAAAAAAAAAAAAAABFD1yvvV2QeEFpFRQ48JAPcMb7U1eVkxE="
    // 		 },
    // 		success: function (data) {
    // 			//iteration example on each item
    // 			$.each(data.d.results, function(index, item){
    // 				//iteration task
    // 			} ); 
    // 			//complete(data);// Returns JSON collection of the results			
    // 		},
    // 		error: function (...args) {
    // 				console.log(...args)
    // 		}
    // 	});

    // }

    // readSPRestApi()

    // httpntlm.get({
    // 	url: "http://cdr/sites/project/_api/web/lists/getbytitle('Asset%20List')",
    // 	username: 'U531578',
    // 	password: '18081997',
    // 	domain: 'BCADOMAIN'
    // }, function (err, res) {
    // 	if (err) return err;

    // 	console.log(res.headers);
    // 	console.log(res.body);
    // });

    // // Create the XHR object.
    // function createCORSRequest(method, url) {
    // 	var xhr = new XMLHttpRequest();
    // 	if ("withCredentials" in xhr) {
    // 		// XHR for Chrome/Firefox/Opera/Safari.					
    // 		xhr.open(method, url, true);
    // 		xhr.setRequestHeader("Authorization", ntlm.challengeHeader("cdr", "BCADOMAIN"))
    // 		// console.log("Authorization", "NTLM " + btoa('U531578'+':'+'18081997'))

    // 	} else if (typeof XDomainRequest != "undefined") {
    // 		// XDomainRequest for IE.
    // 		xhr = new XDomainRequest();
    // 		xhr.open(method, url);
    // 		xhr.setRequestHeader("Authorization", "NTLM" + btoa('U531578'+':'+'18081997'))
    // 	} else {
    // 		// CORS not supported.
    // 		xhr = null;
    // 	}
    // 	return xhr;
    // }

    // // Helper method to parse the title tag from the response.
    // function getTitle(text) {
    // 	return text.match('<title>(.*)?</title>')[1];
    // }

    // // Make the actual CORS request.
    // function makeCorsRequest() {
    // 	// This is a sample server that supports CORS.
    // 	var url = "http://cdr/sites/project/_api/web/lists/GetByTitle('Asset List')/items";

    // 	var xhr = createCORSRequest('GET', url);
    // 	if (!xhr) {
    // 		alert('CORS not supported');
    // 		return;
    // 	}

    // 	// Response handlers.
    // 	xhr.onload = function () {
    // 		var text = xhr.responseText;
    // 		var title = getTitle(text);
    // 		alert('Response from CORS request to ' + url + ': ' + title);
    // 	};

    // 	xhr.onerror = function () {
    // 		alert('Woops, there was an error making the request.');
    // 	};

    // 	xhr.send();
    // }
    // makeCorsRequest()

    // $.ajax({  

    //   async: true,  // Async by default is set to “true” load the script asynchronously
    //   url: "http://cdr/sites/project/_api/web/lists/GetByTitle('Asset List')/items",   // URL to fetch data from sharepoint list
    //   method: "GET",  //Specifies the operation to fetch the list item

    //   headers: {  
    //       "accept": "application/json;odata=verbose",   //It defines the Data format
    //       "content-type": "application/json;odata=verbose"   //It defines the content type as JSON

    // 	},
    // 	success: function(response){
    // 		console.log(response)
    // 	},
    // 	error: function(...args){
    // 		console.log(...args)
    // 	}
    // })	

    // const settings = {
    // 	'type': 'GET',
    // 	'url': 'http://cdr/sites/project/_api/web/lists/getbytitle(\'Asset List\')',
    // 	"async": true,
    // 	"crossDomain": true,
    // 	"method": "GET",
    // 	"username": "U531578",
    // 	"password": "18081997",
    // 	"xhrFields": {
    // 		"withCredentials": true
    // 	},
    // 	"headers": {
    // 		// "Access-Control-Allow-Origin": "http://localhost:4200",
    // 		// "Access-Control-Allow-Credentials": true,
    // 		// "Accept": "application/json;odata=verbose",
    // 		// "Host": "cdr",
    // 		// "Accept-Encoding": "gzip, deflate",
    // 		// "Connection": "keep-alive",
    // 		"cache-control": "no-cache",
    // 	}
    // }

    // $.ajax(settings).done(function (response) {
    // 	console.log(response);
    // });
    // const options = {
    // 	Authorization: 'NTLM TlRMTVNTUAADAAAAGAAYAFYAAAAYABgAbgAAAAAAAABIAAAADgAOAEgAAAAAAAAAVgAAAAAAAACGAAAABYKIogUBKAoAAAAPVQA1ADMAMQA1ADcAOABQNaEO977uBQAAAAAAAAAAAAAAAAAAAABFD1yvvV2QeEFpFRQ48JAPcMb7U1eVkxE='
    // }
    // $.ajax({
    // 	url: 'http://cdr/sites/project/_api/web/lists/getbytitle(\'Asset%20List\')',
    // 	accepts: 'application/json;odata=verbose',
    // 	crossDomain: true,
    // 	headers: options,
    // error: function(...args){
    // 	console.log(...args)
    // },
    // success: function(response){
    // 	console.log(response)
    // }
    // });

    // function getQueryStringParameter(param) {
    // 	var params = document.URL.split("?")[1].split("&"); //Split Current URL With ? after that &
    // 	var strParams = "";
    // 	for (var i = 0; i < params.length; i = i + 1) { //param,parse with given URL parameter
    // 		var singleParam = params[i].split("=");
    // 		if (singleParam[0] == param) {
    // 			return decodeURIComponent(singleParam[1]); //Decode URL Result
    // 		}
    // 	}
    // }
    // var hostweburl = getQueryStringParameter("SPHostUrl"); //It wil return Host Web URL

    // var appweburl = getQueryStringParameter("SPAppWebUrl"); //It wil return App Web URL
    // console.log(hostweburl)
    // console.log(appweburl)
    // const options = {
    // 	url: 'http://cdr/sites/project/_api/web/lists/getbytitle(\'Asset%20List\')',
    // 	method: 'get',
    // 	crossDomain: true,
    // 	headers: {
    // 		'Accept': 'application/json;odata=verbose',
    // 		'Content-Type': 'application/json;odata=verbose',
    // 		'Authorization': 'NTLM TlRMTVNTUAADAAAAGAAYAFYAAAAYABgAbgAAAAAAAABIAAAADgAOAEgAAAAAAAAAVgAAAAAAAACGAAAABYKIogUBKAoAAAAPVQA1ADMAMQA1ADcAOAAsdxOmwEe+NQAAAAAAAAAAAAAAAAAAAABs07DLTfGQHkj6n7RpK9K1DlmjMJRROBM=',
    // 		'Host': '10.21.33.170'
    // 	}
    // };
    // $.ajax(options).done((data) => {
    // 	console.log(data);
    // }).fail((...args) => {
    // 	console.log(...args);
    // });

    //   var hostweburl;

    //   // Load the required SharePoint libraries.
    //   $(document).ready(function () {

    //     // Get the URI decoded URLs.
    //     hostweburl = 'http://cdr/sites/project'

    //     // The js files are in a URL in the form:
    //     // web_url/_layouts/15/resource_file
    //     var scriptbase = hostweburl + "/_layouts/15/";

    //     // Load the js files and continue to
    //     // the execOperation function.
    //     $.getScript(scriptbase + "SP.Runtime.js",
    //       function () {
    //         $.getScript(scriptbase + "SP.js", execOperation);
    //       }
    //     );
    //   });

    //   // Function to execute basic operations.
    //   function execOperation() {

    //     // Continue your program flow here.
    //     function retrieveSpecificListProperties(siteUrl) {
    //       var clientContext = new SP.ClientContext(siteUrl);
    //       var oWebsite = clientContext.get_web();
    //       this.collList = oWebsite.get_lists();

    //       clientContext.load(collList, 'Include(Asset List, Id)');
    //       clientContext.executeQueryAsync(
    //         Function.createDelegate(this, this.onQuerySucceeded),
    //         Function.createDelegate(this, this.onQueryFailed)
    //       );
    //     }

    //     function onQuerySucceeded() {
    //       var listInfo = '';
    //       var listEnumerator = collList.getEnumerator();

    //       while (listEnumerator.moveNext()) {
    //         var oList = listEnumerator.get_current();
    //         listInfo += 'Title: ' + oList.get_title() +
    //           ' ID: ' + oList.get_id().toString() + '\n';
    //       }
    //       alert(listInfo);
    //     }

    //     function onQueryFailed(sender, args) {
    //       alert('Request failed. ' + args.get_message() +
    //         '\n' + args.get_stackTrace());
    //     }
    //   }

    //   // Function to retrieve a query string value.
    //   // For production purposes you may want to use
    //   // a library to handle the query string.
    //   function getQueryStringParameter(paramToRetrieve) {
    //     console.log(paramToRetrieve)
    //     var params =
    //       document.URL.split("?")[1].split("&amp;");
    //     var strParams = "";
    //     for (var i = 0; i < params.length; i = i + 1) {
    //       var singleParam = params[i].split("=");
    //       if (singleParam[0] == paramToRetrieve)
    //         return singleParam[1];
    //     }
    //   }
    // }
  }
});
