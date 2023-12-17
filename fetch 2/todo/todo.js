let tasks = async () => {
  try {
    let res = await fetch(`http://localhost:3000/todo`);
    let data = await res.json();

    let mylist = document.getElementById("taskList");

    console.log(data);

    let bag = "";
    data.forEach(({ taskName, status, id }) => {
      bag += ` <div class="tasks">
                   <h2 class="taskh2">${taskName}</h2>
                   <h3> status : ${status}</h3>
                   <button class="delete-btn" onclick="removeTask(${id})">Delete</button>
                   <button class="status" onclick="changeTheStatus(${id})">Status</button>
                   <br>
                   </div> `;
    })

    mylist.innerHTML = bag;
  } catch (err) {
    console.log("Error");
  }
};

tasks();

let addTask = async () => {
  try {
    let addtask = document.getElementById("task").value;

    if(addtask==""){
        alert("Please Enter Your Task")
    }
    else{

        let obj = {
            taskName: addtask,
            status: false,
          };
      
          await fetch(`http://localhost:3000/todo`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
            },
          });
          location.reload();

    }
    
  } catch (error) {
    console.log(error);
  }
}


let removeTask = async (id) => {
  try {
    await fetch(` http://localhost:3000/todo/${id}`, {
      method: "DELETE",
    });
    console.log(id);
    location.reload();
  } catch (error) {
    console.log(error);
  }
};




let changeTheStatus = async (id) => {
     try {
        
        let response = await fetch(`http://localhost:3000/todo/${id}`);
        
        let Data = await response.json();
        
        Data.status = !Data.status;
        console.log(Data.status)
        
        let patchRe = await fetch(`http://localhost:3000/todo/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Data),
        });
        location.reload();

      } catch (error) {
        console.error(error);
      }
}

  
