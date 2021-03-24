//this are examples for an integration test 
export async function getUrl() {
  return browser.runtime.getURL("popup-content.html");
}
