var pet = {
    words: '...',
    speak:function(){
        console.log(this.words)
        console.log(this === pet)
    }
}

pet.speak()