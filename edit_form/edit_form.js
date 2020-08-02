const month = document.getElementById('month');
const year = document.getElementById('year');

const hidden_file = document.getElementById('hidden_file')
const room_num = document.getElementById('room_num');
const hidden_element = document.getElementById('hidden_element');
const hidden_bill = document.getElementById('hidden_bill');

const bills = document.getElementById('bills')
const room_rent_bill = document.getElementById('room_rent_bill');
const bill_input = document.getElementById('bill_input');
const elec = document.getElementById('elec_bill');
const water = document.getElementById('water_bill');
const room_submit = document.getElementById('room_submit')

const other = document.getElementById('other_bill');
const other_expense = document.getElementById('other_expense');

const submit = document.getElementById('submit');
const upate = document.getElementById('update');
const home = document.getElementById('home');

const confirm_date = document.getElementById("confirm_date");


// current date
var fulldate = new Date()
var current_date = fulldate.getDate();
var current_month = fulldate.getMonth()+1;
var current_year = fulldate.getFullYear();
var current_date = current_date+"-"+current_month+"-"+current_year;

//firebase backend
const database = firebase.database()
var userId;


//select year check
year.addEventListener('change', e=>{
    e.preventDefault();

    //month value check
    month.value = "none"
    if(year.value != "none"){
        month.style.display = "block";
        month.addEventListener('change', e=>{
            e.preventDefault();
            if(month.value!="none"){
                confirm_date.style.display = "block"
                confirm_date.addEventListener('click', e=>{
                    e.preventDefault();
                    var confirm_d = confirm(`${month.value} - ${year.value}  ??`)
                    if(confirm_d == true){
                        hidden_file.style.display = "block";
                        document.getElementById("date_details").style.display = "none";
                        document.getElementById("date_details_show").style.display = "block";
                        document.getElementById("date_details_show").innerHTML = `<h2>${month.value}  ${year.value}</h2>`; 

                        // setting database
                        userId = month.value + year.value
                        database.ref(`${year.value + month.value}`).set({
                            currentDate: current_date,
                            month: month.value,
                            year: year.value
                        })
                    }
                    else{
                        hidden_file.style.display = "none";
                    }
                })
            }
        })
    }

    

})



//select bill check
const bill_check_visibility_func = (x) =>{
    if(x === "none"){
        bill_input.style.display = "none";
    }
    else{
        bill_input.style.display = "block";
        document.getElementById("bill_submit").style.display = "block";
        document.getElementById("bill_submit").addEventListener('click', e=>{
            e.preventDefault();
            var check = confirm("are you sure?")
            if (check === true){
                // backend
                bills.value = "none"
                bill_input.value = "";
            }
            
        })
        
    }
}

bills.addEventListener('change', e=>{
    e.preventDefault();
    bill_check_visibility_func(bills.value)
    bill_input.value = ''

    bill_input.addEventListener('change', e=>{
        e.preventDefault();
        document.getElementById('showAll').style.display = "block";
        console.log(bill_input.value)
        
        document.getElementById('showAll').innerHTML = `
            <ul>
                <li>${bills.value} : ${bill_input.value}</li>
            </ul>
        `
        document.getElementById('showAll').classList.add('showAll');
    })
})

//select room_no check
const room_num_check_visibility_func = (x) =>{
    if(x === "none"){
        room_rent_bill.style.display = "none";
    }
    else{
        room_rent_bill.style.display = "block";
        room_submit.style.display = "block";
        room_submit.addEventListener('click', e=>{
            e.preventDefault();
            check = confirm("are you sure?");           //confirmimg the room rent bill
            if (check === true){
                //backend
                room_num.value = "none"
                room_rent_bill.value = "";
            }

            
        })
    }
}

room_num.addEventListener('change', e=>{
    e.preventDefault();
   room_num_check_visibility_func(room_num.value);
})




//taking other expenses in a list
var arr = ''
other_expense.addEventListener('change', (e)=>{
    e.preventDefault();
    arr = other_expense.value.split(',');
    console.log(arr)
})

















const room_rent = room_rent_bill.value
var room_no;
var room_bill;


//room number change response
room_num.addEventListener('change', e=>{
    e.preventDefault();
    room_no =room_num.value //string type
})

const db_room_rent = database.ref(`/users/${userId}/room_rent/`)

//room submit to the firebase
const db_room = function db_room(){
    room_submit.addEventListener('click', e=>{
    e.preventDefault();
    if(room_rent_bill.value == ""){
        alert("Rent amount is 0")
    }
    else{
        switch (room_no) {
            case "201":
                room_bill= room_rent_bill.value
                var s = confirm("are you sure?")
                if(s == true){
                    db_room_rent.set({
                        "201" : room_bill
                    })
                    console.log(room_bill)
                    console.log(room_no)
                    room_rent_bill.value = "";
                    room_num.value = "none"
                }
                
                break;
            case "202":
                room_bill = room_rent_bill.value
                var s = confirm("are you sure?")
                if(s == true){
                    db_room_rent.set({
                        "202" : room_bill
                    })
                    room_rent_bill.value = "";
                    room_num.value = "none";
                }
                
                break;
            case "203":
                room_bill = room_rent_bill.value
                var s = confirm("are you sure?")
                if(s == true){
                    rootRef.child(`${userId}/room_rent/`).set({
                        "203" : room_bill
                    })
                    room_rent_bill.value = "";
                    room_num.value = "none"
                }
                
                break;
            case "204":
                room_bill = room_rent_bill.value
                var s = confirm("are you sure?")
                if(s == true){
                    rootRef.child(`${userId}/room_rent/`).set({
                        "204" : room_bill
                    })
                    room_rent_bill.value = "";
                    room_num.value = "none"
                }
                
                break;
            case "205":
                room_bill = room_rent_bill.value
                var s = confirm("are you sure?")
                if(s == true){
                    rootRef.child(`${userId}/room_rent/`).set({
                        "205" : room_bill
                    })
                    room_rent_bill.value = "";
                    room_num.value = "none"
                }
                
                break;
            case "206":
                room_bill = room_rent_bill.value
                var s = confirm("are you sure?")
                if(s == true){
                    rootRef.child(`${userId}/room_rent/`).set({
                        "206" : room_bill
                    })
                    room_rent_bill.value = "";
                    room_num.value = "none"
                }
                
                break;
            case "207":
                room_bill = room_rent_bill.value
                var s = confirm("are you sure?")
                if(s == true){
                    rootRef.child(`${userId}/room_rent/`).set({
                        "207" : room_bill
                    })
                    room_rent_bill.value = "";
                    room_num.value = "none"
                }
                
                break;
            default:
                break;
        }
    }
    
    
})}

submit.addEventListener('click', e=>{
    if(month.value === "none"){
        alert("please select the month")
        e.preventDefault()
    }
    else{

        var x = confirm("Do you want to submit?")
        if(x == true){
            rootRef.child(userId).set({
                currentDate: current_date,
                month: month.value,
                year: year.value,
                other: other.value,
                otherExpense: arr
            })}
            else{
                e.preventDefault()
            }
        }
    

        

        

        

        rootRef.child(`${userId}/bills/`).set({

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

