function loadIdeas(){
    var fr = new FileReader();
    fr.onload = function(){
        var obj = JSON.parse(this.result);
        console.log(obj);
    }
    fr.readAsText("ideas.json")
    
}