let tela = document.getElementById('tela')
let render 
let operação = 0
let sNumero = 0
let junção = ''
let pos = 0
let n1 = ''
let n2 = ''
let tot = []

//números

function n_0(){
    posNumero()

    let n0 = operações(0)
    render = 0
    renderScreen()
}
function n_1(){ 
    posNumero()
    resetJunção()

    let n1 = operações(1)
    render = 1 
    renderScreen()
}
function n_2(){
    posNumero()

    let n2 = operações(2)
    render = 2
    renderScreen()
}
function n_3(){
    posNumero()

    let n3 = operações(3)
    render = 3
    renderScreen()
}
function n_4(){
    posNumero()

    let n4 = operações(4)
    render = 4
    renderScreen()
}
function n_5(){
    posNumero()

    let n5 = operações(5)
    render = 5
    renderScreen()
}
function n_6(){
    posNumero()

    let n6 = operações(6)
    render = 6
    renderScreen()
}
function n_7(){
    posNumero()

    let n7 = operações(7)
    render = 7
    renderScreen()
}
function n_8(){
    posNumero()

    let n8 = operações(8)
    render = 8
    renderScreen()
}
function n_9(){
    posNumero()

    let n9 = operações(9)
    render = 9
    renderScreen()
}

//Operações

function multiplicação(m){
    segundoNumero()
    posNumero()

    if(operação == 0){
        tela.innerHTML += ' x '
    }

    if(operação < 1 && operação < 2){
        operação ++ 
    }

}


function total(){
    let res = 0

    for(t in tot){
        res += tot[t]    
    }
    console.log(res)
}

//Operações auxiliares

function operações(n){
    if(operação == 0){
        junção += n
    }else{
        junção = ''
        junção += n
    }

    if(sNumero == 0){
        n1 = junção 
    }else{
        n2 += junção 
    }
    console.log(n1,n2)
}

function segundoNumero(){
    if(sNumero < 1){
        sNumero ++
    }
}

function posNumero(){
    if(operação == 1 && sNumero == 1){
        operação --
    }
    console.log(operação)
}
function resetJunção(){
    if(operação == 0 && sNumero == 1){
        junção = ''
    }
}
//total



//Tela 

function renderScreen(){
   tela.innerHTML += ` ${render} `   
   console.log(n1, n2) 
}

function allClear(){
    tela.innerHTML = ''

    n1 = ''
    n2 = ''
    console.log(n1,n2)
}