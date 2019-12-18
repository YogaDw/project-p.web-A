function Login(){
       
    var username=document.login.username.value;
    username=username.toLowerCase();
    var password=document.login.password.value;
    password=password.toLowerCase();
   
        if (username=="yoga" && password=="123"){
        alert("Selamat anda berhasil login");
        }
        else{
        alert("User name dan password anda salah!");
        }
    }     
    
    
    $(document).ready(function() {
        $(".pesan").hide();
        $(".baca_selengkapnya").click(function(){
          $(".pesan").slideDown('slow');
          $(this).hide();
        })
      });