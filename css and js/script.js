// image slider home
$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();

      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10); 
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });
  });


  
  function validasiemail (email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  function numval(){
  //taro ini di validasi, validasinya ancur
    var quantity=document.getElementById('quatity1').value;
    if(quisNaN(quantity)){
        alert("Nomer aja!");
        return false;
    }else return 0;
  }

  function validasi(){
    
    var nama = document.getElementById('nama1').value;
    var email = document.getElementById('email1').value;
    var password = document.getElementById('password1').value;
    var option=document.getElementsByName('radio1');

    if(nama.length==0){
      alert("Isi nama!");
      return false;
    }

    if(validasiemail(email)==false){
      alert("Isi Email yang bener!");
      return false;
    }

    if(password.length<6){
      alert("Password harus lebih dari 6!");
      return false;
    }
    
    if (!(option[0].checked || option[1].checked)) {
      alert("Pilih salah satu!");
      return false;
    }

    numval();

    if(!form.terms.checked) {
      alert("Accept bre!");
      form.terms.focus();
      return false;
    }
   
    return true;
  }

  
  
  
  
