function pilihaanCom(){
    const com = Math.random();
    if(com < 0.34) return 'batu';
    if(com >= 0.34 && com < 0.67) return 'kertas';
    return 'gunting';
}

function hasil(com, player){
    if(player == com) return 'SERI';
    if(player == 'batu') return (com == 'gunting') ? 'WIN' : 'LOSE';
    if(player == 'kertas') return (com == 'batu') ? 'WIN' : 'LOSE';
    if(player == 'gunting') return (com == 'kertas') ? 'WIN' : 'LOSE';
}

function loading(){
    const imgComuter = document.querySelector('.img-komputer');
    const gambar = ['batu', 'kertas', 'gunting'];
    let i = 0;
    const start = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - start > 1000){
            clearInterval();
            return;
        }
        imgComuter.setAttribute('src', gambar[i++] + '.jpg');
        if( i == gambar.length ) i = 0;
    }, 100)
}


const pil = document.querySelectorAll('li img');
pil.forEach(function(e){
    e.addEventListener('click', function(){
        const pCom = pilihaanCom();
        const pPlayer = e.className;
        const result = hasil(pCom, pPlayer);

        loading();

        setTimeout(function(){
            const imgCom = document.querySelector('.img-komputer');
            imgCom.setAttribute('src', pCom + '.jpg');
    
            const info = document.querySelector('.info');
            info.innerHTML = result;
        }, 1000);
    })
})


// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function(){
//     const pCom = pilihaanCom();
//     const pPlayer = pBatu.className;
//     const result = hasil(pCom, pPlayer);
    
//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', pCom + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = result;
// });

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function(){
//     const pCom = pilihaanCom();
//     const pPlayer = pGunting.className;
//     const result = hasil(pCom, pPlayer);
    
//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', pCom + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = result;
// });

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function(){
//     const pCom = pilihaanCom();
//     const pPlayer = pKertas.className;
//     const result = hasil(pCom, pPlayer);
    
//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', pCom + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = result;
// });