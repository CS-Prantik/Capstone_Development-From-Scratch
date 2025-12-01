function submitHandler(){
    var arr=[];
    let name=document.querySelector('#md-1').value;
    let date=document.querySelector('#d-1').value;
    let email=document.querySelector('#e-1').value
    let gender=document.querySelector('input[type=radio]:checked').value
    let food = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(x => x.value);
    arr.push(name,date,email,gender,...food)

    let div=document.createElement('div')
    div.style.margin="200px 600px";
    for(let i=0;i<arr.length;i++)
    {
        div.innerHTML+=arr[i]+"<br>";
    }
    document.body.appendChild(div)


}