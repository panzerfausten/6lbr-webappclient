/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getMotesList() {
    var URL = "php/index.php";
    $.ajax({
        type: 'GET',
        	
        url: URL,
        dataType: "json",
        success: function (responseData, textStatus, jqXHR) {
 		addNodes(responseData);           
            
        },
	 error: function (xhr, ajaxOptions, thrownError) {
		$(".nodeListWrapper").html("Could not load motes info");
	}
    });
}
function addNodes(nodesData){
	//alert(nodesData);
		

  header =                "<div class='nodeList'>"+       "<header>Motes</header>";
	$(".nodeListWrapper").html("");
	
	nodesHtmlData = "";
	jQuery.each(nodesData, function (i, val){
	
		linkNode = "http://["+val+"]";
		htmlNode =
		 " <a class='nodeListElement' href='"+linkNode+"'>"+
                "<span class='nodeListElement_img' >"+
                    "<img src='http://mozorg.cdn.mozilla.net/media/img/styleguide/products/firefoxos/action-icons/common-refresh.png' alt='ad' height='25' width='25'/>"+
                "</span>"+
                "<span class='nodeListElement_label'>"+val+"</span>"+
            "</a>";
		nodesHtmlData += htmlNode;
//		$(".nodeListWrapper").append( htmlNode);
//		//console.log(htmlNode);

	});
	$(".nodeListWrapper").html(header + nodesHtmlData+"</div>");

}
