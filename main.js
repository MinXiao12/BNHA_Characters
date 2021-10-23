var images = ["Bakugou.jfif", "Denki_Kaminari.jfif", "Eri.jfif", "Kirishima_eijirou.jpg", "Midoriya.jpg", "Mina_Ashido.jpg", "ochako_uraraka.jpg", "Todorki.jpg", "Yaoyorozu_Momo.jpg"];
var names = ["Katsuki Bakugou", "Denki Kaminari","Nagayama Eri", "Eijirou Kirishima", "Izuku Midoriya", "Mina Ashido", "Ochako Uraraka", "Shoto Todorki", "Yaoyorozu Momo"];
var i = 0;
function updateNext()
{
    i++;
    var numbers_of_family_member_in_array = 10
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = [images];
    
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

