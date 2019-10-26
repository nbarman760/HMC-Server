// import ContactController from "../controller/contact/contactController";
 import homeController from "../controller/home/homeController";
export class Routes1 {
    public homeCtrl: homeController = new homeController();
    public routes(app): void {
        app.route('/home')
            .get((req, res) => {
                res.status(200).send({
                    message: 'Welcome to home page controller!!!!'
                })
            });
        app.route('/home/create').post(this.homeCtrl.addHome);
        app.route('/home/getall').get(this.homeCtrl.getHomes);


    }
}