function getOneOzGoldPriceUsd() {
  var url = "https://data-asg.goldprice.org/dbXRates/INR";
  var options =
      {
        "method"  : "GET",
        "followRedirects" : true,
        "muteHttpExceptions":true
      };
  var result = UrlFetchApp.fetch(url, options);
  
  var data = JSON.parse(result.getContentText());
  
  Logger.log(data);
  
  var goldPrice = data['items'][0]['xauPrice'];
  
  return goldPrice;
}

//function updateGoldPriceInSheet(){
 // var ss = SpreadsheetApp.getActive();
//  var valuesSheet = ss.getSheetByName("VALUES");
//  var range = valuesSheet.getRange("B1:B1");
//  var goldValueCell = range.getCell(1,1);
//  goldValueCell.setValue(this.getOneOzGoldPriceUsd());  
//}

function updateGoldPriceInSheet(){

  getOneOzGoldPriceUsd();
  var ss= SpreadsheetApp.getActive();
  var valuesSheet = ss.getSheetByName("Values");
  var datetime = Utilities.formatDate(new Date(), "GMT+5:30", "dd/MM/yyyy")
  var timeof = Utilities.formatDate(new Date(), "GMT+5:30", "HH");
  if(timeof <12){
    timeof = "OPEN"
  }else{
    timeof = "CLOSE"
  }
  var goldval = this.getOneOzGoldPriceUsd();
  var goldg = 560350736.1711/goldval
  var goldk = 560350730890.3644/goldval
  var list = [datetime, timeof, goldval, goldg, goldk]
  Logger.log(list)
  valuesSheet.appendRow( list );
  var emailAddress ="Name@gmail.com";
  var subject ="Gold Rate";
  
  var html = '<html><head><h1>Gold Rate<h1><style> table, th, td { border: 1px solid black; border-collapse: collapse; } </style></head><body> <table style="width:100%"><tr><th>Date</th><th>Time</th><th>Gold Rate oz</th><th>Gold Rate g</th><th>Gold Rate kg</th></tr><tr><td>'+datetime+'</td><td>'+timeof+'</td><td>'+goldval+'</td><td>'+goldg+'</td><td>'+goldk+'</td></tr></table> </body></html>'
  var templ = HtmlService.createTemplate(html);
  // var nn = HtmlService.createTemplate(html)
  // templ.candidate = candidate;
  var message = templ.evaluate().getContent();
  MailApp.sendEmail({
    to: emailAddress,
    subject: subject,
    htmlBody: message
  });
}

function addrow(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  
  // Appends a new row with 3 columns to the bottom of the
  // spreadsheet containing the values in the array
  var datetime = Utilities.formatDate(new Date(), "GMT+5:30", "dd/MM/yyyy")
  //var timeof = Utilities.formatDate(new Date(PUEndTime), "GMT+5:30", "a");
  var timeof = Utilities.formatDate(new Date(), "GMT+5:30", "HH");
  if(timeof <12){
    timeof = "AM"
  }else{
    timeof = "PM"
  }
  //var datetime = "20 June 2020"
  var opencost = "30,000"
  var closecost = "31,000"
  var list = [datetime, opencost ,closecost, timeof]
  Logger.log(list)
  sheet.appendRow( list );
}

function test(){
  var html = '<html><body><h1>This is heading 1</h1><h2>This is heading 2</h2><h3>This is heading 3</h3><h4>This is heading 4</h4><h5>This is heading 5</h5><h6>This is heading 6</h6></body></html>'
  var templ = HtmlService.createTemplate(html);
  // var nn = HtmlService.createTemplate(html)
  // templ.candidate = candidate;
  var message = templ.evaluate().getContent();
  MailApp.sendEmail({
    to: 'Name@gmail.com',
    subject: "Your application is approved!",
    htmlBody: message
  });
}
