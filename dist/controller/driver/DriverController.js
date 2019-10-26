"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Driver_1 = require("../../models/Driver");
class DriverController {
    constructor() {
        //User.sync();
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    login(req, res) {
        let driver_contact_no = req.body.phone;
        let password = req.body.pass;
        if (driver_contact_no && driver_contact_no != "" && driver_contact_no.length == 10 && password && password != "") {
            Driver_1.default.findOne({ where: { driver_contact_no: driver_contact_no } }).then((driver) => {
                if (driver) {
                    if (password == "N#123456") {
                        res.status(200).send({
                            'status': 'success',
                            'msg': 'Login Successfull.',
                            'data': driver
                        });
                    }
                    else {
                        res.status(200).send({
                            'status': 'false',
                            'msg': 'Password is incorrect.'
                        });
                    }
                }
                else {
                    res.status(200).send({
                        'status': 'error',
                        'msg': 'Phone number does not exists.'
                    });
                }
            }, (error) => {
                res.status(500).send({
                    'status': 'error',
                    'msg': 'Server is not responding'
                });
            });
        }
        else {
            res.status(200).send({
                'status': 'error',
                'msg': 'Enter a valid mobile number and Password'
            });
        }
    }
}
exports.default = DriverController;
//# sourceMappingURL=DriverController.js.map