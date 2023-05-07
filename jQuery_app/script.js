const arr=[];
var r=0;
function showNext(current,ans,next){
    arr[current]=ans;
    if(next>0){
        jQuery('.question .row').removeClass("active");
        jQuery('.q'+next).addClass("active");
    }
    else if(next==0 && arr[1]==1 && arr[2]==1 && arr[4]==1 && arr[6]==1 && arr[8]==1 && arr[9]==1){
        jQuery('.question .row').removeClass("active");
        jQuery('.result1').addClass("active");
        r=1;
    }
    else if(next==0 && arr[1]==1 && arr[2]==1 && arr[4]==1){
        jQuery('.question .row').removeClass("active");
        jQuery('.result2').addClass("active");
        r=2;
    }
    else{
        jQuery('.question .row').removeClass("active");
        jQuery('.result3').addClass("active");
        r=3;
    }
}
$('.screen').click(function(){
    jQuery('.result'+r).removeClass("active");
    jQuery('.q1').addClass("active");
});