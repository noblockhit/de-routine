Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });

$.getJSON("./ideas.json", function (data){
    var fullcategoryNames = data;
    var i = 0;
    for (var longKey in data) {
        i++;
        var shortKey = longKey.substring(0, longKey.indexOf("_"));
        console.log(longKey, shortKey);
        console.log($(".question__options").append(`<div class="question__option">
        <input type="radio" name="main-category" value="${longKey}" id="category-${shortKey}">
        <label for="category-${shortKey}">${shortKey.capitalize()}</label>
        </div>`))
    }
})



