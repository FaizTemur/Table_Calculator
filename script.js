function tablechecker()
{
    let a = document.querySelector("#table").value
    let i;
    let b;
    for(i=1;i<=10;i++)
    {
        b = a * i;
        document.write(`${a}X ${i}=${b}</br>`)
    }
}

