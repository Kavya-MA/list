
function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
           
         var response=JSON.parse(this.responseText);   
        var output="<table><th>Serial Number</th><th>Item Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></table>";
            for(var i=0;i<response.length;i++){
                output+=("<tr><td>"+response[i].serialnumber+"</td><td>"+response[i].name+"</td><td>"+response[i].quantity+"</td><td>"+response[i].unit+"</td><td>"+response[i].department+"</td><td>"+response[i].notes+"</td></tr>");
                
            } 
            document.getElementById("myTable").innerHTML=output;
        }
    }
  xhttp.open("GET","grocery.json",true);
  xhttp.send();
    }