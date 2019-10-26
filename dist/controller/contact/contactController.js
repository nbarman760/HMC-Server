"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../models/Contact");
class ContactController {
    constructor() {
    }
    addContact(req, res) {
        let params = req.body;
        Contact_1.default.create(params).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
    }
    getContacts(req, res) {
        Contact_1.default.findAll().then((contacts) => {
            res.status(200).send(contacts);
        });
    }
    getContactWithID(req, res) {
        Contact_1.default.findOne({ where: { 'ID': req.params.id } }).then((contacts) => {
            res.status(200).send(contacts);
        });
    }
    deleteContact(req, res) {
        let ID = req.body.ID;
        Contact_1.default.destroy({ where: { ID: ID } }).then((data) => {
            res.status(200).json(data);
        });
    }
    updateContact(req, res) {
        let ID = req.body.ID;
        console.log("IDsss:", ID);
        let email = req.body.email;
        let name = req.body.name;
        let msg = req.body.msg;
        console.log("Emailssss:", email);
        Contact_1.default.update({ email: email,
            name: name,
            msg: msg }, {
            where: { ID: ID }
        }).then((data) => {
            res.status(200).json(data);
        });
    }
}
exports.default = ContactController;
//# sourceMappingURL=contactController.js.map