"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contactController_1 = require("../controller/contact/contactController");
class Routes {
    constructor() {
        this.contactCtrl = new contactController_1.default();
    }
    routes(app) {
        app.route('/welcome')
            .get((req, res) => {
            res.status(200).send({
                message: 'Welcome Subhadeep!!!!'
            });
        });
        app.route('/contacts').get(this.contactCtrl.getContacts);
        app.route('/contact/create').post(this.contactCtrl.addContact);
        app.route('/contact/:id/details').get(this.contactCtrl.getContactWithID);
        app.route('/contact/destroy').post(this.contactCtrl.deleteContact);
        app.route('/contact/update').post(this.contactCtrl.updateContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map