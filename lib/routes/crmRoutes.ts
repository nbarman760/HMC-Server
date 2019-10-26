import ContactController from "../controller/contact/contactController";

export class Routes {
    public contactCtrl: ContactController = new ContactController();
    public routes(app): void {
        app.route('/welcome')
            .get((req, res) => {
                res.status(200).send({
                    message: 'Welcome Subhadeep!!!!'
                })
            });
        app.route('/contacts').get(this.contactCtrl.getContacts);
        app.route('/contact/create').post(this.contactCtrl.addContact);
        app.route('/contact/:id/details').get(this.contactCtrl.getContactWithID);
        app.route('/contact/destroy').post(this.contactCtrl.deleteContact);
        app.route('/contact/update').post(this.contactCtrl.updateContact);
    }
}