"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ThirdPartyAPI_1 = require("../controller/ThirdPartyAPI");
class ThirdPartiAPIRoutes {
    constructor() {
        this.thirdPartyAPI = new ThirdPartyAPI_1.default();
    }
    routes(app) {
        // app.route('/api/user/create').post(this.userCtrl.addUser);
        // app.route('/api/user/login').post(this.userCtrl.login);
        app.route('/api/azure/consetion_clearance_time_pred').post(this.thirdPartyAPI.getAzureResponse_consetion_clearance_time_pred);
        app.route('/api/azure/nearest_car_selection').post(this.thirdPartyAPI.getAzureResponse_nearest_car_selection);
        app.route('/api/azure/nearest_hospital_selection').post(this.thirdPartyAPI.getAzureResponse_nearest_hospital_selection);
        app.route('/api/azure/getSignalControll_python').post(this.thirdPartyAPI.getSignalControll_python);
    }
}
exports.ThirdPartiAPIRoutes = ThirdPartiAPIRoutes;
//# sourceMappingURL=ThirdPartiAPIRoutes.js.map