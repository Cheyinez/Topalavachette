$(document).ready(function(){

    $("#bloc1").click(function(){
        $("#panel1").slideToggle("slow");
    });

    $("#bloc2").click(function(){
        $("#panel2").slideToggle("slow");
    });

    $("#bloc3").click(function(){
        $("#panel3").slideToggle("slow");
    });

    $.getJSON("https://api.airtable.com/v0/appGUZh7thZxapx1y/musics?api_key=keyPrSeGbFB4cWNqf",
    					function(data) {
                console.log(data);
                console.log(data.records[0].fields.likes);
              	// fonction de succès
                // j'ai envie ici d'afficher le contenu de data dans la balise article de mon site
                // par défault, ce que me renvoie la fonction getJSON est un tableau/une liste qui contient tous les users
                // pour l'afficher sur mon site, je dois le transformer en chaine de caractère, c'est à dire en texte brut, c'est le rôle de la fonction JSON.stringify
                // Ensuite, je peux insérer ma variable data_str quelque part sur mon site, ici dans ma balise article
    					});

});
