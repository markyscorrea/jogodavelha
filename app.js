function cliqueSquare(id){
    let square = document.getElementById(`square-${id}`)
    if(square.classList.contains('d-flex')){
        const icon = document.getElementById(`icon-${id}`)
        icon.classList.add('animate__animated', 'animate__headShake')
    }else{
        //inserção de ícone
        insertIcon(square, id)
        checkVictorious()
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
    //return x ou o
    let squares = document.querySelectorAll('[validateIcon]')
    if(squares.length % 2 == 0){
        return 'fa-x'
    }else{
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
       ){  return finalize(s1, s2, s3)
    }else if(s1 != null && s1.classList.contains('fa-o') && //verifica O na linha 1
             s2 != null && s2.classList.contains('fa-o') &&
             s3 != null && s3.classList.contains('fa-o')
            ){ return finalize(s1, s2, s3)    
    }else if(s4 != null && s4.classList.contains('fa-x') && //verifica X na linha 2
             s5 != null && s5.classList.contains('fa-x') &&
             s6 != null && s6.classList.contains('fa-x')
            ){ return finalize(s4, s5, s6)    
    }else if(s4 != null && s4.classList.contains('fa-o') && //verifica O na linha 2
             s5 != null && s5.classList.contains('fa-o') &&
             s6 != null && s6.classList.contains('fa-o')
            ){ return finalize(s4, s5, s6)    
    }else if(s7 != null && s7.classList.contains('fa-x') && //verifica X na linha 3
             s8 != null && s8.classList.contains('fa-x') &&
             s9 != null && s9.classList.contains('fa-x')
            ){ return finalize(s7, s8, s9)    
    }else if(s7 != null && s7.classList.contains('fa-o') && //verifica O na linha 3
             s8 != null && s8.classList.contains('fa-o') &&
             s9 != null && s9.classList.contains('fa-o')
            ){ return finalize(s7, s8, s9)    
    }else if(s1 != null && s1.classList.contains('fa-x') && //verifica X na linha 4
             s4 != null && s4.classList.contains('fa-x') &&
             s7 != null && s7.classList.contains('fa-x')
            ){ return finalize(s1, s4, s7)    
    }else if(s1 != null && s1.classList.contains('fa-o') && //verifica O na linha 4
             s4 != null && s4.classList.contains('fa-o') &&
             s7 != null && s7.classList.contains('fa-o')
            ){ return finalize(s1, s4, s7)    
    }else if(s2 != null && s2.classList.contains('fa-x') && //verifica X na linha 5
             s5 != null && s5.classList.contains('fa-x') &&
             s8 != null && s8.classList.contains('fa-x')
            ){ return finalize(s2, s5, s8)    
    }else if(s2 != null && s2.classList.contains('fa-o') && //verifica O na linha 5
             s5 != null && s5.classList.contains('fa-o') &&
             s8 != null && s8.classList.contains('fa-o')
            ){ return finalize(s2, s5, s8)    
    }else if(s3 != null && s3.classList.contains('fa-x') && //verifica X na linha 6
             s6 != null && s6.classList.contains('fa-x') &&
             s9 != null && s9.classList.contains('fa-x')
            ){ return finalize(s3, s6, s9)    
    }else if(s3 != null && s3.classList.contains('fa-o') && //verifica X na linha 6
             s6 != null && s6.classList.contains('fa-o') &&
             s9 != null && s9.classList.contains('fa-o')
            ){ return finalize(s3, s6, s9)    
    }else if(s1 != null && s1.classList.contains('fa-x') && //verifica X na linha 7
             s5 != null && s5.classList.contains('fa-x') &&
             s9 != null && s9.classList.contains('fa-x')
            ){ return finalize(s1, s5, s9)    
    }else if(s1 != null && s1.classList.contains('fa-o') && //verifica X na linha 7
             s5 != null && s5.classList.contains('fa-o') &&
             s9 != null && s9.classList.contains('fa-o')
            ){ return finalize(s1, s5, s9)    
    }else if(s3 != null && s3.classList.contains('fa-x') && //verifica X na linha 8
             s5 != null && s5.classList.contains('fa-x') &&
             s7 != null && s7.classList.contains('fa-x')
            ){ return finalize(s3, s5, s7)    
    }else if(s3 != null && s3.classList.contains('fa-o') && //verifica X na linha 8
             s5 != null && s5.classList.contains('fa-o') &&
             s7 != null && s7.classList.contains('fa-o')
            ){ return finalize(s3, s5, s7)    
    }else{
        checkV()
    }
}

function finalize(iconWin1, iconWin2, iconWin3){

    let squares = document.querySelectorAll('.squares')
    squares.forEach(v => {
        if(v.firstChild === null){
            //ignora os campos nulos
        }else{
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
            return true
        }
    })
}

function checkV(){
    let v = document.querySelectorAll('[v]')
    if(v.length > 8){
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

function animateSubtitle(){
    const subtitle = document.getElementById('subtitle')
        subtitle.classList.add('animate__animated', 'animate__lightSpeedInLeft')
        subtitle.innerHTML = 'X começa!'
        setTimeout(() => {
            subtitle.classList.add('animate__animated', 'animate__lightSpeedOutRight')
        }, 2000)
}
