import Expense from "../../models/Expense";

export default class ExpenseController {
    constructor() {
    }

    /**
     *
     * @param req
     * @param res
     */
     addExpense(req, res){
        let params = req.body;
        try{
            Expense.create(params).then((expense)=>{
                res.status(200).send({
                    'status': 'success',
                    'data': expense
                })
            }, (err)=>{
                res.status(200).send({
                    'status': 'error',
                    'msg': 'Invalid parameters',
                    'error': err
                })
            })
        }catch (e) {
            res.status(500).send({
                status: 'error',
                error: e,
                msg: 'server went wrong'
            })
        }
     }

    /**
     *
     * @param req
     * @param res
     */
    getList(req, res){
        try{
            Expense.findAll().then((expenses)=>{
                  res.status(200).send({
                      'status': 'success',
                      'data': expenses
                  })
            }, (err)=>{
                res.status(200).send({
                    status: 'error',
                    error: err,
                    msg: 'Invalid Operation'
                });
            })
        }catch (e) {
            res.status(500).send({
                'status': 'error',
                'msg': 'server went wrong',
                'error': e
            })
        }
    }
}