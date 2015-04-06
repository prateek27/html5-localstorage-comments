 var count ;
    if(localStorage.getItem('count'==null))
        { count=0;     }
    else{
        count = localStorage.getItem('count');
    }

    function publish_comments(){
    count++;
    var input_text = document.getElementById("comment_input").value;
    
    var para = document.createElement("p");
    
    var text_element = document.createTextNode(input_text);
    //console.log(text_element);
    para.appendChild(text_element);
    document.getElementById("comments_div").appendChild(para);
    var comment_id = "id"+count;
    console.log("id="+comment_id);
    localStorage.setItem(comment_id,input_text);
   document.getElementById("comment_input").value="";
    localStorage.setItem("count",count);
    }

    function fetch_comments(){
         if(localStorage.getItem('count'==null))
            { count=0;}
         else{
        count = localStorage.getItem('count');
    }
    for(x=1;x<=count;x++){
        var comment_text = localStorage.getItem("id"+x);
       // console.log(comment_text);
        var para = document.createElement("p");
        var textNode = document.createTextNode(comment_text);
        para.appendChild(textNode);
        document.getElementById("comments_div").appendChild(para);
        }
    }
 fetch_comments();