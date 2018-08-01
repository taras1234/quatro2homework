const a = parseFloat(prompt('write number to a'));
const b = parseFloat(prompt('write number to b'));
const c = parseFloat(prompt('write number to c'));
if(a!=0){
    function sqr(a, b, c){
     const d = (b*b - 4*a*c);
     const disqr = Math.sqrt(d);
     const x1=((-b+disqr)/(2*a));
     const x2=((-b-disqr)/(2*a));
     return[x1,x2];
    } if (d==0){
        const x3 = (-b/2*a);
        return[x3];
    } else { alert('no result')}
    const result = sqr(a,b,c);
    alert(result);
}