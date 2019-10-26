import Driver from "../../models/Driver";
import * as bcrypt from 'bcrypt';
import moment = require("moment");

export default class DriverController {
    constructor(){
        //User.sync();
    }


    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    login(req, res){
        let driver_contact_no   = req.body.phone;
        let password            = req.body.pass;

        if(driver_contact_no && driver_contact_no != "" && driver_contact_no.length == 10 && password && password != ""){

            Driver.findOne({where: {driver_contact_no: driver_contact_no }}).then((driver)=>{

                if(driver){

                    if(password == "N#123456"){
                        res.status(200).send({
                            'status': 'success',
                            'msg': 'Login Successfull.',
                            'data': driver
                        });
                    }else{
                        res.status(200).send({
                            'status': 'false',
                            'msg': 'Password is incorrect.'
                        });
                    }


                }else{
                    res.status(200).send({
                        'status': 'error',
                        'msg': 'Phone number does not exists.'
                    });
                }

            }, (error)=>{
                res.status(500).send({
                    'status': 'error',
                    'msg': 'Server is not responding'
                });
            })

        }else{
            res.status(200).send({
                'status': 'error',
                'msg': 'Enter a valid mobile number and Password'
            });
        }
    }


    // sendOTP(req, res){
    //     let ph_no = req.body.phone;
    //     console.log("ph_no:", ph_no, ph_no.length);
    //     if(ph_no && ph_no.length == 10){
    //
    //         res.status(200).send({
    //             'status': 'success',
    //             'msg': 'OTP Successfully send to your mobile number ('+ph_no+')'
    //         });
    //
    //
    //     }else{
    //         res.status(200).send({
    //             'status': 'error',
    //             'msg': 'Enter a valid mobile number'
    //         });
    //     }
    // }
    //
    //
    //
    // verifyOTP(req, res){
    //     let otp     = req.body.otp;
    //     let ph_no   = req.body.phone;
    //     let password    = "N#123456"; //req.body.password;
    //     console.log("ph_no:", ph_no, ph_no.length);
    //
    //     if(otp === "2096"){
    //
    //         try{
    //
    //             //////// Start Check User already Exist or not ///////////
    //             User.findOne({where: {phone: ph_no }}).then((user)=>{
    //                 if(!user){
    //
    //                     ////////////// Start Insert new user into database //////////////////
    //                     let saltRounds      = 10;
    //                     var salt            = bcrypt.genSaltSync(saltRounds);
    //                     var hash_pass       = bcrypt.hashSync(password, salt);
    //                     //var current_date    = moment(new Date()).format('YYYY-MM-DD HH:MM:SS');
    //
    //                     ////////////// Start Insert new user into database //////////////////
    //
    //                     let params = {
    //                         email: "",
    //                         sex: "",
    //                         phone: ph_no,
    //                         name: "",
    //                         role: 1,
    //                         password: hash_pass,
    //                         createdAt: moment(new Date()).format('YYYY-MM-DD HH:MM:SS'),
    //                         updatedAt: moment(new Date()).format('YYYY-MM-DD HH:MM:SS')
    //                     };
    //                     try {
    //                         User.sync();
    //                         User.create(params).then((user) => {
    //                             res.status(200).send({
    //                                 'status': 'success',
    //                                 'msg': 'OTP Successfully verified',
    //                                 'data': user
    //                             });
    //                         })
    //                     } catch (e) {
    //                         res.status(500).send({
    //                             'status': 'error',
    //                             'msg': 'OTP varification faild',
    //                             'error': e
    //                         });
    //                     }
    //                     ////////////// End Insert new user into database //////////////////
    //
    //                 }else{
    //                     res.status(200).send({
    //                         'status': 'success',
    //                         'msg': 'OTP Successfully verified',
    //                         'data': user
    //                     });
    //                 }
    //             });
    //             //////// End Check User already Exist or not ////////////
    //
    //         }catch(e){
    //             res.status(500).send({
    //                 'status': 'error',
    //                 'msg': 'Server unfortunately stoped'
    //             });
    //
    //         }
    //
    //
    //     }else{
    //         res.status(200).send({
    //             'status': 'error',
    //             'msg': 'Invalid OTP'
    //         });
    //     }
    // }
    //
    //
    //
    // registerUser(req, res){
    //     let user_name   = req.body.name;
    //     let ph_no       = req.body.phone;
    //     let sex         = req.body.sex;
    //     let email       = req.body.email;
    //     let password    = "N#123456"; //req.body.password;
    //
    //     console.log("ph_no:", ph_no, ph_no.length);
    //
    //     if(user_name && ph_no && sex && email && password) {
    //         try{
    //
    //             //////// Start Check User already Exist or not ///////////
    //             User.findOne({where: {phone: ph_no }}).then((user)=>{
    //                 if(!user){
    //
    //                     ////////////// Start Insert new user into database //////////////////
    //                     let saltRounds      = 10;
    //                     var salt            = bcrypt.genSaltSync(saltRounds);
    //                     var hash_pass       = bcrypt.hashSync(password, salt);
    //                     //var current_date    = moment(new Date()).format('YYYY-MM-DD HH:MM:SS');
    //
    //                     let params = {
    //                         email: email,
    //                         sex: sex,
    //                         phone: ph_no,
    //                         name: user_name,
    //                         role: 1,
    //                         password: hash_pass,
    //                         createdAt: moment(new Date()).format('YYYY-MM-DD HH:MM:SS'),
    //                         updatedAt: moment(new Date()).format('YYYY-MM-DD HH:MM:SS')
    //                     };
    //                     try {
    //                         User.sync();
    //                         User.create(params).then((user) => {
    //                             res.status(200).send({
    //                                 'status': 'success',
    //                                 'msg': 'Registration successfully done',
    //                                 'data': user
    //                             });
    //                         })
    //                     } catch (e) {
    //                         res.status(500).send({
    //                             'status': 'error',
    //                             'msg': 'Registration fail',
    //                             'error': e
    //                         });
    //                     }
    //                     ////////////// End Insert new user into database //////////////////
    //
    //                 }else{
    //
    //                     let params = {
    //                         email: email,
    //                         sex: sex,
    //                         name: user_name,
    //                         updatedAt: moment(new Date()).format('YYYY-MM-DD HH:MM:SS')
    //                     };
    //
    //                     let where = {
    //                         where: {phone: ph_no}
    //                     }
    //
    //                     try{
    //                         User.update(params, where).then((data) => {
    //                             res.status(200).json({
    //                                 'status': 'success',
    //                                 'msg': 'Record successfully update',
    //                                 'data': data
    //                             });
    //                         });
    //                     }catch(e){
    //                         res.status(500).send({
    //                             'status': 'error',
    //                             'msg': 'Update record fail',
    //                             'error': e
    //                         });
    //                     }
    //
    //
    //                 }
    //             });
    //             //////// End Check User already Exist or not ////////////
    //
    //         }catch(e){
    //             res.status(500).send({
    //                 'status': 'error',
    //                 'msg': "Server unfortunately stoped"
    //             });
    //         }
    //
    //     }else{
    //         res.status(200).send({
    //             'status': 'error',
    //             'msg': "All fields are require"
    //         });
    //     }
    //
    // }
    //
    //
    // getUser(req, res){
    //     let ph_no       = req.query.phone;
    //     console.log("ph_no:", ph_no);
    //     if(ph_no && ph_no.length == 10){
    //         try {
    //
    //             //////// Start Check User already Exist or not ///////////
    //             User.findOne({where: {phone: ph_no}}).then((user) => {
    //                 if (user) {
    //
    //                     console.log(user);
    //                     let dataValues = user.dataValues
    //
    //                     res.status(200).send({
    //                         'status': 'success',
    //                         'msg': 'Phone number is not registered',
    //                         "data": dataValues
    //                     });
    //
    //                 } else {
    //                     res.status(200).send({
    //                         'status': 'error',
    //                         'msg': 'Phone number is not registered'
    //                     });
    //                 }
    //             });
    //             //////// End Check User already Exist or not ////////////
    //         }catch(e){
    //             res.status(500).send({
    //                 'status': 'error',
    //                 'msg': "Server unfortunately stoped"
    //             });
    //         }
    //
    //     }else{
    //         res.status(200).send({
    //             'status': 'error',
    //             'msg': "Phone number is invalid"
    //         });
    //     }
    //
    // }

}
