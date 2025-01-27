var confirmShare = confirm("Do you agree to share your personal information with the site?");
     if (confirmShare) {
        console.log(`Name: ${nickname}\nHeight: ${feet}'${inches}\"\nWeight: ${weightLbs} lbs`);
     }  
     else  {
        console.log("User does not wish to share his/her information.");
     }

