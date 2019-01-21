export default function diamond( n : number ) : void {
  let space="";
  let star="";
  for(let i = 1;i < 2*n;i++) {
    for(let j = 1;j <= n;j++) {
	    if(i <= n) {
        if(j<=n-i)
          space=space+" ";
        else
          star=star+"* ";
      }
	    if(i>n) {
        if(j<=i-n)
          space=space+" ";
        else
          star=star+"* ";
      }
    }
    console.log(space,star);
    star="";
    space="";
  }
}
// diamond(6);
