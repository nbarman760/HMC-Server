import DriverController from "../controller/driver/DriverController";
import AmbulanceController from "../controller/ambulance/AmbulanceController";
export class DriverRoutes {

    public driverCtrl: DriverController = new DriverController();
    public ambulanceCtrl: AmbulanceController = new AmbulanceController();

    public routes(app): void {

        app.route('/api/driver/login').post(this.driverCtrl.login);
        // app.route('/api/user/verifyOTP').post(this.userCtrl.verifyOTP);
        // app.route('/api/user/registerUser').post(this.userCtrl.registerUser);
        // app.route('/api/user/getUser').get(this.userCtrl.getUser);


        app.route('/api/ambulance/login').post(this.ambulanceCtrl.loginAmbulance);
    }
}
