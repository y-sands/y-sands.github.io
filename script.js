$(' .general img ').each(function() {
    $(this).wrap("<a href='" + this.src + "'/>");
});

/////$(document).ready(function(){
   /// $("img").wrap("<btton></button>")
//})

$(document).ready(function(){
   $("img").wrap(function(){
    return "<a href="+"(this).src"+"></a>"
});
})
