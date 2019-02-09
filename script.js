var text = ['Apple', 'Mango', 'Orange', 'Watermelon']
var currentIndex = 1

window.onload = function () {
    let a = document.getElementById('heading')
    a.innerHTML = text[0]

    setInterval(function() {
        a.className = 'invisible'
        setTimeout(function() {
            a.innerHTML = text[currentIndex]
            currentIndex = ( currentIndex + 1 ) % text.length
            setTimeout(function() {
                a.className = ''
            }, 50)
        }, 200)
    }, 3000)
}