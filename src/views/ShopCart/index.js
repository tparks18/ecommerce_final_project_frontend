import React, { Component } from 'react'

export default class ShopCart extends Component {
    render() {
        return (
            <div>
                <h3>Cart</h3>
                
                <div className=" table-responsive">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <form>
                                        <input type="hidden" name="product_id" value="" />
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <input type="number" min="0" max="99" className="form-control" name="quantity" value="" />
                                            </div>
                                            <div className="col-md-3">
                                                <input type="submit" className="btn btn-info" value="Update" />
                                            </div>
                                        </div>
                                    </form>
                                </td>
                                <td>
                                    <a href="/" className="btn btn-danger">
                                        Delete
                                    <span>
                                            <i className="fa fa-trash"></i>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td>
                                    <strong className="float-right">Subtotal</strong>
                                </td>
                                <td>
                                    <strong>$0.00</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td>
                                    <strong className="float-right">Tax</strong>
                                </td>
                                <td>
                                    <strong>$0.00</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td>
                                    <strong className="float-right">Grand Total</strong>
                                </td>
                                <td>
                                    <strong>$0.00</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4"></td>
                                <td>
                                    <a href="/" className="btn btn-success">Checkout</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}