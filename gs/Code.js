/* eslint-disable no-unused-vars */
function fetchFromEndpoint() {
  var url = 'https://kaitlinandnorman.com/api/admin';

  var response = UrlFetchApp.fetch(url);

  Logger.log(response);
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Wedding Import Tool');
  menu.addItem('Import', 'fetchFromEndpoint').addToUi();
}
