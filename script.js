const url1 = "https://dummyjson.com/posts";
const url2 = "https://dummyjson.com/products";
const url3 = "https://dummyjson.com/todos";
const tableBody = document.querySelector("#data-table tbody");

function PromiseAPI1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url1).then(response=>response.json()).then(data=>{
                // console.log(data.posts);
                data.posts.forEach(item => {
                    const row = document.createElement("tr");
                    const cell = document.createElement("td");
                    cell.innerText = item.id+". "+item.title;
                    row.appendChild(cell);
                    tableBody.appendChild(row);
                resolve(true);
                
            })

        },1000);
        console.log(new Date());
    })
})
}

function PromiseAPI2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url2).then(response=>response.json()).then(data=>{
                // console.log(data.products);
                data.products.forEach(item => {
                    const row = document.querySelector(`#data-table tbody tr:nth-child(${item.id})`);
                    const cell = document.createElement("td");
                    cell.innerText = item.id+". "+item.title;
                    row.appendChild(cell);
                resolve(true);
                
            })

        },2000);
    })
    console.log(new Date());
})
}

function PromiseAPI3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url3).then(response=>response.json()).then(data=>{
                // console.log(data.todos);
                data.todos.forEach(item => {
                    const row = document.querySelector(`#data-table tbody tr:nth-child(${item.id})`);
                    const cell = document.createElement("td");
                    cell.innerText = item.id+". "+item.todo;
                    row.appendChild(cell);
                resolve(true);
                
            })

        },3000);
    })
    console.log(new Date());
})
}

function fetchdata(){
    PromiseAPI1().then(value1=>{
        if(value1){
            return PromiseAPI2();
        }
    }).then(value2=>{
        if(value2){
            return PromiseAPI3();
        }
    }).catch(error=>console.log(error));
}

