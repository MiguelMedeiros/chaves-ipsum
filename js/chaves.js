$( document ).ready(function() {
	
	var chaves = [];
	chaves.push('Isso, isso, isso! E zas, zas, e zas!! Isso, isso, isso, isso, isso! E zas, zas, e zas!! Isso, isso, isso, isso, isso! E zas, zas, e zas!! Isso, isso, isso, isso, isso! E zas, zas, e zas!! Isso, isso, isso, isso, isso! E zas, zas, e zas!! ');
	
	chaves.push('Sabe qual o animal q come com o rabo?" "Todos, porque eles não podem tirar o rabo para comer! Tá bom, mais não se irrite. Puxa, repuxa, recontrapuxa. Sou pobre, porém honrado.');
	
	chaves.push('Não há luta pior do que aquela que se enfrenta. Mãe, posso ir no circo? Deixa de ser besta menino. Se alguém quiser te ver, que venha aqui em casa. Onde nasceu Colombo? Na casa dele. ');
	
	chaves.push('Pra que se deve ferver a água antes de bebê-la? Porque não dá pra ferver depois de beber! De onde se tira o leite da vaca? Da geladeira. O que se deve fazer quando uma pessoa sente uma dor no coração? Apagar a luz, porque o que os olhos não vêem o coração não sente.');
	
	chaves.push('Eu tenho quatro laranjas, como uma. Quantas me restam? Eu sabia essa com maçãs... A luz elétrica é mais importante que a luz solar, porque a luz elétrica ilumina quando é noite, isto é, quando a gente precisa, a luz solar ilumina só quando é dia, ou seja, quando a gente não precisa. ');
	
	chaves.push('Qual é a melhor maneira de conservar o leite da vaca? Deixando dentro da vaca. A Chiquinha não pode sair, está na cama com 39. E cabem todos? Eu te empresto pra você ver que eu sou um menino bom que ajuda os meninos pobres do terceiro mundo.');
	
	chaves.push('É você, Chaves? Claro que sou eu, bobo! Se não fosse eu, não seria eu! Parecia cachorro, mas não era. O que era então? Cachorra. Você é tonto com T de tapado. Essa caveira significa prerigo, entenderam bem? PRE-RI-GO!');
	
	chaves.push('Ele sempre ronca assim? Não, só quando está dormindo. Isso é boxe, não uma briga de mulas! Quando a fome aperta, a vergonha afrouxa. O mundo está cheio de surpresas. E de automóveis... Não contavam com a minha astúcia!');
	
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;
	
	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {
	
	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	
	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	
	  return array;
	}
	
	$(".botao").click(function(){
		
		shuffle(chaves);
		var chavesnovo = "";
		var contador = 0;
		var numeroatual = $(this).text();
		$.each( chaves, function( key, value ) {
		  if(contador == numeroatual){
		  	return false
		  }else{
		  	contador = contador +1;
		  }
		  chavesnovo = chavesnovo + value + "\n\n" ;
		});
		$(".chaves").val(chavesnovo);
	});
	
	   
    $(".gerar_chaves").zclip({
		path: "js/ZeroClipboard.swf",
		copy: function(){
		    return $(this).prev().val();
	    }
	});
	
	$(".chaves-ipsum-logo").mouseover(function(){
        $(".ola-internautas").fadeIn("slow");
        
       setTimeout(
	   function() 
	   {
	   	$(".ola-internautas").fadeOut("slow");
	   }, 3000);
	})
	
});