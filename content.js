var docUrl = window.location.hostname;
if (docUrl == 'www.theglobeandmail.com'){
	var authorEl = document.getElementsByClassName('byline author vcard selectionShareable');
	var authorElItem = authorEl.item(0);
	var authorHref = authorElItem.querySelectorAll("a");
	var authorLinkSplit = authorHref.item(0).getAttribute("href").split("/");
	var authorName = authorLinkSplit[authorLinkSplit.length-1];

	if (authorName=="margaret-wente"){
		alert("This article is by Margaret Wente...are you sure you want to proceed?")
		alert("Are you absolutely positive?")
		alert("Just to be clear, you are going to proceed to this article by Margaret Wente. Are you certain that you want to do this?")
	}
}