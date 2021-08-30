function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy + '-' + mm + '-' + dd;
var nextWeek = new Date(new Date(yyyy+'/'+mm+'/'+dd).getTime() + 7 * 24 * 60 * 60 * 1000 );
var nWdd = nextWeek.getDate();
var nWmm = nextWeek.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var nWyyyy = nextWeek.getFullYear();
if(nWdd<10){
  nWdd='0'+nWdd
} 
if(nWmm<10){
  nWmm='0'+nWmm
}
nextWDate = nWyyyy + '-' + nWmm + '-' + nWdd;
document.getElementById("startDate").setAttribute("min", today);
document.getElementById("startDate").setAttribute("max", nextWDate);
document.getElementById("endDate").setAttribute("min", nextWDate);

function SubmitForm () {
  var FirstName = document.querySelector('#firstName').value
  var LastName = document.querySelector('#lastName').value
  var LoanAmount = document.querySelector('#loanAmount').value
  var LoanEMI = document.querySelector('#loanEmi').value
  var StartDate = document.querySelector('#startDate').valueAsDate
  var EndDate = document.querySelector('#endDate').valueAsDate
  var Floating = document.querySelector( '#floatingStyleLoan' ).checked
  var table = document.querySelector('#tableContents')
  var FloatingValue
  if ( parseInt(LoanAmount) < parseInt(LoanEMI) ) {
    window.alert( 'EMI amount cannot be greater than the loan amount!!' )
    return
  }
  if ( Floating ) {
    FloatingValue = 'Floating'
  } else {
    FloatingValue = 'fixed'
  }
  table.innerHTML = table.innerHTML + `<tr>
          <td>${FirstName} ${LastName}</td>
          <td>${LoanAmount}</td>
          <td>${StartDate.getDate()}-${StartDate.getMonth()}-${StartDate.getFullYear()}</td>
          <td>${EndDate.getDate()}-${EndDate.getMonth()}-${EndDate.getFullYear()}</td>
          <td>${LoanEMI}</td>
          <td>${FloatingValue}</td>
          <td class="pending">Pending</td>
        </tr>`
  $( '.btn-close' ).click()
}
