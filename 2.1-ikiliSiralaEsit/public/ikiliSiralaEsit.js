/**
 * 
 */

 /**
 * 
 */

 function karsilastir () {
 
	 var birinciSayi,ikinciSayi;
	 
	 birinciSayi = +document.getElementById("input-1").value;
	 ikinciSayi = +document.getElementById("input-2").value;
	 
	 if (birinciSayi == ikinciSayi) {
	 
	 document.getElementById("p-1").innerHTML= birinciSayi + " =  " + ikinciSayi;
 	}
	 
 
 	 else if (birinciSayi > ikinciSayi) {
	 
	 document.getElementById("p-1").innerHTML= birinciSayi + " >  " + ikinciSayi;
 	}
 
 	else {
	 document.getElementById("p-1").innerHTML= ikinciSayi + " >  " + birinciSayi;
 	}
 
 }
 
 function temizle () {
	 
	 document.getElementById("input-1").value="";
	 document.getElementById("input-2").value="";
	  document.getElementById("p-1").innerHTML= "Temizlendi...Sonuçlar burada gösterilir...";
	 
	 
 }