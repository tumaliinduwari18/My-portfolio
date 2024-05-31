import {getAllItemDB, saveItemDB, updateItemDB, deleteItemDB} from "../DB/db.js";
import {Item} from "../model/item.js";
import {OrderController} from "./OrderController.js";

export class ItemController {
    constructor() {
        $('#btnItemSave').click(this.handleSaveItemValidation.bind(this));
        $('#btnItemUpdate').click(this.handleUpdateItemValidation.bind(this));
        $('#btnItemDelete').click(this.handleDeleteItemValidation.bind(this));
        $('#tblItemBody').click((event)=>this.handleSelectItemTable(event));

        this.handleLoadItem();
        this.handleSaveItem.bind(this);
    }
    handleLoadItem() {
        let item_data_arr = getAllItemDB();

        $('#tblItemBody').empty();
        item_data_arr.map((result, index) => {
            const row = "<tr class='row-data'>" +
                "<td>" + result._item_code + "</td>" +
                "<td>" + result._item_name + "</td>" +
                "<td>" + result._item_price + "</td>" +
                "<td>" + result._item_qty_on_stock + "</td>" +
                "</tr>";
            $('#tblItemBody').append(row);
        });
    }
    handleSaveItemValidation() {
        const item_code = $('#txtNewItemCode').val();
        const item_name = $('#txtNewItemName').val();
        const item_price = $('#txtNewItemPrice').val();
        const item_quantity = $('#txtNewItemQuantity').val();

        const regexNumber = /^\d+$/;

        !regexNumber.test(item_code) ?
            alert('Invalid Id') :
            (!item_name) ?
                alert('Invalid Name') :
                (!item_price) ?
                    alert('Invalid Price') :
                    !regexNumber.test(item_quantity) ?
                        alert('Invalid Quantity') :
                            this.handleSaveItem();
    }
    handleSaveItem() {
        const item_code = $('#txtNewItemCode').val();
        const item_name = $('#txtNewItemName').val();
        const item_price = $('#txtNewItemPrice').val();
        const item_quantity = $('#txtNewItemQuantity').val();

        let item = new Item(
            item_code,
            item_name,
            item_price,
            item_quantity
        );
        saveItemDB(item);
        this.handleLoadItem();
        new OrderController().handleLoadItemCodes();
    }
    handleUpdateItemValidation() {
        const item_code = $('#txtEditItemCode').val();
        const item_name = $('#txtEditItemName').val();
        const item_price = $('#txtEditItemPrice').val();
        const item_quantity = $('#txtEditItemQuantity').val();

        const regexNumber = /^\d+$/;

        (getAllItemDB().findIndex(item => item._item_code === item_code ) < 0) ?
            alert("not found item") :
            (!item_name) ?
                alert('Invalid Name') :
                (!item_price) ?
                    alert('Invalid Price') :
                    !regexNumber.test(item_quantity) ?
                        alert('Invalid Quantity') :
                        this.handleUpdateItem();
    }
    handleUpdateItem() {
        const item_code = $('#txtEditItemCode').val();
        const item_name = $('#txtEditItemName').val();
        const item_price = $('#txtEditItemPrice').val();
        const item_quantity = $('#txtEditItemQuantity').val();

        let item = new Item(
            item_code,
            item_name,
            item_price,
            item_quantity
        );
        updateItemDB(item);
        this.handleLoadItem();
        new OrderController().handleLoadItemCodes();
        $('#btnItemEdit').prop( "disabled", true);
    }
    handleDeleteItemValidation(){
        (getAllItemDB().findIndex(item => item._item_code === $('#txtEditItemCode').val() ) < 0) ?
            alert("not found item") :
            this.handleDeleteItem();
    }
    handleDeleteItem() {
        const item_code = $('#txtEditItemCode').val();
        const item_name = $('#txtEditItemName').val();
        const item_price = $('#txtEditItemPrice').val();
        const item_quantity = $('#txtEditItemQuantity').val();

        let item = new Item(
            item_code,
            item_name,
            item_price,
            item_quantity
        );
        deleteItemDB(item);
        this.handleLoadItem();
        new OrderController().handleLoadItemCodes();
        $('#btnItemEdit').prop( "disabled", true);
    }
    handleSelectItemTable(event){
        $('#tblItemBody tr').removeClass('selected');
        $(event.target).closest('tr').addClass('selected');
        $('#btnItemEdit').prop( "disabled", false);

        let row = $(event.target).closest('tr').find('td');
        $('#txtEditItemCode').val(row.eq(0).text());
        $('#txtEditItemName').val(row.eq(1).text());
        $('#txtEditItemPrice').val(row.eq(2).text());
        $('#txtEditItemQuantity').val(row.eq(3).text());
    }
}

new ItemController();
