$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
       
        email: {
          required: true,
          email: true
        },
        password : {
          required :true,
          pwcheck: true,
          minlength: 8

        }
      },
      messages : {
        name: {
          minlength: "Name should be at least 3 characters"
        },
        
        },
        email: {
          email: "The email should be in the format: abc@domain.tld"
        },
        password: {
          required: "Enter valid password",
          
        }
      }

  });
    });
});
 


