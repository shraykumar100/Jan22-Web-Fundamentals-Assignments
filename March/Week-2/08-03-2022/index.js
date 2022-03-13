function showHide(id,action_type='close')
{
   if(action_type=="visible"){
        var divsToHide = document.getElementsByClassName("myimg");
        for(var i = 0; i < divsToHide.length; i++)
        {        
            divsToHide[i].style.display = "none"; 
        }
        let big_img=document.getElementById("big_img_"+id);
        big_img.style.display="block";
   }
   else
   {
        let big_img=document.getElementById("big_img_"+id);
        big_img.style.display="none"; 
        var divsToHide = document.getElementsByClassName("myimg"); //divsToHide is an array
        for(var i = 0; i < divsToHide.length; i++)
        {        
            divsToHide[i].style.display = "block"; 
        }
   }
}