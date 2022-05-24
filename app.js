function timeDoIcon(){
    const icon = document.getElementById('timeDo');
    icon.classList.add('fa-x', 'animate__animated','animate__fadeIn');

}

function redirectX1(){
    window.location.href = 'appx1.html'
}

function redirectVsPc(){
    window.location.href = 'appvspc.html'    
}

async function cliqueSquare(id){
    let square = document.getElementById(`square-${id}`)
    if(square.classList.contains('d-flex')){
        const icon = document.getElementById(`icon-${id}`)
        icon.classList.remove('animate__animated', 'animate__jackInTheBox')
        icon.classList.add('animate__animated', 'animate__headShake')
    }else{
        insertIcon(square, id)
        let resultFinal = await checkVictorious()
        if(resultFinal ){
            //não chama o O
        }else{
            if(window.location.href == 'https://markyscorrea.github.io/jogodavelha/appvspc.html'){
                pcSquare()
            }
            
        }
        
    }
}

function pcSquare(){
    let squares = document.querySelectorAll('[validateIcon]')
    if(squares.length == 8 || squares.length == 6 || squares.length == 4 || squares.length == 2){
        let numAlt = Math.floor(Math.random() * 9)
        let byeNumber = [];
        if(numAlt == 0){
            pcSquare()
        }else {
            let square = document.getElementById(`square-${numAlt}`)
            if(square.firstChild != null || byeNumber.includes(numAlt)){
                byeNumber.push(numAlt)
                pcSquare()
            }else{
                const icone = document.createElement('i')
                square.removeAttribute('validateIcon')
                icone.classList.add('fa-solid', 'fa-o', 'animate__animated', 'animate__jackInTheBox', 'colorO')
                icone.setAttribute('id', `icon-${numAlt}`)
                icone.setAttribute('v', '')
                setTimeout(() => {
                    square.appendChild(icone)
                    square.classList.add('d-flex')
                    checkVictorious()
                }, 500)
            }
        }   
    }
}

function insertIcon(square, id){
    const icone = document.createElement('i')
    square.removeAttribute('validateIcon')
    icone.classList.add('fa-solid', valueIcon(), 'animate__animated', 'animate__jackInTheBox')
    if(valueIcon() == 'fa-x'){
        icone.classList.add('colorX')
    }else{
        icone.classList.add('colorO')
    }
    icone.setAttribute('id', `icon-${id}`)
    icone.setAttribute('v', '')
    square.appendChild(icone)
    square.classList.add('d-flex')
}

function valueIcon(){
    let squares = document.querySelectorAll('[validateIcon]')
    const icon = document.getElementById('timeDo');
    if(squares.length % 2 == 0){
        
        icon.classList.remove('fa-x')
        icon.classList.add('fa-o')
        return 'fa-x'
    }else{
        icon.classList.remove('fa-o')
        icon.classList.add('fa-x')
        return 'fa-o'
    }    
}

function checkVictorious(){
    const s1 = document.getElementById('icon-1')
    const s2 = document.getElementById('icon-2')
    const s3 = document.getElementById('icon-3')
    const s4 = document.getElementById('icon-4')
    const s5 = document.getElementById('icon-5')
    const s6 = document.getElementById('icon-6')
    const s7 = document.getElementById('icon-7')
    const s8 = document.getElementById('icon-8')
    const s9 = document.getElementById('icon-9')

    if(s1 != null && s1.classList.contains('fa-x') && //verifica X na linha 1
       s2 != null && s2.classList.contains('fa-x') &&
       s3 != null && s3.classList.contains('fa-x')
       ){  finalize(s1, s2, s3)
        return true
    }else if(s1 != null && s1.classList.contains('fa-o') && //verifica O na linha 1
             s2 != null && s2.classList.contains('fa-o') &&
             s3 != null && s3.classList.contains('fa-o')
            ){ finalize(s1, s2, s3)
                return true    
    }else if(s4 != null && s4.classList.contains('fa-x') && //verifica X na linha 2
             s5 != null && s5.classList.contains('fa-x') &&
             s6 != null && s6.classList.contains('fa-x')
            ){ finalize(s4, s5, s6)
                return true    
    }else if(s4 != null && s4.classList.contains('fa-o') && //verifica O na linha 2
             s5 != null && s5.classList.contains('fa-o') &&
             s6 != null && s6.classList.contains('fa-o')
            ){ finalize(s4, s5, s6)
                return true    
    }else if(s7 != null && s7.classList.contains('fa-x') && //verifica X na linha 3
             s8 != null && s8.classList.contains('fa-x') &&
             s9 != null && s9.classList.contains('fa-x')
            ){ finalize(s7, s8, s9)
                return true    
    }else if(s7 != null && s7.classList.contains('fa-o') && //verifica O na linha 3
             s8 != null && s8.classList.contains('fa-o') &&
             s9 != null && s9.classList.contains('fa-o')
            ){ finalize(s7, s8, s9)
                return true    
    }else if(s1 != null && s1.classList.contains('fa-x') && //verifica X na linha 4
             s4 != null && s4.classList.contains('fa-x') &&
             s7 != null && s7.classList.contains('fa-x')
            ){ finalize(s1, s4, s7)
                return true    
    }else if(s1 != null && s1.classList.contains('fa-o') && //verifica O na linha 4
             s4 != null && s4.classList.contains('fa-o') &&
             s7 != null && s7.classList.contains('fa-o')
            ){ finalize(s1, s4, s7)
                return true    
    }else if(s2 != null && s2.classList.contains('fa-x') && //verifica X na linha 5
             s5 != null && s5.classList.contains('fa-x') &&
             s8 != null && s8.classList.contains('fa-x')
            ){ finalize(s2, s5, s8)
                return true    
    }else if(s2 != null && s2.classList.contains('fa-o') && //verifica O na linha 5
             s5 != null && s5.classList.contains('fa-o') &&
             s8 != null && s8.classList.contains('fa-o')
            ){ finalize(s2, s5, s8)
                return true    
    }else if(s3 != null && s3.classList.contains('fa-x') && //verifica X na linha 6
             s6 != null && s6.classList.contains('fa-x') &&
             s9 != null && s9.classList.contains('fa-x')
            ){ finalize(s3, s6, s9)
                return true    
    }else if(s3 != null && s3.classList.contains('fa-o') && //verifica X na linha 6
             s6 != null && s6.classList.contains('fa-o') &&
             s9 != null && s9.classList.contains('fa-o')
            ){ finalize(s3, s6, s9)
                return true    
    }else if(s1 != null && s1.classList.contains('fa-x') && //verifica X na linha 7
             s5 != null && s5.classList.contains('fa-x') &&
             s9 != null && s9.classList.contains('fa-x')
            ){ finalize(s1, s5, s9)
                return true    
    }else if(s1 != null && s1.classList.contains('fa-o') && //verifica X na linha 7
             s5 != null && s5.classList.contains('fa-o') &&
             s9 != null && s9.classList.contains('fa-o')
            ){ finalize(s1, s5, s9)
                return true    
    }else if(s3 != null && s3.classList.contains('fa-x') && //verifica X na linha 8
             s5 != null && s5.classList.contains('fa-x') &&
             s7 != null && s7.classList.contains('fa-x')
            ){ finalize(s3, s5, s7)
                return true    
    }else if(s3 != null && s3.classList.contains('fa-o') && //verifica X na linha 8
             s5 != null && s5.classList.contains('fa-o') &&
             s7 != null && s7.classList.contains('fa-o')
            ){ finalize(s3, s5, s7)
                return true    
    }else{
        checkV()
    }
}

function finalize(iconWin1, iconWin2, iconWin3){

    let iconStorageX = localStorage.getItem('id-x')
    let iconStorageO = localStorage.getItem('id-o')
    if(iconStorageX == null && iconStorageO == null){
        localStorage.setItem('id-x', 0)
        localStorage.setItem('id-o', 10)
    }
    function getProximoIdX(){
        let proximoIdX = localStorage.getItem('id-x')
        return parseInt(proximoIdX) + 1
    }
    function getProximoIdO(){
        let proximoIdO = localStorage.getItem('id-o')
        return parseInt(proximoIdO) + 1
    }

    if(iconWin1.classList.contains('fa-x')){
        localStorage.setItem(getProximoIdX(), 'X')
        localStorage.setItem('id-x', getProximoIdX())
    }else{
        localStorage.setItem(getProximoIdO(), 'O')
        localStorage.setItem('id-o', getProximoIdO())
    }

    let squares = document.querySelectorAll('.squares')
    squares.forEach(v => {
        if(v.firstChild === null){
            //ignora os campos nulos
        }else{
            document.getElementById('timeDo').classList.remove('fa-x', 'fa-o')
            iconWin1.classList.remove('animate__animated', 'animate__jackInTheBox')
            iconWin2.classList.remove('animate__animated', 'animate__jackInTheBox')
            iconWin3.classList.remove('animate__animated', 'animate__jackInTheBox')
            iconWin1.classList.add('animate__animated', 'animate__shakeX', 'colorWin')
            iconWin2.classList.add('animate__animated', 'animate__shakeX', 'colorWin')
            iconWin3.classList.add('animate__animated', 'animate__shakeX', 'colorWin')

            setTimeout(() => {
                v.firstChild.classList.remove('animate__animated', 'animate__jackInTheBox')
                v.firstChild.classList.add('animate__animated', 'animate__bounceOut')
                setTimeout(() => {
                    window.location.reload() 
                }, 1000)
            }, 500)
        }
    })
}

function checkV(){
    let v = document.querySelectorAll('[v]')
    if(v.length > 8){
        document.getElementById('timeDo').classList.remove('fa-x', 'fa-o')
        v.forEach(value => {
            value.classList.remove('animate__animated', 'animate__jackInTheBox')
            value.classList.add('animate__animated','animate__bounceOut') //add moviment all icons
            setTimeout(() => {
                value.classList.remove('fa-x', 'fa-o', 'animate__bounceOut') //remove icons
                setTimeout(() => {
                    value.classList.add('colorV', 'fa-v' ,'animate__bounceIn') //add icons v and class colorV
                    setTimeout(() => {
                        value.classList.add('animate__animated', 'animate__bounceOut')//remove icons v
                        setTimeout(() => {
                            window.location.reload()
                        }, 500)
                    }, 500)
                }, 200) 
            }, 500)
        })
    }
}

function listPlacarX(){

    let valuePlacarX = [];
    let id = localStorage.getItem('id-x')
    for(let x = 1; x <= id; x ++){
        let resultX = localStorage.getItem(x)
        valuePlacarX.push(resultX)
    }
    return valuePlacarX
}

function listPlacarO(){

    let valuePlacarO = [];
    let id = localStorage.getItem('id-o')
    for(let o = 11; o <= id; o ++){
        let resultO = localStorage.getItem(o)
        valuePlacarO.push(resultO)
    }
    return valuePlacarO
}


if(window.location.href == 'https://markyscorrea.github.io/jogodavelha/appx1.html'){
    document.getElementById('titleX1').innerHTML = '#X1'
}else if(window.location.href == 'https://markyscorrea.github.io/jogodavelha/appvspc.html'){
    document.getElementById('titleVsPc').innerHTML = '#VSPC'
}

if(window.location.href != 'https://markyscorrea.github.io/jogodavelha/'){
    let placarX = document.getElementById('placarX').innerHTML = listPlacarX()
    let placarO = document.getElementById('placarO').innerHTML = listPlacarO()

    const resultX = document.getElementById('placarX').innerHTML.replace(/,/g, " ")
    const resultO = document.getElementById('placarO').innerHTML.replace(/,/g, " ")
    document.getElementById('placarXFinal').innerHTML = resultX
    document.getElementById('placarOFinal').innerHTML = resultO

    function removeItemsLocalStorage(){
        localStorage.removeItem(1)
        localStorage.removeItem(2)
        localStorage.removeItem(3)
        localStorage.removeItem(11)
        localStorage.removeItem(12)
        localStorage.removeItem(13)
        localStorage.removeItem('id-o')
        localStorage.removeItem('id-x')
    }

    if(placarX.length >= 3){
        removeItemsLocalStorage()
        gameEnd('X')
    }else if(placarO.length >= 3){
        removeItemsLocalStorage()
        gameEnd('O')
    }

    $('#modalClose').on('click', () => {
        $('body').removeClass('modal-open')
        $('body').css('overflow', '').css('padding-right', '')
        $('#champion').removeClass('show')
        $('#champion').css('display', '')
        $('#champion').removeAttr('aria-modal', 'true').attr('role', 'dialog')
        $('#champion').attr('aria-hidden', 'true')
        $('#modalFinalPage').removeClass('modal-backdrop').addClass('fade').addClass('show')
        window.location.reload()
    })
    
    $('#modalHome').on('click', () => {
        window.location.href = 'index.html'
    })
    
    $('#linkHome').on('click', () => {
        removeItemsLocalStorage()
        window.location.href = 'index.html'
    })

}

function animateSelect(id){
    const select = document.getElementById(`select${id}`)
    select.classList.add('animate__animated', 'animate__headShake')
    setTimeout(() => {
        select.classList.remove('animate__animated', 'animate__headShake')
    }, 500)
}

function returnHome(){
    document.getElementById('linkHome').addEventListener('click', () => {
        localStorage.removeItem(1)
        localStorage.removeItem(2)
        localStorage.removeItem(3)
        localStorage.removeItem(11)
        localStorage.removeItem(12)
        localStorage.removeItem(13)
        localStorage.removeItem('id-o')
        localStorage.removeItem('id-x')
    })
}

function gameEnd(value){
    $('body').addClass('modal-open')
    $('body').css('overflow', 'hidden').css('padding-right', '0px')
    $('#champion').addClass('show')
    $('#champion').css('display', 'block')
    $('#champion').attr('aria-modal', 'true').attr('role', 'dialog')
    $('#champion').removeAttr('aria-hidden', 'true')
    $('#modalFinalPage').addClass('modal-backdrop').addClass('fade').addClass('show')
    $('#textModal').append(`<p>Vencedor: ${value}</p>`)
}

