"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShiftBookingController_1 = require("../controller/shift-booking/ShiftBookingController");
class ShiftBookingRoutes {
    constructor() {
        this.bookCtrl = new ShiftBookingController_1.default();
    }
    routes(app) {
        app.route('/api/shift/bookshift').post(this.bookCtrl.bookshift);
        app.route('/api/shift/getBookingList').get(this.bookCtrl.getBookingList);
        app.route('/api/shift/getBooking').get(this.bookCtrl.getBooking);
    }
}
exports.ShiftBookingRoutes = ShiftBookingRoutes;
//# sourceMappingURL=ShiftBookingRoutes.js.map