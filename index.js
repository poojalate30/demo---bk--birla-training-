


//function checkEvent(num){
    //return new Promise((resolve,reject)=> {
//setTimeout(()=> {
    //if (num % 2==0){
    //    resolve("Even number");
  //  }else{
       // reject("old Number");
   // }
//}, 1000);
   // });
//}
//checkEvent(34).
//then((result) =>{
  //  let mainresult =`update msg is ${result}`
    //console.log(mainresult)})
   // .catch(error => console.log(error))


    
//async function getData(){
   // try{
      //  const result = await fetch("")
        //const data = await result.json()
     //   console.log(data);
    //}catch(error){
        //console.log(error)
    //}
//}
//getData()



const mainDiv = document.getElementById("main-content");

async function getData() {
  try {
    const result = await fetch("YOUR_API_URL_HERE");
    const data = await result.json();
    console.log(data);

    data.forEach((element) => {
      const subDiv = document.createElement("div");
      subDiv.className = "card";
      subDiv.innerHTML = `
        <img src="${element.image}" alt="Product" />
        <h1>${element.title}</h1>
        <p>${element.description}</p>
        <p class="price">Rs ${element.price}</p>
      `;
      mainDiv.append(subDiv);
    });

  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

getData();
