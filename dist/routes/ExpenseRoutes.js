"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExpenseController_1 = require("../controller/expense/ExpenseController");
class ExpenseRoutes {
    constructor() {
        this.expenseCtrl = new ExpenseController_1.default();
    }
    routes(app) {
        app.route('/api/expense/create').post(this.expenseCtrl.addExpense);
        app.route('/api/expense/list').get(this.expenseCtrl.getList);
    }
}
exports.ExpenseRoutes = ExpenseRoutes;
//# sourceMappingURL=ExpenseRoutes.js.map