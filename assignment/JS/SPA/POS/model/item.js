export class Item {
    constructor(item_code, item_name, item_price, item_qty_on_stock) {
        this._item_code = item_code;
        this._item_name = item_name;
        this._item_price = item_price;
        this._item_qty_on_stock = item_qty_on_stock;
    }

    set item_code(item_code) {
        this._item_code = item_code;
    }

    get item_code() {
        return this._item_code;
    }

    set item_name(item_name) {
        this._item_name = item_name;
    }

    get item_name() {
        return this._item_name;
    }

    set item_price(item_price) {
        this._item_price = item_price;
    }

    get item_price() {
        return this._item_price;
    }

    set item_qty_on_stock(item_quantity) {
        this._item_qty_on_stock = item_quantity;
    }

    get item_qty_on_stock() {
        return this._item_qty_on_stock;
    }
}