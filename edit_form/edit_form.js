const month = document.getElementById('month');
const year = document.getElementById('year');

const hidden_file = document.getElementById('hidden_file')
const room_num = document.getElementById('room_num');
const hidden_element = document.getElementById('hidden_element');
const hidden_bill = document.getElementById('hidden_bill');

const bills = document.getElementById('bills')
const room_rent_bill = document.getElementById('room_rent_bill');
const gas = document.getElementById('gas_bill');
const elec = document.getElementById('elec_bill');
const water = document.getElementById('water_bill');

const other = document.getElementById('other_bill');
const other_expense = document.getElementById('other_expense');

const submit = document.getElementById('submit');
const upate = document.getElementById('update');
const home = document.getElementById('home');


//select year and month check
const visibility_condition = (hid) => {
    if(hid === "none"){
        hidden_file.style.display = "none";
    }
    else{
        hidden_file.style.display = "block";
    }
}
year.addEventListener('change', e=>{
    e.preventDefault();
    visibility_condition(year.value);
})


//select bill check
const bill_check_visibility_func = (x) =>{
    if(x === "none"){
        gas.style.display = "none";
    }
    else{
        gas.style.display = "block";
    }
}

bills.addEventListener('change', e=>{
    e.preventDefault();
    bill_check_visibility_func(bills.value)
})

//select room_no check
const room_num_check_visibility_func = (x) =>{
    if(x === "none"){
        room_rent_bill.style.display = "none";
    }
    else{
        room_rent_bill.style.display = "block";
    }
}

room_num.addEventListener('change', e=>{
    e.preventDefault();
   room_num_check_visibility_func(room_num.value)
})


// current date
var fulldate = new Date()
var current_date = fulldate.getDate();
var current_month = fulldate.getMonth()+1;
var current_year = fulldate.getFullYear();
var current_date = current_date+"-"+current_month+"-"+current_year;


//taking other expenses in a list
var arr = ''
other_expense.addEventListener('change', (e)=>{
    e.preventDefault();
    arr = other_expense.value.split(',');
    console.log(arr)
})

//taking room rent bill a list
// var room_rent_bill_list = [];
// room_rent_bill.addEventListener('change', (e)=>{
//     e.preventDefault();

//     dict.push({
//         key:   "keyName",
//         value: "the value"
//     });
//     room_rent_bill_list.push(room_rent_bill.value)
//     console.log(room_rent_bill_list)
// })




//firebase backend
const database = firebase.database()
const rootRef = database.ref('users')
const userId = month.value + year.value

submit.addEventListener('click', e =>{

    console.log("hello")

    rootRef.child(userId).set({
        currentDate: current_date,
        month: month.value,
        year: year.value,
        gas: gas.value,
        elec: elec.value,
        water: water.value,
        other: other.value,
        otherExpense: arr
    })
})

// //retrive and check data
// database.ref(`users/${userId}`).on('value', snapshot => {
//     snapshot.forEach(data => {
//         console.log(data.key + "  :  " + data.val());
//     })
// })


// update data undolved 
// update.addEventListener('click', e =>{
//     const newData = {
//         currentDate: current_date,
//         month: month.value,
//         year: year.value,
//         roomNo: room_num.value,
//         roomRent: room_rent_bill.value,
//         gas: gas.value,
//         elec: elec.value,
//         water: water.value,
//         other: other.value,
//         otherExpense: arr
//     }

//     rootRef.child(userId).update(newData);
// })






//home button
home.addEventListener('click', () =>{
    window.location = "../index.html";    

} )