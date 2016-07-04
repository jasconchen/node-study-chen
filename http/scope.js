var globalVariable = 'this is global variable'

function globalFunction(){
    var localVariable = 'this is local variable'

    console.log('visit global/local variable')
    console.log(globalVariable)
    console.log(localVariable)

    globalVariable = 'this is change variable'
    console.log(globalVariable)

    function localFuncion(){
        var innerLocalVariable = 'this is inner variable'

        console.log('visiti global/local/innerLocal variable')
        console.log(globalVariable)
        console.log(localVariable)
        console.log(innerLocalVariable)
    }

    localFuncion()
}
globalFunction()