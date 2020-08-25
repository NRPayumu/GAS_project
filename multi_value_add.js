var sheet_url = PropertiesService.getScriptProperties().getProperty('SHEET_URL');

function doPost(e){
  SheetAppend(e);
  return 0;
}

function SheetAppend(e){
  console.log("onTime");
  var ss = SpreadsheetApp.openByUrl(sheet_url);
  var sheet = ss.getSheets()[0];
  var PostData = JSON.parse(e.postData.contents);
  //var jsonString = e.postData.getDataAsString();
  //var PostData = JSON.parse(jsonString);
  //var PostData = JSON.parse(e.postData.getDataAsString());
  //console.log(PostData.value);
  var spl = PostData.value.split(" ")   //multi USB value
  //var spl = PostData.value.split("\n");
  
  // 行の最後に値を追加
  //console.log(spl[0]);
  //sheet.appendRow([PostData.name, PostData.value]);
  sheet.appendRow([PostData.name, spl[0], spl[1], spl[2], spl[3],spl[4] ]);   //multi USB append
  var temp = PostData.value ;
  /*
  if (temp >= 40.00){
    var body = '温度が'+ temp + '℃に達しました' ;
    
    var strTo="atuzirou.fukui@gmail.com";
    var strSubject="自動送信：温度センサー：報告";
    var strBody=body;
    GmailApp.sendEmail(
      strTo,
      strSubject,
      strBody
    );
  }*/
  return 0;
}

function test(){
  var ss = SpreadsheetApp.openByUrl(sheet_url);
  var sheet = ss.getSheets()[0];
  var PostData = "1 10 11 100 101 111";
  var spl = PostData.split(" ");   //multi USB value
  
  // 行の最後に値を追加
  //sheet.appendRow([PostData.name, PostData.value]);
  console.log(spl[0]);
  sheet.appendRow([PostData, spl[0], spl[1], spl[2], spl[3],spl[4] ]);   //multi USB append
  var temp = PostData.value ;
  /*
  if (temp >= 40.00){
    var body = '温度が'+ temp + '℃に達しました' ;
    
    var strTo="atuzirou.fukui@gmail.com";
    var strSubject="自動送信：温度センサー：報告";
    var strBody=body;
    GmailApp.sendEmail(
      strTo,
      strSubject,
      strBody
    );
  }*/
  return 0;
}
