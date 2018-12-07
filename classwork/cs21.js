$(document).ready(function(){
                $("#odd").click(function(){
                    $("tr:odd").hide();
                    $("tr:even").show();
                    $("#three").animate({top: '50px'}, 5000);
                    $("#a").append(" Appended Text")                    
                });
                $("#even").click(function(){
                    $("tr:even").hide();
                    $("tr:odd").show();
                    $("#three").animate({top: '400px'}, 5000);
                });

                $("p").click(function(){
                    $("h1, p, tr").addClass("blue");
                    //$("p").addClass("blue");
                    $("h2").addClass("red");
                });

                $("h1").click(function(){
                    $("h1, p, tr").removeClass("blue");
                    $("h1, p, tr").addClass("red");
                    $("h2").removeClass("red");
                });

                $("h2").click(function(){
                    $("*").removeClass();
                });

                $("#addmore").click(function(){
                    //$("tr").after("<tr> <td colspan='5'>New row</td></tr>")
                    $("td:last-child").after("<td> new cell</td>");
                })
            })