var jeu=function(){
  var ordi=Math.round(Math.random()*100);
  console.log(ordi);
  var joueur;
  var cpt=0; //nbr. de tentatives
  var msg="Le nombre à deviner est entre 0 et 100: ";
  joueur=prompt(msg);
  for(var i=1; i<10; i++){ //str. inf 10!
        //si clic sur Annuler
        if(joueur===null) return 0;
        //si valeur entrée n'est pas nombre
        if(isNaN(joueur)) joueur=prompt("Veuillez saisir un nombre svp: ");
        //si nbr n'est pas compris entre 0 et 100
        if((joueur<0)||(joueur>100))
          do{
            joueur=prompt("Le nombre doit être compris entre 0 et 100 !!!");
          } while((joueur<0)||(joueur>100));
        //cpt++;
        if(joueur<ordi) joueur=prompt("Plus Grand !");
        else if(joueur>ordi) joueur=prompt("Plus Petit !");
        else if(joueur==ordi) {return "Bravo !"; break;}
  }
}
jeu();
