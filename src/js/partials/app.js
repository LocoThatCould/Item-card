$(".card__heart img").bind("click", function() {
      var src = ($(this).attr("src") === "../../img/card/icons/blue-heart.png")
                    ? "../../img/card/icons/heart.png" 
                    : "../../img/card/icons/blue-heart.png";
      $(this).attr("src", src);
});