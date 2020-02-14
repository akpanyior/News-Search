$(document).ready(function(){

    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d3addcb049f948a48106f069a85ee2a4";

    $.ajax({
        url:url,
        method:"GET",
        dataType:"Json",

        beforeSend:function(){
            $(".progress").show();          
        },

        complete:function(){
            $(".progress").hide();  
        },

        success:function(news){
            let output = "";
            let latestNews = news.articles;
            let post_limit = 3;
            let materializeColWidth = 12/post_limit;
            for(var i in latestNews){
                output +=`
                <div class="col l${materializeColWidth} m6 s12">
                <div class="card medium hoverable">
                <div class="card-image">
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                </div>
                <div class="card-content">
                <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
                    <h6>${latestNews[i].title}</h6>
                    </div>

                    <div class="card-reveal">
                    <span class="card-title"><i class="material-icons right">close</i></span>
                       <p>${latestNews[i].description}</p>
                       <p class="pull-right">${latestNews[i].author}</p>
                       <p>${latestNews[i].publishedAt}</p>
                    </div>

                    <div class="card-action">
                    <a href="${latestNews[i].url}" class="btn">Read More</a>
                   </div>
                 </div>
                </div>
                `;
            }
        if(output !==""){
            $("#newsResults").html(output);
        }
        },

        error: function(){
            $("#newsResults").html("Some error occured");
        }
    })

    
});

