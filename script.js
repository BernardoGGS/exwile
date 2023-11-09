function fat_sqn() {
    let n = parseInt(qualquer.value);
    let fat = n;

    if(n<0){
        alert("Número Negativo");
    }
    else if(n==0){
        alert("Coloque um número maior que 0");
    }

    else{
        while(n>1){
            fat = fat*(n-1);
                n = n-1;
            alert(fat)
        }
    }
}

