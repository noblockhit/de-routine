function loadIdeas(){
    var fr = new FileReader();
    fr.onload = function(){
        return fr.result;
    }
    fr.readAsText("ideas.json")
}