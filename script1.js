<script>
    var nickname = prompt("Enter nickname: ", "0");
    var height = prompt("Enter height in inches: ", "0" );
    var weight = prompt("Enter weight in kilograms: ", "0");

    var inch = height % 12;
    Math.round(inch);
    var foot = (height - inch) / 12;
    Math.round (foot);
    var pounds = weight = 2.205;
    Math.round(pounds);


    alert("Name: " + nickname + "<\br>" + "Height: " + foot "'" + "<\br>" + "Weight: " + pounds + " lbs");


</script>