import ThirdPartyAPI from "../controller/ThirdPartyAPI";
export class ThirdPartiAPIRoutes {
    public thirdPartyAPI: ThirdPartyAPI = new ThirdPartyAPI();
    public routes(app): void {
        // app.route('/api/user/create').post(this.userCtrl.addUser);
        // app.route('/api/user/login').post(this.userCtrl.login);

        app.route('/api/azure/consetion_clearance_time_pred').post(this.thirdPartyAPI.getAzureResponse_consetion_clearance_time_pred);
        app.route('/api/azure/nearest_car_selection').post(this.thirdPartyAPI.getAzureResponse_nearest_car_selection);
        app.route('/api/azure/nearest_hospital_selection').post(this.thirdPartyAPI.getAzureResponse_nearest_hospital_selection);

        app.route('/api/azure/getSignalControll_python').post(this.thirdPartyAPI.getSignalControll_python);
    }
}
