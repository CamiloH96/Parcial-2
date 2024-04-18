let n1 = parseInt(process.argv[2]);
let n2 = parseInt(process.argv[3]);

if (n1 > n2) {
    console.log(`El numero ${n1} es mayor que ${n2}`);
}else{
    console.log(`El numero ${n2} es mayor que ${n1}`);
}