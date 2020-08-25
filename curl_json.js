var sheet_url = PropertiesService.getScriptProperties().getProperty('SHEET_URL');

function doPost(e){
  SheetAppend(e);
  return 0;
}

function SheetAppend(e){  
  var ss = SpreadsheetApp.openByUrl(sheet_url);
  var sheet = ss.getSheets()[0];
  var PostData = JSON.parse(e.postData.contents);
  //var jsonString = e.postData.getDataAsString();
  //var data = JSON.parse(jsonString);
  
  // 行の最後に値を追加
  //sheet.appendRow([PostData.name, PostData.value]);
  
  var temp = PostData.value ;
  //var temp = data.value;
  var body = '温度が'+ temp + '℃に達しました' ;
  
  var wnsplit = getWeatherData().split(" ")
  body = getWeatherData();
  //body+= "\n"+wnsplit[0]+"\n"+wnsplit[1]+"\n"+wnsplit[2]+"\n"+wnsplit[3];
  body+= "\n" + temp;
  if (temp >= 40.00){
    var strTo="atuzirou.fukui@gmail.com";
    strTo="graceful.phantasy@gmail.com";
    var strSubject="自動送信：温度センサー：報告";
    var strBody=body;
    var strSender="AutoTempSensor";
    GmailApp.sendEmail(
      strTo,
      strSubject,
      strBody,
      {
        //from: strFrom,
        name: strSender
      }
    );
  }
  return 0;
}
