export class Order{
    constructor(order_id, order_date, customer_id) {
        this._order_id = order_id;
        this._order_date = order_date;
        this._customer_id = customer_id;
    }
    set order_id(order_id) {
        this._order_id = order_id;
    }
    get order_id() {
        return this._order_id;
    }
    set order_date(order_date) {
        this._order_date = order_date;
    }
    get order_date() {
        return this._order_date;
    }
    set customer_id(customer_id) {
        this._customer_id = customer_id;
    }
    get customer_id() {
        return this._customer_id;
    }
}