/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function vali(){
    var nom = document.getElementById("nombre").value;
    var contraseña = document.getElementById("contra").value;
    var vali =  /^[a-z-A-Z]{1,64}$/;
    
    if (nom.length<3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre es demaciado corto!'
    });
    }else if (contraseña.length<5){
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña es muy corta!'
    });
    }else if(!vali.test(nom)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa solo letras en el nombre!'
    });
    }else if (nom.length>15){
       Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre es demaciado largo!'
    });
    }else if (contraseña.length>20){
       Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña es muy larga!'
    });
    }else{
          window.location.href = 'Principal.jsp';    
          Swal.fire(
            'Sesion Iniciada!',
            'Bienvenido a Calabozos y Medallas!',
            'success'
       );
    }
      
}

 function registro(){ 
     var nomb = document.getElementById("nombre").value;
 
     var con = document.getElementById("contraseña").value;
      
     var con2 = document.getElementById("contraseña2").value;
     
     var fech = document.getElementById("fecha").value;
     alert(fech);
     
     var vali =  /^[a-z-A-Z]{1,64}$/;
     
     if (nomb.length<3) {
      Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre es demaciado corto!'
    });
    }else if (con.length<5 || con2.length<5){
              Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña es muy corta!'
    });
    }else if(!vali.test(nomb)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa solo letras en el nombre!'
    });
    }else if (nomb.length>15){
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre es demaciado largo!'
    });
    }else if (con.length>20 || con2.length>20){
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña es muy larga!'
    });
    }else if(con !== con2){
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña no coincide!'
    });
    }else if(fech===""){
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese su fecha de nacimiento!'
    });
    }else{
        window.location.href = 'Principal.jsp';
    }
 }
