
function triangle(n){   
    let space="";
    let star="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(j<=n-i)
                space=space+" ";
            else
                star=star+"* ";
        }
        console.log(space,star);
        star="";
        space="";
    }
}
triangle(10);