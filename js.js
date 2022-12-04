function verif(){
    var cin = assil.p1.value;
    var nom= assil.p2.value;
    var prenom= assil.p3.value;
    var tel= assil.p4.value;
    
    
    if (cin.length==""){
       alert("Mettez votre cin.");
    }
    
    if (nom.length==""){
        alert("Mettez votre nom.");
    }
    if (prenom.length==""){
        alert("Mettez votre prenom");
    }
    if(tel.length==""){
        alert("mettez votre tel")
   }

}
function sup(){
    var cin = assil.p1.value="";
    var nom= assil.p2.value="";
    var prenom= assil.p3.value="";
    var tel= assil.p4.value="";
}
