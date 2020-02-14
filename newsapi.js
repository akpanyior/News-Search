$(document).ready(function(){

    $("#searchbtn").on("click",function(e){
        e.preventDefault();

        let query = $("#searchquery").val();
        let url = "https://newsapi.org/v2/everything?q="+query+"&domains=wsj.com&apiKey=d3addcb049f948a48106f069a85ee2a4" ;

        if(query !== ""){

            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",

                beforeSend: function(){
                    $("#loader").show();
                },

                complete: function(){
                    $("#loader").hide();
                },

                success: function(news){
                    let output = "";
                    let latestNews = news.articles;

                    for(var i in latestNews){
                        output +=`
                        <div class="col l12 m6">
                       <h4>${latestNews[i].title}</h4>
                       <img src="${latestNews[i].urlToImage}">
                       <p>${latestNews[i].description}</p>
                       <p>Publish on: ${latestNews[i].publishedA}</p>
                       <a href="${latestNews[i].url}" class="btn">Read more</a>
                        `;
                    }

                    if(output !==""){
                        $("#newsResults").html(output);
                        M.toast({
                            html: "There you go, nice reading",
                            classes: 'green'
                        });

                    }else{
                        $("#newsResults").html("This news isn't available");
                        M.toast({
                            html: "This news isn't available",
                            classes: 'red'
                        });
                    }
                },

                error: function(){
                    M.toast({
                        html: "We encounter an error, please try again",
                        classes: 'red'
                    });
                }

            });

        }else{
            M.toast({
                html: "Please enter something",
                classes: 'red'
            });
        }
    });
});