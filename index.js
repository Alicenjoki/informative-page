const questions = document.querySelectorAll(".container");
questions.forEach(function(question){
    btn = question.querySelector("button");
    question.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("display");
            }
        });
        question.classList.toggle("display");
    })
});