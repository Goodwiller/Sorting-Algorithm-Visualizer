
$(document).ready(()=>{
    

    $('#barmenu').hover(()=>{
        $('#b50').click(()=>{

            document.getElementById("count").value = "50";
            document.getElementById("count").innerHTML = "Bar Count:  50  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            numOfElments=50;
            init();
        });
        $('#b100').click(()=>{

            document.getElementById("count").value = "100";
            document.getElementById("count").innerHTML = "Bar Count:  100  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            numOfElments=100;
            init();
        });
        $('#b150').click(()=>{

            document.getElementById("count").value = "150";
            document.getElementById("count").innerHTML = "Bar Count:  150  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            numOfElments=150;
            init();
        });
        $('#b200').click(()=>{

            document.getElementById("count").value = "200";
            document.getElementById("count").innerHTML = "Bar Count:  200  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            numOfElments=200;
            init();
        });
        $('#b250').click(()=>{

            document.getElementById("count").value = "250";
            document.getElementById("count").innerHTML = "Bar Count:  250  &nbsp <span class=\"arrow\">&#x25BC;</span>";
            numOfElments=250;
            init();
        });
    });

    $('#speed').hover(()=>{
        $('#s1').click(()=>{

            document.getElementById("speed").value = "1";
            document.getElementById("speed").innerHTML = "Speed:  1 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=10;
        });
        $('#s2').click(()=>{

            document.getElementById("speed").value = "2";
            document.getElementById("speed").innerHTML = "Speed:  2 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=8;
        });
        $('#s3').click(()=>{

            document.getElementById("speed").value = "3";
            document.getElementById("speed").innerHTML = "Speed:  3 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=6;
        });
        $('#s4').click(()=>{

            document.getElementById("speed").value = "4";
            document.getElementById("speed").innerHTML = "Speed:  4 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=4;
        });
        $('#s5').click(()=>{

            document.getElementById("speed").value = "5";
            document.getElementById("speed").innerHTML = "Speed:  5 X &nbsp<span class=\"arrow\">&#x25BC;</span>";
            speed=2;
        });
    });


    $('#start').click(()=>{
        run();
    });

    $('#algomenu').hover(()=>{
        $('#a1').click(()=>{

            document.getElementById("algorithm").value = "bubble";
            document.getElementById("algorithm").innerHTML = "Bubble Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";
        });
        $('#a2').click(()=>{

            document.getElementById("algorithm").value = "insertion";
            document.getElementById("algorithm").innerHTML = "Insertion Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";

        });
        $('#a3').click(()=>{

            document.getElementById("algorithm").value = "selection";
            document.getElementById("algorithm").innerHTML = "Selection  Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";

        });
        $('#a4').click(()=>{

            document.getElementById("algorithm").value = "merge";
            document.getElementById("algorithm").innerHTML = "Merge Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";

        });
        $('#a5').click(()=>{

            document.getElementById("algorithm").value = "quick";
            document.getElementById("algorithm").innerHTML = "Quick Sort &nbsp<span class=\"arrow\">&#x25BC;</span>";

        });
    });



    $('#generate').click(()=>{
        init();
    });



});