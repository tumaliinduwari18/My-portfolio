// Navigation
var navLocation = '#home';
$('.nav-link').click(function(e){
    $(navLocation).css("display", "none");
    navLocation = "#"+e.target.innerHTML.toLowerCase();
    $(navLocation).css("display", "block");
});
//
// const customerTable = document.getElementById('tblCustomer');
// let selectedCustomerRowIndex;
//
// $('#btnCustomerSave').click(function (){
//     const id = $('#txtNewCustomerID').val();
//     const nic = $('#txtNewCustomerNIC').val();
//     const name = $('#txtNewCustomerName').val();
//     const salary = $('#txtNewCustomerSalary').val();
//     const address = $('#txtNewCustomerAddress').val();
//     if (id === ""){
//         $('#txtNewCustomerID').focus();
//         return
//     }
//     if (nic === ""){
//         $('#txtNewCustomerNIC').focus();
//         return
//     }
//     if (name === ""){
//         $('#txtNewCustomerName').focus();
//         return
//     }
//     if (salary === ""){
//         $('#txtNewCustomerSalary').focus();
//         return
//     }
//     if (address === ""){
//         $('#txtNewCustomerAddress').focus();
//         return
//     }
//     $('#tblCustomerBody').append(
//         "<tr>" +
//             "<td>"+id+"</td>" +
//             "<td>"+nic+"</td>" +
//             "<td>"+name+"</td>" +
//             "<td>"+salary+"</td>" +
//             "<td>"+address+"</td>" +
//         "</tr>"
//     );
//     displayCustomerSelectedRow();
// });
//
// $('#btnCustomerUpdate').click(function (){
//     const id = $('#txtEditCustomerID').val();
//     const nic = $('#txtEditCustomerNIC').val();
//     const name = $('#txtEditCustomerName').val();
//     const salary = $('#txtEditCustomerSalary').val();
//     const address = $('#txtEditCustomerAddress').val();
//     if (id === ""){
//         $('#txtEditCustomerID').focus();
//         return
//     }
//     if (nic === ""){
//         $('#txtEditCustomerNIC').focus();
//         return
//     }
//     if (name === ""){
//         $('#txtEditCustomerName').focus();
//         return
//     }
//     if (salary === ""){
//         $('#txtEditCustomerSalary').focus();
//         return
//     }
//     if (address === ""){
//         $('#txtEditCustomerAddress').focus();
//         return
//     }
//     const cells = customerTable.rows[selectedCustomerRowIndex].cells;
//     cells[0].innerHTML = id;
//     cells[1].innerHTML = nic;
//     cells[2].innerHTML = name;
//     cells[3].innerHTML = salary;
//     cells[4].innerHTML = address;
//     document.getElementById('btnCustomerEdit').disabled = true;
// });
//
// $('#btnCustomerDelete').click(function (){
//     customerTable.deleteRow(selectedCustomerRowIndex);
//     selectedCustomerRowIndex = undefined;
//     document.getElementById('btnCustomerEdit').disabled = true;
// });
//
// function displayCustomerSelectedRow(){
//     for (let i=1; i<customerTable.rows.length; i++){
//         customerTable.rows[i].onclick = function (){
//             if (selectedCustomerRowIndex) customerTable.rows[selectedCustomerRowIndex].className = '';
//             this.className = 'selected';
//             selectedCustomerRowIndex = this.rowIndex;
//             document.getElementById('btnCustomerEdit').disabled = false;
//             document.getElementById("txtEditCustomerID").value = this.cells[0].innerHTML;
//             document.getElementById("txtEditCustomerNIC").value = this.cells[1].innerHTML;
//             document.getElementById("txtEditCustomerName").value = this.cells[2].innerHTML;
//             document.getElementById("txtEditCustomerSalary").value = this.cells[3].innerHTML;
//             document.getElementById("txtEditCustomerAddress").value = this.cells[4].innerHTML;
//         }
//     }
// }
//
//
// const itemTable = document.getElementById('tblItem');
// let selectedItemRowIndex;
//
// $('#btnItemSave').click(function (){
//     const code = $('#txtNewItemCode').val();
//     const name = $('#txtNewItemName').val();
//     const price = $('#txtNewItemPrice').val();
//     const qty = $('#txtNewItemQuantity').val();
//     if (code === ""){
//         $('#txtNewItemCode').focus();
//         return
//     }
//     if (name === ""){
//         $('#txtNewItemName').focus();
//         return
//     }
//     if (price === ""){
//         $('#txtNewItemPrice').focus();
//         return
//     }
//     if (qty === ""){
//         $('#txtNewItemQuantity').focus();
//         return
//     }
//     $('#tblItemBody').append(
//         "<tr>" +
//         "<td>"+code+"</td>" +
//         "<td>"+name+"</td>" +
//         "<td>"+price+"</td>" +
//         "<td>"+qty+"</td>" +
//         "</tr>"
//     );
//     displayItemSelectedRow();
// });
//
// $('#btnItemUpdate').click(function (){
//     const code = $('#txtEditItemCode').val();
//     const name = $('#txtEditItemName').val();
//     const price = $('#txtEditItemPrice').val();
//     const qty = $('#txtEditItemQuantity').val();
//
//     if (code === ""){
//         $('#txtEditItemCode').focus();
//         return
//     }
//     if (name === ""){
//         $('#txtEditItemName').focus();
//         return
//     }
//     if (price === ""){
//         $('#txtEditItemPrice').focus();
//         return
//     }
//     if (qty === ""){
//         $('#txtEditItemQuantity').focus();
//         return
//     }
//     const cells = itemTable.rows[selectedItemRowIndex].cells;
//     cells[0].innerHTML = code;
//     cells[1].innerHTML = name;
//     cells[2].innerHTML = price;
//     cells[3].innerHTML = qty;
//     document.getElementById('btnItemEdit').disabled = true;
// });
//
// $('#btnItemDelete').click(function (){
//     itemTable.deleteRow(selectedItemRowIndex);
//     selectedItemRowIndex = undefined;
//     document.getElementById('btnItemEdit').disabled = true;
// });
//
// function displayItemSelectedRow(){
//     for (let i=1; i<itemTable.rows.length; i++){
//         itemTable.rows[i].onclick = function (){
//             if (selectedItemRowIndex) itemTable.rows[selectedItemRowIndex].className = '';
//             this.className = 'selected';
//             selectedItemRowIndex = this.rowIndex;
//             document.getElementById('btnItemEdit').disabled = false;
//             document.getElementById("txtEditItemCode").value = this.cells[0].innerHTML;
//             document.getElementById("txtEditItemName").value = this.cells[1].innerHTML;
//             document.getElementById("txtEditItemPrice").value = this.cells[2].innerHTML;
//             document.getElementById("txtEditItemQuantity").value = this.cells[3].innerHTML;
//         }
//     }
// }
// document.getElementById('txtNewCustomerID').addEventListener('keyup',function (){
//     alert("doc")
// })
// $('#txtNewCustomerID').onkeyup = function (){
//     alert("jq")
// }
//
//
// var cId = /^(C)[0-9]{3}$/;
// var cNic = /^[0-9]{12}$/;
// var cName = /^[A-Z]{3,30}$/;
// var cSalary = /^[1-9][0-9]*(.[0-9]{2})?$/;
// var cAddress = /^[a-z0-9 ,]{5,40}$/;
//
//
//
// $("#txtNewCustomerID").on('keyup',function (event) {
//     var inId = $("#txtNewCustomerID").val();
//     var checkId = cId.test(inId);
//     if(checkId){
//         $("#lblOne").css("color", "#26de81");
//         $("#txtNewCustomerID").css("border", "#26de81 solid 3px");
//
//         if(event.key === "Enter"){
//             $("#txtNewCustomerNic").focus();
//         }
//     }
//     else{
//         $("#lblOne").css("color", "#EA2027");
//         $("#txtNewCustomerID").css("border", "#EA2027 solid 3px");
//     }
// });
//
// $("#txtNewCustomerNic").on('keyup',function (event) {
//     var inNic = $("#txtNewCustomerNic").val();
//     var checkNic = cNic.test(inNic);
//     if(checkNic){
//         $("#lblTwo").css("color", "#26de81");
//         $("#txtNewCustomerNic").css("border", "#26de81 solid 3px");
//
//         if(event.key === "Enter"){
//             $("#txtNewCustomerName").focus();
//         }
//     }
//     else{
//         $("#lblTwo").css("color", "#EA2027");
//         $("#txtNewCustomerNic").css("border", "#EA2027 solid 3px");
//     }
// });
//
// $("#txtNewCustomerName").on('keyup',function (event) {
//     var inName = $("#txtNewCustomerName").val();
//     var checkName = cName.test(inName);
//
//     if(checkName){
//         $("#lblThree").css("color", "#26de81");
//         $("#txtNewCustomerName").css("border", "#26de81 solid 3px");
//
//         if(event.key === "Enter"){
//             $("#txtNewCustomerSalary").focus();
//         }
//     }
//     else{
//         $("#lblThree").css("color", "#EA2027");
//         $("#txtNewCustomerName").css("border", "#EA2027 solid 3px");
//     }
// });
//
// $("#txtNewCustomerSalary").on('keyup',function (event) {
//     var inSalary = $("#txtNewCustomerSalary").val();
//     var checkSalary = cSalary.test(inSalary);
//
//     if(checkSalary){
//         $("#lblFour").css("color", "#26de81");
//         $("#txtNewCustomerSalary").css("border", "#26de81 solid 3px");
//
//         if(event.key === "Enter"){
//             $("#txtNewCustomerAddress").focus();
//         }
//
//     }
//     else{
//         $("#lblFour").css("color", "#EA2027");
//         $("#txtNewCustomerSalary").css("border", "#EA2027 solid 3px");
//     }
// });
//
// $("#txtNewCustomerAddress").on('keyup',function (event) {
//     var inAddress = $("#txtNewCustomerAddress").val();
//     var checkAddress = cAddress.test(inAddress);
//
//     if(checkAddress){
//         $("#lblFive").css("color", "#26de81");
//         $("#txtNewCustomerAddress").css("border", "#26de81 solid 3px");
//         $("#Add").prop("disabled",false);
//
//         if(event.key === "Enter"){
//             $("#Add").focus();
//         }
//
//     }
//     else{
//         $("#lblFive").css("color", "#EA2027");
//         $("#txtNewCustomerAddress").css("border", "#EA2027 solid 3px");
//     }
// });