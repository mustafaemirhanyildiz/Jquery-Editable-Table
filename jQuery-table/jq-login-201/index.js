$(function(){
    $(".enter").click(function(){
        var password=$(".txtPassword").val()
        var name=$(".txtName").val()

        if(name=="admin"&&password=='123'){
            console.log("fdşgskjgşsdf")
            window.location.href="/jQuery-table/table.html"
        }
        else{
            alert("Yanlış Şifre Lütfen Tekrar Deneyiniz!!!")

        }
    })
})