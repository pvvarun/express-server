export default function triangle( n : number ) : void {
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
