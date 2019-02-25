var list = $("ul.list");
$.getJSON("http://localhost:3000/idea/list", function(data){
    alldata = data.list;
    alldata.forEach(function(idea){
        var li = $("<li></li>")
        $('<span class="ideaTitle"><a href="idea.html?=' +idea.ideaId+ '">' +idea.title+'</a></span><br>').appendTo(li);
        $('<span class="ideaAuthor">' +idea.name+ '</span><br>').appendTo(li);
        $('<span class="ideaShort">' +idea.desc+ '</span><br>').appendTo(li);
        li.appendTo(list);
    })
});