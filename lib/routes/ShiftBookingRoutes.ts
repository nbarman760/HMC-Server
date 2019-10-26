import ShiftBookingController from "../controller/shift-booking/ShiftBookingController";
export class ShiftBookingRoutes{
    public bookCtrl: ShiftBookingController = new ShiftBookingController();
    public routes(app): void {
        app.route('/api/shift/bookshift').post(this.bookCtrl.bookshift);
        app.route('/api/shift/getBookingList').get(this.bookCtrl.getBookingList);
        app.route('/api/shift/getBooking').get(this.bookCtrl.getBooking);
    }
}
