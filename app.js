$(document).ready(function(){

    function loadpage(page){
        $.ajax({
            url : page + ".html",
            success : function(data){
                $("#content").html(data)
            }
        })
    }

    $("#home").click(function(e){
        e.preventDefault();
        loadpage("index")
    })

    $("#about").click(function(e){
        e.preventDefault();
        loadpage("about")
    })

    $("#contact").click(function(e){
        e.preventDefault();
        loadpage("contact")
    })

    $("#category").click(function(e){
        e.preventDefault();
        loadpage("category")
    })

    $("#gallery").click(function(e){
        e.preventDefault();
        loadpage("gallery")
    })
    $("#feedback").click(function(e){
        e.preventDefault();
        loadpage("feedback")
    })
    loadpage("index")
})

