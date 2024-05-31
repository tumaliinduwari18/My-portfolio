import {
    getAllCustomerDB,
    getAllItemDB,
    getAllOrderDB,
    saveOrderDB,
    saveOrderDetailDB,
    searchItemDB,
    updateItemDB
} from "../DB/db.js";
import {Item} from "../model/item.js";
import {Order} from "../model/order.js";
import {OrderDetails} from "../model/orderDetails.js";
import {ItemController} from "./ItemController.js";

export class OrderController{
    constructor() {
        $('#selectOrderCustomerId').change((event)=>this.handleSelectCustomerChange(event));
        $('#selectOrderItemCode').change((event)=>this.handleSelectItemChange(event));
        $('#btnAddToCartItem').click(this.handleItemAddToCart.bind(this));
        $('#txtDiscount').on('keyup', this.handleDiscountChange.bind(this));
        $('#txtCash').on('keyup', this.handleCashChange.bind(this));
        $('#btnOrderPurchase').click(this.handlePurchaseOrder.bind(this));

        this.handleLoadOrderId();
        this.handleLoadOrderDate();
        this.handleLoadCustomerIDS()
        this.handleLoadItemCodes();
    }
    handleLoadOrderId(){
        let order_data_arr = getAllOrderDB();

        let order_id;
        if (order_data_arr.length !== 0){
            order_id = 'O-' + (String((+order_data_arr[order_data_arr.length-1]._order_id.split('-')[1])+1).padStart(3,'0'));

        }else {
            order_id = "O-001";
        }
        $('#txtOrderId').val(order_id);
    }
    handleLoadOrderDate(){
        $('#txtOrderDate').val(new Date(Date.now()).toLocaleDateString());
    }
    handleLoadCustomerIDS(){
        let customer_data_arr = getAllCustomerDB();

        $('#selectOrderCustomerId').empty().append("<option selected>Choose...</option>");
        customer_data_arr.map((customer, index)=>{
            $('#selectOrderCustomerId').append("<option class='option-customer-data'>"+customer._customer_id+"</option>");
        });
    }
    handleLoadItemCodes(){
        $('#selectOrderItemCode').empty().append("<option selected>Choose...</option>");
        getAllItemDB().map((item, index)=>{
            $('#selectOrderItemCode').append("<option class='option-item-data'>"+item._item_code+"</option>");
        });
    }
    handleSelectCustomerChange(event){
        let customer_data_arr = getAllCustomerDB();

        let customer_id = event.target.value;
        if (customer_id !== "Choose..."){
            customer_data_arr.map((customer, index) => {
                if (customer._customer_id === customer_id) {
                    $('#txtOrderCustomerNIC').val(customer._customer_nic);
                    $('#txtOrderCustomerName').val(customer._customer_name);
                    $('#txtOrderCustomerSalary').val(customer._customer_salary);
                    $('#txtOrderCustomerAddress').val(customer._customer_address);
                }
            });
        }else {
            $('#txtOrderCustomerNIC').val("");
            $('#txtOrderCustomerName').val("");
            $('#txtOrderCustomerSalary').val("");
            $('#txtOrderCustomerAddress').val("");
        }
    }
    handleSelectItemChange(event){
        const item_data_arr = getAllItemDB();
        const item_code = event.target.value;
        if (item_code !== "Choose..."){
            const rows = $('#tblOrderCartBody').find('tr');
            item_data_arr.map((item, index) => {
                if (item._item_code === item_code) {
                    if (rows.length > 0) {
                        for (let i = 0; i < rows.length; i++) {
                            const column = $(rows[i]).find('td');
                            const row_item_code = $(column[0]).text();
                            if (row_item_code === item_code) {
                                item._item_quantity -= parseInt($(column[3]).text());
                                break;
                            }
                        }
                    }
                    $('#txtOrderItemDescription').val(item._item_name);
                    $('#txtOrderItemUnitPrice').val(item._item_price);
                    $('#txtOrderItemQtyOnHand').val(item._item_qty_on_stock);
                }
            });
        }else {
            $('#txtOrderItemDescription').val("");
            $('#txtOrderItemUnitPrice').val("");
            $('#txtOrderItemQtyOnHand').val("");
        }
    }
    handleItemAddToCart(){
        const $tblOrderCartBody = $('#tblOrderCartBody');
        const rows = $tblOrderCartBody.find('tr');
        const $txtOrderItemQtyOnHand = $('#txtOrderItemQtyOnHand');
        const $lblTotal = $('#lblTotal');
        const $lblSubTotal = $('#lblSubTotal');

        let item_code = $('#selectOrderItemCode').val();
        let item_name = $('#txtOrderItemDescription').val();
        let unit_price = $('#txtOrderItemUnitPrice').val();
        let qty = parseInt($('#txtOrderItemQty').val());

        if (item_code !== "Choose..." && qty ){
            let qty_on_hand = $txtOrderItemQtyOnHand.val() - qty;
            if (0 > qty || qty_on_hand < 0){
                alert("The requested quantity is not in stock..!");
            }else {
                let total = qty * unit_price;
                $lblTotal.text(parseInt($lblTotal.text()) + total);
                let sub_total = parseInt($lblTotal.text()) - (parseInt($lblTotal.text())*$('#txtDiscount').val())/100;
                $lblSubTotal.text(sub_total);

                if (rows.length > 0) {
                    for (let i = 0; i < rows.length; i++) {
                        const column = $(rows[i]).find('td');
                        const row_item_code = $(column[0]).text();
                        if (row_item_code === item_code) {
                            $(column[3]).text(parseInt($(column[3]).text()) + qty);
                            $(column[4]).text(parseFloat($(column[4]).text()) + total);
                            return;
                        }
                    }
                }
                $tblOrderCartBody.append(
                    "<tr class='row-data'>" +
                    "<td>" + item_code + "</td>" +
                    "<td>" + item_name + "</td>" +
                    "<td>" + unit_price + "</td>" +
                    "<td>" + qty + "</td>" +
                    "<td>" + total + "</td>" +
                    "</tr>"
                );
                $txtOrderItemQtyOnHand.val(qty_on_hand)
            }
        }
    }
    handleDiscountChange(){
        const discount_percentage = $('#txtDiscount').val();
        if (discount_percentage > 100 || discount_percentage < 0) {
            alert("Invalid Discount...!");
            return;
        }
        const $lblTotal = $('#lblTotal');
        const $lblSubTotal = $('#lblSubTotal');

        let sub_total = parseInt($lblTotal.text()) - (parseInt($lblTotal.text())*discount_percentage)/100;
        $lblSubTotal.text(sub_total);
    }
    handleCashChange(){
        const cash = $('#txtCash').val();
        const total = parseFloat($('#lblSubTotal').text());
        const $txtBalance = $('#txtBalance');

        if (cash < 0){
            alert("Invalid Cash..!")
        }else {
            $txtBalance.val(cash - total);
        }
    }
    handlePurchaseOrder(){
        const $tblOrderCartBody = $('#tblOrderCartBody');
        const rows = $tblOrderCartBody.find('tr');

        var order_id = $('#txtOrderId').val();
        var order_date = $('#txtOrderDate').val();
        var customer_id = $('#selectOrderCustomerId').val();
        var order_details = [];

        if (customer_id === "Choose..."){
            alert("Please select customer..!");
        }else if (rows.length <= 0){
            alert("Your cart is empty..!");
        }else {
            let order = new Order(
                order_id,
                order_date,
                customer_id,
            );
            saveOrderDB(order);
            for (let i=0; i<rows.length; i++){
                const column = $(rows[i]).find('td');
                let orderDetails = new OrderDetails(
                    order_id,
                    $(column[0]).text(),
                    $(column[2]).text(),
                    $(column[3]).text()
                );
                order_details.push(orderDetails);
            }
            this.handleSaveOrderDetails(order_details);
            this.handleClearAll();
            new ItemController();
        }
    }
    handleSaveOrderDetails(order_details){
        for (let order_detail of order_details){
            saveOrderDetailDB(order_detail);
            let search_item = searchItemDB(order_detail.item_code);

            let item = new Item(
                search_item._item_code,
                search_item._item_name,
                search_item._item_price,
                search_item._item_qty_on_stock
            );
            item.item_qty_on_stock -= parseInt(order_detail.item_quantity);
            updateItemDB(item);
        }
    }
    handleClearAll(){
        this.handleLoadOrderId();
        $('#selectOrderCustomerId').val("Choose...");
        $('#txtOrderCustomerNIC').val("");
        $('#txtOrderCustomerName').val("");
        $('#txtOrderCustomerSalary').val("");
        $('#txtOrderCustomerAddress').val("");
        $('#selectOrderItemCode').val("Choose...");
        $('#txtOrderItemDescription').val("");
        $('#txtOrderItemUnitPrice').val("");
        $('#txtOrderItemQtyOnHand').val("");
        $('#txtOrderItemQty').val("");
        $('#lblTotal').text("0");
        $('#lblSubTotal').text("0");
        $('#txtCash').val("");
        $('#txtDiscount').val("");
        $('#txtBalance').val("");
        $('#tblOrderCartBody').empty();
    }
}

new OrderController();