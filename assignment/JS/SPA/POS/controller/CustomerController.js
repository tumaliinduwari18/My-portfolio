import {getAllCustomerDB, saveCustomerDB, updateCustomerDB, deleteCustomerDB} from "../DB/db.js";
import {Customer} from "../model/customer.js";
import {OrderController} from "./OrderController.js";

export class CustomerController {
    constructor() {
        $('#btnCustomerSave').click(this.handleSaveCustomerValidation.bind(this));
        $('#btnCustomerUpdate').click(this.handleUpdateCustomerValidation.bind(this));
        $('#btnCustomerDelete').click(this.handleDeleteCustomerValidation.bind(this));
        $('#tblCustomerBody').click(event=>this.handleSelectCustomer(event));

        this.handleSaveCustomer.bind(this);
        this.handleLoadCustomers();
    }
    handleLoadCustomers() {
        $('#tblCustomerBody').empty();
        getAllCustomerDB().map((result, index) => {
            const row = "<tr class='customer-row-data'>" +
                "<td>" + result._customer_id + "</td>" +
                "<td>" + result._customer_nic + "</td>" +
                "<td>" + result._customer_name + "</td>" +
                "<td>" + result._customer_salary + "</td>" +
                "<td>" + result._customer_address + "</td>" +
                "</tr>";
            $('#tblCustomerBody').append(row);
        })
    }
    handleSaveCustomerValidation() {
        const customer_id = $('#txtNewCustomerID').val();
        const customer_nic = $('#txtNewCustomerNIC').val();
        const customer_name = $('#txtNewCustomerName').val();
        const customer_salary = $('#txtNewCustomerSalary').val();
        const customer_address = $('#txtNewCustomerAddress').val();

        const regexId = /^\d+$/;
        !regexId.test(customer_id) ?
            alert('Invalid Id') :
            (!customer_nic) ?
                alert('Invalid Nic') :
                (!customer_name) ?
                    alert('Invalid Name') :
                    (!customer_salary) ?
                        alert('Invalid Salary') :
                        (!customer_address) ?
                            alert('Invalid Address') :
                            this.handleSaveCustomer();
    }
    handleSaveCustomer() {
        const customer_id = $('#txtNewCustomerID').val();
        const customer_nic = $('#txtNewCustomerNIC').val();
        const customer_name = $('#txtNewCustomerName').val();
        const customer_salary = $('#txtNewCustomerSalary').val();
        const customer_address = $('#txtNewCustomerAddress').val();

        let customer = new Customer(
            customer_id,
            customer_nic,
            customer_name,
            customer_salary,
            customer_address
        );
        saveCustomerDB(customer);
        this.handleLoadCustomers();
        new OrderController().handleLoadCustomerIDS();
    }
    handleUpdateCustomerValidation() {
        const customer_id = $('#txtEditCustomerID').val();
        const customer_nic = $('#txtEditCustomerNIC').val();
        const customer_name = $('#txtEditCustomerName').val();
        const customer_salary = $('#txtEditCustomerSalary').val();
        const customer_address = $('#txtEditCustomerAddress').val();

        (getAllCustomerDB().findIndex(customer => customer._customer_id === customer_id ) < 0) ?
            alert("not found customer") :
            (!customer_nic) ?
                alert('Invalid Nic') :
                (!customer_name) ?
                    alert('Invalid Name') :
                    (!customer_salary) ?
                        alert('Invalid Salary') :
                        (!customer_address) ?
                            alert('Invalid Address') :
                            this.handleUpdateCustomer();
    }
    handleUpdateCustomer() {
        const customer_id = $('#txtEditCustomerID').val();
        const customer_nic = $('#txtEditCustomerNIC').val();
        const customer_name = $('#txtEditCustomerName').val();
        const customer_salary = $('#txtEditCustomerSalary').val();
        const customer_address = $('#txtEditCustomerAddress').val();

        let customer = new Customer(
            customer_id,
            customer_nic,
            customer_name,
            customer_salary,
            customer_address
        );
        updateCustomerDB(customer);
        this.handleLoadCustomers();
        new OrderController().handleLoadCustomerIDS();
        $('#btnCustomerEdit').prop( "disabled", true);
    }
    handleDeleteCustomerValidation(){
        (getAllCustomerDB().findIndex(customer => customer._customer_id === $('#txtEditCustomerID').val()) < 0) ?
            alert("not found customer") : this.handleDeleteCustomer();
    }
    handleDeleteCustomer() {
        const customer_id = $('#txtEditCustomerID').val();
        const customer_nic = $('#txtEditCustomerNIC').val();
        const customer_name = $('#txtEditCustomerName').val();
        const customer_salary = $('#txtEditCustomerSalary').val();
        const customer_address = $('#txtEditCustomerAddress').val();

        let customer = new Customer(
            customer_id,
            customer_nic,
            customer_name,
            customer_salary,
            customer_address
        );
        deleteCustomerDB(customer);
        this.handleLoadCustomers();
        new OrderController().handleLoadCustomerIDS();
        $('#btnCustomerEdit').prop( "disabled", true);
    }
    handleSelectCustomer(event){
        $('#tblCustomerBody tr').removeClass('selected');
        $(event.target).closest('tr').addClass('selected');
        $('#btnCustomerEdit').prop( "disabled", false);

        let row = $(event.target).closest('tr').find('td');
        $('#txtEditCustomerID').val(row.eq(0).text());
        $('#txtEditCustomerNIC').val(row.eq(1).text());
        $('#txtEditCustomerName').val(row.eq(2).text());
        $('#txtEditCustomerSalary').val(row.eq(3).text());
        $('#txtEditCustomerAddress').val(row.eq(4).text());
    }
}
new CustomerController();
