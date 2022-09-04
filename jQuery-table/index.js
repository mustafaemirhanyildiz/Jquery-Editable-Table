
$("#myBtn").click(function(){
  $("#myModal").show(250)
})

$(".close").click(function(){
  $("#myModal").hide()
})



var img


$("#fileupload").change(function(event){
    img=URL.createObjectURL(event.target.files[0])
 })



$(".add_new").on("click",function(e) {
    e.preventDefault();
    var no=$("input[name='no']").val();
    var product=$("input[name='product']").val();
    var name=$("input[name='name']").val();
    var email=$("input[name='email']").val();
    var owner=$("input[name='owner']").val();

 

    var temp=`
    <tr data-name="name" data-email="email" data-no="no" data-product="product"  data-owner="owner"><td>${no}</td><td><img src="${img}" id="upload-img">
    </td><td>${name}</td><td>${email}</td><td>${owner}</td><td>
    <button class="btn-edit"><i class="fa-solid fa-pen-to-square "></i></button> 
    <button class="btn-delete"><i class="fa-solid fa-trash btn-delete" id="icon-delete"></i></button></td></tr>
    `

     $(".tbody").append(temp);
     
     img=""
     $("input[name='name']").val("");
     $("input[name='no']").val("");
     $("input[name='email']").val("");
     $("input[name='owner']").val("");
     $("#myModal").hide()



  });


  $('body').on('click','.btn-delete',function() {
    $(this).fadeOut(250,function(){
        $(this).parents('tr').remove();

    })
  });

  $('body').on('click','.btn-edit',function() {
    var no=$(this).parents('tr').attr('data-no');
    var name=$(this).parents('tr').attr('data-name');
    var email=$(this).parents('tr').attr('data-email');
    var owner=$(this).parents('tr').attr('data-owner');



    $(this).parents('tr').find('td:eq(0)').html("<input name='edit_no' placeholder='"+no+"'>");
    $(this).parents('tr').find('td:eq(1)').html("<label for='fileupload'>Upload Image</label><input type='file' id='fileupload'>");
    $(this).parents('tr').find('td:eq(2)').html("<input name='edit_text' placeholder='"+name+"'>");
    $(this).parents('tr').find('td:eq(3)').html("<input name='edit_email' placeholder='"+email+"'>");
    $(this).parents('tr').find('td:eq(4)').html("<input name='edit_owner' placeholder='"+owner+"'>");
    $(this).parents('tr').find('td:eq(5)').prepend(`<button class="btn-update"><i class="fa-solid fa-pen-to-square "></i></button> `);
    $(this).hide()
  });


$('body').on('click','.btn-update',function(){

    var no=$(this).parents('tr').find("input[name='edit_no'] ").val();
    //var product=$(this).parents('tr').find("input[name='edit_product']").val();
    var name=$(this).parents('tr').find("input[name='edit_text']").val();
    var email=$(this).parents('tr').find("input[name='edit_email']").val();
    var owner=$(this).parents('tr').find("input[name='edit_owner']").val();



    $(this).parents('tr').find('td:eq(0)').text(no)
    //$(this).parents('tr').find('td:eq(1)').text(product);
    $(this).parents('tr').find('td:eq(1)').html(`<img src='${img}' id='upload-img'></img>`)
    
    $(this).parents('tr').find('td:eq(2)').text(name);
    $(this).parents('tr').find('td:eq(3)').text(email);
    $(this).parents('tr').find('td:eq(4)').text(owner);


    $(this).parents('tr').attr('data-no',no);
    //$(this).parents('tr').attr('data-product',product);
    $(this).parents('tr').attr('data-name',name);
    $(this).parents('tr').attr('data-email',email);
    $(this).parents('tr').attr('data-owner',owner);

    $(this).parents('tr').find('.btn-edit').show();
    $(this).parents('tr').find('.btn-update').remove();


  })




  // Search Button


  $(function(){
    $("#search").keyup(function(){
      search_table($(this).val());
    })
    function search_table(value){
      $('.tbody tr').each(function(){
        var found ='false'
        $(this).each(function(){
          if($(this).text().toLowerCase().indexOf(value.toLowerCase())>=0){
            found='true'
          }
        })
        if(found=='true'){
          $(this).show()
        }
        else{
          $(this).hide()

        }
      })
    }
  })









