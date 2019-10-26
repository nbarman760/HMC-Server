import * as express from "express";
import * as bodyParser from "body-parser";
import * as dateFormat from "dateformat";
import { Routes } from "./routes/crmRoutes";
import {Routes1} from "./routes/crm1Routes";
import {Sequelize} from "sequelize";
import {UserRoutes} from "./routes/UserRoutes";
import {ShiftBookingRoutes} from "./routes/ShiftBookingRoutes";
import {DriverRoutes} from "./routes/DriverRoutes";

import * as cors from 'cors';
import {ExpenseRoutes} from "./routes/ExpenseRoutes";
import {ThirdPartiAPIRoutes} from "./routes/ThirdPartiAPIRoutes";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public routePrv1: Routes1=new Routes1();
    public userRt: UserRoutes = new UserRoutes();
    public shiftRt: ShiftBookingRoutes = new ShiftBookingRoutes()
    public expenseRt: ExpenseRoutes = new ExpenseRoutes();
    public driverRt: DriverRoutes = new DriverRoutes();
    public thirdPartiAPIRt: ThirdPartiAPIRoutes = new ThirdPartiAPIRoutes();


    constructor() {
        this.app = express();
        this.config();
        this.connectDb();
       // this.routePrv.routes(this.app);
        //this.routePrv1.routes(this.app);
        this.userRt.routes(this.app);
        this.shiftRt.routes(this.app);
        this.expenseRt.routes(this.app);
        this.driverRt.routes(this.app);
        this.thirdPartiAPIRt.routes(this.app);
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    public connectDb(){
        const sequelize = new Sequelize('webform', 'root', 'N#123456', {
            host: 'localhost',
            dialect: 'mysql'
        });
        // const sequelize = new Sequelize('packerweb', 'root', 'hadoopadmin', {
        //     host: '157.230.176.181',
        //     dialect: 'mysql',
        //     timezone: '+05:30'
        // });
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
}

export default new App().app;
