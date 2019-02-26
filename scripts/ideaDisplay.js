var id = window.location.search.slice(2);
$('.loader').show();
var container = $("div.content");
$.getJSON("https://fdcidea.herokuapp.com/idea/"+id, function(data){
    $('.loader').hide();
    idea_data = data.idea[0];
    $('<h1 class="col-sm-12">' +idea_data.title+ '</h1>').appendTo(container);
    $('<div class="col-sm-12 author"><a href="mailto:'+idea_data.email+'">' +idea_data.name+ '</a></div>').appendTo(container);
    if(idea_data.club != undefined){
        $('<div class="col-sm-12 org">' +idea_data.club+ '</div>').appendTo(container);
    }
    $('<div class="col-sm-12 Desc" id="shortDesc">' +idea_data.desc+ '</div>').appendTo(container);
    if(idea_data.long_desc != undefined){
        $('<div class="col-sm-12 Desc" id="LongDesc">' +idea_data.long_desc+ '</div>').appendTo(container);
    }    
})