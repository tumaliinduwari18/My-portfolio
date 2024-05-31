export class OrderDetails{
    constructor(order_id, item_code, item_price, item_quantity) {
        this._order_id = order_id;
        this._item_code = item_code;
        this._item_price = item_price;
        this._item_quantity = item_quantity;
    }

    set order_id(order_id) {
        this._order_id = order_id;
    }

    get order_id() {
        return this._order_id;
    }

    set item_code(item_code) {
        this._item_code = item_code;
    }

    get item_code() {
        return this._item_code;
    }

    set item_price(item_price) {
        this._item_price = item_price;
    }

    get item_price() {
        return this._item_price;
    }

    set item_quantity(item_quantity) {
        this._item_quantity = item_quantity;
    }

    get item_quantity() {
        return this._item_quantity;
    }
}