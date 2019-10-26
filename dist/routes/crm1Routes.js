"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import ContactController from "../controller/contact/contactController";
const homeController_1 = require("../controller/home/homeController");
class Routes1 {
    constructor() {
        this.homeCtrl = new homeController_1.default();
    }
    routes(app) {
        app.route('/home')
            .get((req, res) => {
            res.status(200).send({
                message: 'Welcome to home page controller!!!!'
            });
        });
        app.route('/home/create').post(this.homeCtrl.addHome);
        app.route('/home/getall').get(this.homeCtrl.getHomes);
    }
}
exports.Routes1 = Routes1;
//# sourceMappingURL=crm1Routes.js.map