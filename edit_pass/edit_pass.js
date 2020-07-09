const pass_input = document.getElementById('password')
const login_btn = document.getElementById('button')
const err = document.getElementById('error')

login_btn.addEventListener('click', ()=>{
    if(+pass_input.value === 123){
        window.location.replace('../edit_form/edit_form.html')
    } else{
        pass_input.classList.add("bounce");
        setTimeout(function() {
        pass_input.classList.remove("bounce");
    }, 1000); 
    }
    
})