"use strict";
var simonArray   = [];
var usersArray   = [];
var simonCheck = simonArray



function getRandomNumber(){
    var randomNumber = Math.floor(Math.random()*12)+1;

        if (randomNumber >= 1 && randomNumber <= 3) {
            simonArray.push($("div[data-id='1']").attr("data-id"));
            $("div[data-id='1']").animate({
                opacity: "1"
            }).animate({
                opacity:".25"
            },1000)
        }else if (randomNumber >= 4 && randomNumber <=6) {
            simonArray.push($("div[data-id='2']").attr("data-id"));
            $("div[data-id='2']").animate({
                opacity: "1"
            }).animate({
                opacity:".25"
            },1000)
        }else if (randomNumber >= 7 && randomNumber <=9) {
            simonArray.push($("div[data-id='3']").attr("data-id"));
            $("div[data-id='3']").animate({
                opacity:1
            }).animate({
                opacity:".25"
            },1000)
        }else if (randomNumber >= 10 && randomNumber <=12) {
            simonArray.push($("div[data-id='4']").attr("data-id"));
            $("div[data-id='4']").animate({
                opacity: "1"
            }).animate({
                opacity:".25"
            },1000)
        }

console.log(simonArray);
console.log(usersArray);
}



function getUserInput(){
    $(".simonButtons").on("click",function(){
             usersArray.push($(this).attr("data-id"));
    $(this).animate({
            opacity: "1"
        }).animate({
            opacity: ".25"
        },1000)
        if (usersArray[0] == simonArray[0]) {
            $(".simonButtons").off("click")
            usersArray =[]
            simonCheck.shift()
        }else {
            $(".simonButtons").off("click")
            console.log("you lose");
        }
    })
}







function repeatSimonArray(){

    for (var i = 0; i < simonArray.length; i++) {
       if (simonArray[i] == 1) {
           $("div[data-id='1']").animate({
               opacity: "1"
           }).animate({
               opacity:".25"
           },1000)
       }else if (simonArray[i] == 2) {
           $("div[data-id='2']").animate({
               opacity: "1"
           }).animate({
               opacity:".25"
           },1000)
       }else if (simonArray[i] == 3) {
           $("div[data-id='3']").animate({
               opacity:1
           }).animate({
               opacity:".25"
           },1000)
       }else if (simonArray[i] == 4) {
           $("div[data-id='4']").animate({
               opacity: "1"
           }).animate({
               opacity:".25"
           },1000)
       }
   }
}








function rotateSimon(){
    var randomNumber = Math.floor(Math.random()*4)
    var rotateCount = randomNumber;
    if (rotateCount == 0) {
        $("div[data-id='1']").animate({
            "order":"1",
            "border-bottom-right-radius":"0px",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"200px"
        });
        $("div[data-id='2']").animate({
            "order":"3",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"0px",
            "border-bottom-right-radius":"200px"
        });
        $("div[data-id='3']").animate({
            "order":"0",
            "border-bottom-right-radius":"0px",
            "border-top-right-radius":"0px",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius": "200px"
        });
        $("div[data-id='4']").animate({
            "order":"2",
            "border-bottom-right-radius":"0px",
            "border-top-right-radius":"0px",
            "border-top-left-radius": "0px",
            "border-bottom-left-radius":"200px"
        });
        rotateCount++;
    }else if (rotateCount == 1) {
        $("div[data-id='1']").animate({
            "order":"3",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"0px",
            "border-bottom-right-radius": "200px"
        })
        $("div[data-id='2']").animate({
            "order":"2",
            "border-bottom-right-radius":"0px",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"0px",
            "border-bottom-left-radius": "200px"
        })
        $("div[data-id='3']").animate({
            "order":"1",
            "border-bottom-right-radius":"0px",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"200px"
        })
        $("div[data-id='4']").animate({
            "order":"0",
            "border-bottom-right-radius":"0px",
            "border-bottom-left-radius":"0px",
            "border-top-right-radius":"0px",
            "border-top-left-radius": "200px"
        })
        rotateCount++;
    }else if (rotateCount == 2) {
        $("div[data-id='1']").animate({
            "order":"2",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"0px",
            "border-bottom-right-radius": "0px",
            "border-bottom-left-radius":"200px"
        })
        $("div[data-id='2']").animate({
            "order":"0",
            "border-bottom-right-radius":"0px",
            "border-top-right-radius":"0px",
            "border-bottom-left-radius": "0px",
            "border-top-left-radius":"200px"
        })
        $("div[data-id='3']").animate({
            "order":"3",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"0px",
            "border-bottom-right-radius": "200px"
        })
        $("div[data-id='4']").animate({
            "order":"1",
            "border-bottom-right-radius":"0px",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"200px"
        })
        rotateCount++;
    }else if (rotateCount == 3) {
        $("div[data-id='1']").animate({
            "order":"0",
            "border-bottom-right-radius":"0px",
            "border-top-right-radius":"0px",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius": "200px"
        })
        $("div[data-id='2']").animate({
            "order":"1",
            "border-bottom-right-radius":"0px",
            "border-bottom-left-radius":"0px",
            "border-top-left-radius":"0px",
            "border-top-right-radius": "200px"
        })
        $("div[data-id='3']").animate({
            "order":"2",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"0px",
            "border-bottom-right-radius": "0px",
            "border-bottom-left-radius": "200px"
        })
        $("div[data-id='4']").animate({
            "order":"3",
            "border-bottom-left-radius":"0px",
            "border-bottom-right-radius": "200px",
            "border-top-left-radius": "0px",
            "border-top-right-radius":"0px"
        })
        rotateCount = 0;
    }
}


$("p[data-id='5']").on("click",function(){
    rotateSimon()
})
