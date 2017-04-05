$("#fishEagles").click(function () {
	$("#fishEagles").css("color", "#fcd93f");
	$(".fishLine").css("background-color", "#fcd93f");
	$("#bootedEagles, #snakeEagles, #harpEagles, #otherEagles").css("color", "#cfceca");
	$(".bootedLine, .snakeLine, .harpLine, .otherLine").css("background-color", "#cfceca");
	$(".groups_name h4").text("Fish Eagles");
	$(".groups_desc h5").text("Fish Eagles.");
	$(".groups_desc .small_ltr").text("Proposed subfamily Haliaeetinae. Genera: Haliaeetus, Ichthyophaga");
	$(".groups_desc h6").text("Sea eagles or fish eagles take fish as a large part of their diets, either fresh or as carrion.");
	$(".groups_desc p").text("Some authors include Gypohierax angolensis, the 'vulturine fish eagle' (also called the palm-nut vulture) in this group. However, genetic analyses indicate it is related to a grouping of Neophron–Gypaetus–Eutriorchis (Egyptian vulture, bearded vulture (lammergeier), and Madagascan serpent eagle). The fish eagles have a close genetic relationship with Haliastur and Milvus; the whole group is only distantly related to the Buteo group.");
});

$("#bootedEagles").click(function () {
	$("#bootedEagles").css("color", "#fcd93f");
	$(".bootedLine").css("background-color", "#fcd93f");
	$("#fishEagles, #snakeEagles, #harpEagles, #otherEagles").css("color", "#cfceca");
	$(".fishLine, .snakeLine, .harpLine, .otherLine").css("background-color", "#cfceca");
	$(".groups_name h4").text("Booted Eagles");
	$(".groups_desc h5").text("Booted Eagles.");
	$(".groups_desc .small_ltr").text("For the species Hieraaetus pennatus (Aquila pennata), see booted eagle");
	$(".groups_desc h6").text("Booted eagles or 'true eagles' have feathered tarsi (lower legs).");
	$(".groups_desc p").text("Tribe Aquililae or proposed subfamily Aquilinae. Genera: Aquila, Hieraaetus; Spizaetus, Oroaetus, Spizastur; Nisaetus; Ictinaetus, Lophoaetus; Polemaetus; and Stephanoaetus. See comments under eagle species for changes to the composition of these genera.");
});

$("#snakeEagles").click(function () {
	$("#snakeEagles").css("color", "#fcd93f");
	$(".snakeLine").css("background-color", "#fcd93f");
	$("#fishEagles, #bootedEagles, #harpEagles, #otherEagles").css("color", "#cfceca");
	$(".fishLine, .bootedLine, .harpLine, .otherLine").css("background-color", "#cfceca");
	$(".groups_name h4").text("Snake Eagles");
	$(".groups_desc h5").text("Snake Eagles.");
	$(".groups_desc .small_ltr").text("Eutriorchis (subfamily Gypaetinae or Circaetinae)");
	$(".groups_desc h6").text("Subfamily Circaetinae. Genera: Circaetus, Spilornis, Dryotriorchis, Terathopius");
	$(".groups_desc p").text("Snake or serpent eagles are, as the name suggests, adapted to hunting reptiles. [The bird does not look like a snake or serpent] Despite filling the niche of a snake eagle, genetic studies suggest that the Madagascan serpent eagle Eutriorchis is not related.");
});

$("#harpEagles").click(function () {
	$("#harpEagles").css("color", "#fcd93f");
	$(".harpLine").css("background-color", "#fcd93f");
	$("#fishEagles, #bootedEagles, #snakeEagles, #otherEagles").css("color", "#cfceca");
	$(".fishLine, .bootedLine, .snakeLine, .otherLine").css("background-color", "#cfceca");
	$(".groups_name h4").text("Harpy Eagles");
	$(".groups_desc h5").text("Harpy Eagles.");
	$(".groups_desc .small_ltr").text("Harpy eagles (proposed subfamily Harpiinae)");
	$(".groups_desc h6").text("Chaco eagle or crowned solitary eagle, Buteogallus (formerly Harpyhaliaetus) coronatus ― South America.");
	$(".groups_desc p").text("Harpy eagles or 'giant forest eagles' are large eagles that inhabit tropical forests. The group contains two to six species, depending on the author. Although these birds occupy similar niches, and have traditionally been grouped together, they are not all related: the solitary eagles are related to the black-hawks, and the Philippine eagle to the snake eagles.");
});

$("#otherEagles").click(function () {
	$("#otherEagles").css("color", "#fcd93f");
	$(".otherLine").css("background-color", "#fcd93f");
	$("#fishEagles, #bootedEagles, #snakeEagles, #harpEagles").css("color", "#cfceca");
	$(".fishLine, .bootedLine, .snakeLine, .harpLine").css("background-color", "#cfceca");
	$(".groups_name h4").text("Other Eagles");
	$(".groups_desc h5").text("Other Eagles.");
	$(".groups_desc h6").text("Major new research into eagle taxonomy suggests that the important genera Aquila and Hieraaetus are not composed of nearest relatives, and it is likely that a reclassification of these genera will soon take place, with some species being moved to Lophaetus or Ictinaetus.");
	$(".groups_desc p").text("Bonelli's eagle and the African hawk-eagle have been moved from Hieraaetus to Aquila. Either the greater spotted eagle and lesser spotted eagle should move from Aquila to join the long-crested eagle in Lophaetus, or, perhaps better, all three of these species should move to Ictinaetus with the black eagle. The steppe eagle and tawny eagle, once thought to be conspecific, are not even each other's nearest relatives.");
});