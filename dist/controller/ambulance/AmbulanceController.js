"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ambulance_1 = require("../../models/Ambulance");
class AmbulanceController {
    //public thirdpartyAPI: ThirdPartyAPI = new ThirdPartyAPI();
    constructor() {
        //User.sync();
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    loginAmbulance(req, res) {
        let contact_no = req.body.mobile;
        let password = req.body.password;
        try {
            Ambulance_1.default.findOne({ where: { driver_contact_no: contact_no } }).then((ambulance_data) => {
                if (ambulance_data) {
                    if (password == "N#123456") {
                        res.status(200).send({
                            'status': 'success',
                            'msg': 'login Successfull',
                            'data': ambulance_data
                        });
                    }
                    else {
                        res.status(200).send({
                            'status': 'error',
                            'msg': 'You have entered an invalid password'
                        });
                    }
                }
                else {
                    res.status(200).send({
                        'status': 'error',
                        'msg': 'Mobile not registered',
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.status(200).json({
                'status': 'error',
                'msg': 'Something went wrong',
                "data": e
            });
        }
    }
}
exports.default = AmbulanceController;
//# sourceMappingURL=AmbulanceController.js.map