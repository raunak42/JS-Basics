function hollow_pyramid(n){
    string='';
    for(let l=0; l<n+1; l++){
        string+=' '
    }
    string+='*\n';

    for(let i=1; i<=n; i++){
        for(let j=1; j<=n+1-i; j++){
            string+=' ';
        }
        string+='*';
        for(let k=1; k<=2*i-1; k++){
            string+=' ';
        }
        string+='*\n'
    }

    for(let m=0; m<2*n+3; m++){
        string+='*'
    }
    return string;
}

console.log(hollow_pyramid(4))



function hol_pyr(n){
    string='';
    for(m=0; m<n+1; m++){
        string+=' ';
    }
    string+='*\n';

    for(let i=1; i<=n; i++){
        for(let j=1; j<=n+1-i; j++){
            string+=' ';
        }
        string+='*';
        for(let k=1; k<=2*i-1; k++){
            string+=' ';
        }
        string+='*\n';
    }

    for(let l=0; l<2*n+3; l++){
        string+='*'
    }
    return string;
}

console.log(hol_pyr(4));