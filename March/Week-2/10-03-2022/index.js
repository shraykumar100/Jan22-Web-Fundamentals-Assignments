let sec=60;
let min=4;
const second_fn=function()
{
    let txt_sec=document.getElementById("second");
    txt_sec.innerText=(` ${sec}s`);
    let txt_min=document.getElementById("minute");
    txt_min.innerText=(`${min}m`);
    if(sec>0)
    {
        sec--;
        if(sec==0){
            sec=60;
            min--;
        }       
    }
}
const interval_id  =setInterval(second_fn,1000);
const stop = function() 
{
    clearInterval(interval_id);

}
const stop_btn = document.getElementById('stop');
stop_btn.addEventListener('click', stop);