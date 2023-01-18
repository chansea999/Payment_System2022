$(".content").hide();

function getInto(){
    var username = document.getElementById("na").value;
    var password = document.getElementById('pa').value;
    var usrname ="seachan";
    var passwrd="seachan123";

   if(username == usrname && password == passwrd){
    // widow.alert('Login Again' );

   $(document).ready(function(){
   $("#btn").click(function(){
     $(".shadow").hide();

    $(".content").toggle();
             $("#show").click("button",function(e){
               e.preventDefault();
               var m=Number(document.getElementById('laon-money').value);		
               var r=Number(document.getElementById('loan-tax').value);	
               var y=Number(document.getElementById('time-pay').value);	
               var my=document.getElementById('pay-by').value;	
               var dat=document.getElementById('date-pay').value;

               if(m==0 || m==null){
               alert("សូមបញ្ចូលប្រាក់");

               }else if(r==0 || r==null){

               alert("សូមបញ្ចូលការប្រាក់");
                }else if(y==0 || y==null){

               alert("សូមបញ្ចូលរយៈពេលបង់គិតជា");

                 }else if(my==0 || my==null){

               alert("សូមបញ្ចូលរយៈពេលបង់គិតជា");

               }else if(dat==0 || dat==null){

               alert("សូមបញ្ចូលថ្ងៃខែបង");

               }else{
                   var totalpay="";
                   
                   document.getElementById('monney-lend').innerHTML="$"+(m.toFixed(2));
                   document.getElementById('pay-through').innerHTML=r+"%";
                   document.getElementById('pay-year').innerHTML= y+"ឆ្នាំ"  ;
                   document.getElementById('pay-every').innerHTML=my;
                   document.getElementById('d-pay').innerHTML=dat;

                   var it =(m*r*y)/100;
                   var total=(m+it); 
               
                   // if choose year

                   if (my=="ឆ្នាំ"){   
                       totalpay+='<tr> <th>ល.រ</th> <th>ឆ្នាំទី</th> <th>ប្រាក់ត្រូវបង់(ក្នុងមួយឆ្នាំ)</th> <th>ការប្រាក់(ក្នុងមួយឆ្នាំ)</th> <th>ប្រាក់ដើមនៅសល់</th> </tr>';
                       totalpay+='<tfoot><tr><td colspan="3"><b>'+'សរុបប្រាក់បង់ : '+'$'+'   '+(total.toFixed(2))+'</b></td>'+
                   '<td colspan=""> <b>'+'សរុបការប្រាក់ : '+'$'+'   '+(it.toFixed(2))+'</b></td><td rowspan="2"></td></tr></tfoot>';
                       for(var i=1;i<=y;i++) {
                           totalpay+='<tr>'	
                           for(var j=1;j<=1;j++){             
                               totalpay+='<td>'+i+'</td>';
                               totalpay+='<td>'+i+'</td>';
                               totalpay+='<td>'+'$'+((total/(y)).toFixed(2))+'</td>';
                               totalpay+='<td>'+'$'+((it/y).toFixed(2))+'</td>';
                               totalpay+='<td> '+'$'+((total-(total/(y)*i)).toFixed(2))+'</td>';
                           }
                           totalpay+='</tr>';
                       }
                       
                       document.getElementById('showinv').innerHTML=totalpay;
                   }
                   // if choose month
                   else if(my=="ខែ"){   

                       totalpay+='<tr> <th>ល.រ</th> <th>ខែទី</th> <th>ប្រាក់ត្រូវបង់(ក្នុងមួយខែ)</th> <th>ការប្រាក់(ក្នុងមួយខែ)</th> <th>ប្រាក់ដើមនៅសល់</th> </tr>';
                       totalpay+='<tfoot><tr><td colspan="3"><b>'+'សរុបប្រាក់បង់ : '+'$'+(total.toFixed(2))+'</b></td>'+
                       '<td colspan=""> <b>'+ 'សរុបការប្រាក់ : '+'$'+(it.toFixed(2))+'</b></td><td rowspan="2"></td></tr></tfoot>';
                       for(var i=1;i<=y*12;i++){

                           totalpay+='<tr>'	
                               for(var j=1;j<=1;j++){
                                   totalpay+='<td>'+i+'</td>';
                                   totalpay+='<td>'+i+'</td>';
                                   totalpay+='<td>'+'$'+((total/(y*12)).toFixed(2))+'</td>';
                                   totalpay+='<td>'+'$'+((it/(y*12)).toFixed(2))+'</td>';
                                   totalpay+='<td> '+'$'+((total-(total/(y*12)*i)).toFixed(2))+'</td>';
                               }
                               totalpay+='</tr>';
                       }
                   document.getElementById('showinv').innerHTML=(totalpay);
                   }
               }
           });
       });
   });

   }

   else{
    // user input by keyboard for user and pass it is show please login agin
       alert('Please login Agin' );
   }
                   
   }
   document.getElementById('btn').addEventListener("click",getInto);
 
// for btn clear
function Clear_login(){
    document.getElementById("na").value = '';
    document.getElementById("pa").value = '';
}
// function for clear to in the content
function clear_content(){
    document.getElementById("laon-money").value = '';
    document.getElementById("input-txt").value = ''
    document.getElementById("loan-tax").value = '';
    document.getElementById("time-pay").value = '';
    document.getElementById("pay-by").value = '';
    document.getElementById("date-pay").value = '';
}