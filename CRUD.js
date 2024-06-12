
let list =JSON.parse(localStorage.getItem('list')) || [];
AddData();

let fname = document.getElementById("input-fname");
let add = document.getElementById("input-Add");
let number = document.getElementById("input-Number");
let editFname = document.getElementById("edit-fname");
let editAdd = document.getElementById("edit-add");
let editNumber = document.getElementById("edit-number");

function data() {
  let fname_val = fname.value;
  let add_val = add.value;
  let num_val = number.value;

  if (fname_val == "" || fname_val == null) {
    alert("plese enter name");
    return false;
  } else if (add_val == null || add_val == "") {
    alert("plese enter address");
    return false;
  } 
  else if (num_val.length > 10 || num_val.length <10) {
    alert("plese enter 10 digit number");
    return false;
  }
  let final_data = { fname_val, add_val, num_val };
  list.push(final_data);
  localStorage.setItem('list' , JSON.stringify(list))
  fname.value ='';
  add.value = '';
  number.value ='';

  console.log(list);

  AddData();
}
function AddData() {
  let container_list = document.getElementById("container_list");

  let new_HTML = "";
  (new_HTML = `<table>
<tr> 
<td>Name</td>
<td>Address</td>
<td>Phone. number</td>
<td>Operations</td>
</tr> `),
    list.forEach((e, i) => {
      new_HTML += `
          <tr>
            <td>${e.fname_val}</td>
<td>${e.add_val}</td>
<td>${e.num_val}</td>
<td>
  <button onclick="list.splice(${i} , 1);AddData();">Delete</button>
  <button onclick = "editFun(${i})">Edit</button>
  </td>
            </tr>
          
          `;
    }),
    `  </table>`;
  list.map((e) => e);

  container_list.innerHTML = new_HTML;
}
AddData();

function editFun(index) {
  let update_data = document.getElementById("update-data");
  update_data.style.display = "block";

  let change_Data = document.getElementById("change_Data");
  change_Data.style.display = "none"
  let item = list[index];

  editFname.value = item.fname_val;
  editAdd.value = item.add_val;
  editNumber.value = item.num_val;

  let changeData = document.getElementById("showData");
  changeData.onclick = () => {
   
    if(editFname.value == "" || editFname.value== null){
          list[index].fname_val = item.fname_val
     }
    // else if(add_val == null || add_val == ""){
    //   add_val = item.add_val;
    // }
    // else if(num_val.length > 10 || num_val.length <10 || num_val == ""){
    //   num_val = item.num_val
    // }
    // if(editNumber.value.length > 10 || editNumber.value.length <10){
    //   return false
    // }

       list[index] = {
         fname_val: editFname.value,
         add_val: editAdd.value,
         num_val: editNumber.value,
       };
  localStorage.setItem('list' , JSON.stringify(list))
     

    AddData();
    update_data.style.display = "none";
    change_Data.style.display = "block";
    editFname.value = "";
    editAdd.value = "";
    editNumber.value = "";
  };
}
