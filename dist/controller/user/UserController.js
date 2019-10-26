"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../models/User");
const Ambulance_1 = require("../../models/Ambulance");
const AssignAmbulance_1 = require("../../models/AssignAmbulance");
const bcrypt = require("bcrypt");
const http = require("https");
class UserController {
    //public thirdpartyAPI: ThirdPartyAPI = new ThirdPartyAPI();
    //public io:any = io(http);
    constructor() {
        this.verifyOTP = (req, res) => {
            // this.io.on(‘connection’, () =>{
            //     console.log(‘a user is connected’)
            // })
            //this.io.emit('message', req.body);
            let otp = req.body.otp;
            let ph_no = req.body.phone;
            let password = "N#123456"; //req.body.password;
            console.log("ph_no:", ph_no, ph_no.length);
            if (otp === "2096") {
                try {
                    //////// Start Check User already Exist or not ///////////
                    User_1.default.findOne({ where: { phone: ph_no } }).then((user) => {
                        if (!user) {
                            ////////////// Start Insert new user into database //////////////////
                            let saltRounds = 10;
                            var salt = bcrypt.genSaltSync(saltRounds);
                            var hash_pass = bcrypt.hashSync(password, salt);
                            //var current_date    = moment(new Date()).format('YYYY-MM-DD HH:MM:SS');
                            ////////////// Start Insert new user into database //////////////////
                            let params = {
                                email: "",
                                sex: "",
                                phone: ph_no,
                                name: "",
                                role: 1,
                                password: hash_pass
                            };
                            try {
                                User_1.default.sync();
                                User_1.default.create(params).then((user) => {
                                    res.status(200).send({
                                        'status': 'success',
                                        'msg': 'OTP Successfully verified',
                                        'data': user
                                    });
                                });
                            }
                            catch (e) {
                                res.status(500).send({
                                    'status': 'error',
                                    'msg': 'OTP varification faild',
                                    'error': e
                                });
                            }
                            ////////////// End Insert new user into database //////////////////
                        }
                        else {
                            res.status(200).send({
                                'status': 'success',
                                'msg': 'OTP Successfully verified',
                                'data': user
                            });
                        }
                    });
                    //////// End Check User already Exist or not ////////////
                }
                catch (e) {
                    res.status(500).send({
                        'status': 'error',
                        'msg': 'Server unfortunately stoped'
                    });
                }
            }
            else {
                res.status(200).send({
                    'status': 'error',
                    'msg': 'Invalid OTP'
                });
            }
        };
        this.get_nearest_ambulance = (params) => {
            let userid = params.userid;
            let patient_lat = params.points.latitude;
            let patient_lon = params.points.longitude;
            let diseases = params.diseases;
            var reqst_body = JSON.stringify({
                "Inputs": {
                    "input1": [
                        {
                            'Patient_lat': patient_lat,
                            'Patient_long': patient_lon,
                            'amb_1_lat': "1",
                            'amb_1_long': "1",
                            'amb1Blood_bank': "",
                            'amb_1_Oxygen_cylinder': "",
                            'amb_1_First_Aid_Kit': "",
                            'amb_2_lat': "1",
                            'amb_2_long': "1",
                            'amb_2_Blood_bank': "",
                            'amb_2_Oxygen_cylinder': "",
                            'amb_2_First_Aid_Kit': "",
                            'amb_3_lat': "1",
                            'amb_3_long': "1",
                            'amb_3_Blood_bank': "",
                            'amb_3_Oxygen_cylinder': "",
                            'amb_3_First_Aid_Kit': "",
                            'amb_4_lat': "1",
                            'amb_4_long': "1",
                            'amb_4_Blood_bank': "",
                            'amb_4_Oxygen_cylinder': "",
                            'amb_4_First_Aid_Kit': "",
                            'amb_5_lat': "1",
                            'amb_5_long': "1",
                            'amb_5_Blood_bank': "",
                            'amb_5_Oxygen_cylinder': "",
                            'amb_5_First_Aid_Kit': "",
                        }
                    ],
                },
                "GlobalParameters": {}
            });
            var options = {
                "method": "POST",
                "hostname": "ussouthcentral.services.azureml.net",
                "path": "/workspaces/14a8ecdaabe341f3bfe05fea08521732/services/d3b5de9914f34d6da3bace468a034942/execute?api-version=2.0&format=swagger",
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer xvXCChsNdG9g5OvWZg+v6AZLygk/ZiXyvuM/CsfRNcjSwdQ2zPnHpDwcU2SyjDzalEEsNaxoNdwflyk5wRPrKg==",
                    "cache-control": "no-cache",
                }
            };
            var req1 = http.request(options, function (res1) {
                var chunks = [];
                res1.on("data", function (chunk) {
                    chunks.push(chunk);
                    // res.status(200).send({
                    //     'status': 'success',
                    //     'msg': 'Get Data',
                    //     "data": chunks
                    // });
                });
                res1.on("end", function () {
                    var body = Buffer.concat(chunks);
                    console.log(body.toString());
                    return JSON.parse(body.toString());
                    // res.status(200).json({
                    //     'status': 'success',
                    //     'msg': 'Get Data end',
                    //     "data": JSON.parse(body.toString())
                    // });
                });
            });
            //req1.write("{\n                \"Inputs\": {\n                    \"input1\":\n                        [\n                            {\n                                'Origin_latitiude': \"22.345\",\n                                'Origin_longtitude': \"87.54\",\n                                'Updated_Start_time': \"20:00:00\",\n                                'Congestion_volume': \"45\",\n                            }\n                        ],\n                },\n                \"GlobalParameters\":  {\n                }\n            }");
            req1.write(reqst_body);
            req1.end();
        };
        //User.sync();
    }
    //
    // addUser(req, res){
    //     let params = {
    //          email: req.body.email,
    //          phone: req.body.phone,
    //          name: req.body.name,
    //          role: 1,
    //          password: bcrypt.hashSync(req.body.password, 10),
    //          createdAt: moment(new Date()).format('YYYY-MM-DD HH:MM:SS')
    //     };
    //     try {
    //         User.create(params).then((user)=>{
    //             res.status(200).send({'status': 'success', 'data' : user});
    //         })
    //     }catch (e) {
    //         res.status(500).send({status: 'error', error: e});
    //     }
    // }
    //
    // login(req, res){
    //     let email = req.body.email;
    //     let password = req.body.password;
    //     User.findOne({where: {email: req.body.email }}).then((user)=>{
    //             if(user){
    //                 let userPassword = user.password;
    //                 var compare = bcrypt.compareSync(req.body.password, user.password);
    //                 if(compare){
    //                     res.status(200).send({
    //                         'status': 'success',
    //                         'msg': 'Login successful',
    //                         'data': user
    //                     });
    //                 }else{
    //                     res.status(200).send({
    //                         'status': 'error',
    //                         'msg': 'Invalid password'
    //                     });
    //                 }
    //
    //             }else{
    //                 res.status(200).send({
    //                    'status': 'error',
    //                    'msg': 'No account exist'
    //                 });
    //             }
    //     });
    // }
    //
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    sendOTP(req, res) {
        let ph_no = req.body.phone;
        console.log("ph_no:", ph_no, ph_no.length);
        if (ph_no && ph_no.length == 10) {
            res.status(200).send({
                'status': 'success',
                'msg': 'OTP Successfully send to your mobile number (' + ph_no + ')'
            });
            // var country_code = "";
            // var http = require("https");
            //
            // //var otp = this.getRandomInt(4);
            // var max = 4;
            // var otp = 4321;//Math.floor(Math.random() * Math.floor(max));
            //
            // console.log("otp:", otp);
            //
            //
            // var options = {
            //     "method": "POST",
            //     "hostname": "control.msg91.com",
            //     "port": null,
            //     "path": "/api/sendotp.php?country="+country_code+"&email=&template="+otp+"&=%24otp&otp_length=&otp_expiry=&sender=%24senderid&message=Thisisotp&mobile="+ph_no+"&authkey=%24authkey",
            //     "headers": {}
            // };
            //
            // var otp_req = http.request(options, function (res) {
            //     var chunks = [];
            //
            //     res.on("data", function (chunk) {
            //         chunks.push(chunk);
            //     });
            //
            //     res.on("end", function () {
            //         var body = Buffer.concat(chunks);
            //         console.log(body.toString());
            //     });
            // });
            //
            // otp_req.end();
        }
        else {
            res.status(200).send({
                'status': 'error',
                'msg': 'Enter a valid mobile number'
            });
        }
    }
    registerUser(req, res) {
        let user_name = req.body.name;
        let ph_no = req.body.phone;
        let sex = req.body.sex;
        let email = req.body.email;
        let password = "N#123456"; //req.body.password;
        console.log("ph_no:", ph_no, ph_no.length);
        if (user_name && ph_no && sex && email && password) {
            try {
                //////// Start Check User already Exist or not ///////////
                User_1.default.findOne({ where: { phone: ph_no } }).then((user) => {
                    if (!user) {
                        ////////////// Start Insert new user into database //////////////////
                        let saltRounds = 10;
                        var salt = bcrypt.genSaltSync(saltRounds);
                        var hash_pass = bcrypt.hashSync(password, salt);
                        //var current_date    = moment(new Date()).format('YYYY-MM-DD HH:MM:SS');
                        let params = {
                            email: email,
                            sex: sex,
                            phone: ph_no,
                            name: user_name,
                            role: 1,
                            password: hash_pass
                        };
                        try {
                            User_1.default.sync();
                            User_1.default.create(params).then((user) => {
                                res.status(200).send({
                                    'status': 'success',
                                    'msg': 'Registration successfully done',
                                    'data': user
                                });
                            });
                        }
                        catch (e) {
                            res.status(500).send({
                                'status': 'error',
                                'msg': 'Registration fail',
                                'error': e
                            });
                        }
                        ////////////// End Insert new user into database //////////////////
                    }
                    else {
                        let params = {
                            email: email,
                            sex: sex,
                            name: user_name
                        };
                        let where = {
                            where: { phone: ph_no }
                        };
                        try {
                            User_1.default.update(params, where).then((data) => {
                                res.status(200).json({
                                    'status': 'success',
                                    'msg': 'Record successfully update',
                                    'data': data
                                });
                            });
                        }
                        catch (e) {
                            res.status(500).send({
                                'status': 'error',
                                'msg': 'Update record fail',
                                'error': e
                            });
                        }
                    }
                });
                //////// End Check User already Exist or not ////////////
            }
            catch (e) {
                res.status(500).send({
                    'status': 'error',
                    'msg': "Server unfortunately stoped"
                });
            }
        }
        else {
            res.status(200).send({
                'status': 'error',
                'msg': "All fields are require"
            });
        }
    }
    getUser(req, res) {
        let ph_no = req.query.phone;
        console.log("ph_no:", ph_no);
        if (ph_no && ph_no.length == 10) {
            try {
                //////// Start Check User already Exist or not ///////////
                User_1.default.findOne({ where: { phone: ph_no } }).then((user) => {
                    if (user) {
                        console.log(user);
                        let dataValues = user.dataValues;
                        res.status(200).send({
                            'status': 'success',
                            'msg': 'Phone number is not registered',
                            "data": dataValues
                        });
                    }
                    else {
                        res.status(200).send({
                            'status': 'error',
                            'msg': 'Phone number is not registered'
                        });
                    }
                });
                //////// End Check User already Exist or not ////////////
            }
            catch (e) {
                res.status(500).send({
                    'status': 'error',
                    'msg': "Server unfortunately stoped"
                });
            }
        }
        else {
            res.status(200).send({
                'status': 'error',
                'msg': "Phone number is invalid"
            });
        }
    }
    callAmbulance(req, res) {
        let userid = req.body.userid;
        let patient_lat = req.body.points.latitude;
        let patient_lon = req.body.points.longitude;
        let diseases = req.body.diseases;
        console.log("nearest_ambulance find start ");
        //let nearest_ambulance = await this.thirdpartyAPI.get_nearest_ambulance(req.body);
        //let nearest_ambulance = await this.get_nearest_ambulance(req.body);
        //console.log("nearest_ambulance: ", nearest_ambulance)
        console.log("nearest_ambulance find End ");
        var reqst_body = JSON.stringify({
            "Inputs": {
                "input1": [
                    {
                        'Patient_lat': patient_lat,
                        'Patient_long': patient_lon,
                        'amb_1_lat': "1",
                        'amb_1_long': "1",
                        'amb1Blood_bank': "",
                        'amb_1_Oxygen_cylinder': "",
                        'amb_1_First_Aid_Kit': "",
                        'amb_2_lat': "1",
                        'amb_2_long': "1",
                        'amb_2_Blood_bank': "",
                        'amb_2_Oxygen_cylinder': "",
                        'amb_2_First_Aid_Kit': "",
                        'amb_3_lat': "1",
                        'amb_3_long': "1",
                        'amb_3_Blood_bank': "",
                        'amb_3_Oxygen_cylinder': "",
                        'amb_3_First_Aid_Kit': "",
                        'amb_4_lat': "1",
                        'amb_4_long': "1",
                        'amb_4_Blood_bank': "",
                        'amb_4_Oxygen_cylinder': "",
                        'amb_4_First_Aid_Kit': "",
                        'amb_5_lat': "1",
                        'amb_5_long': "1",
                        'amb_5_Blood_bank': "",
                        'amb_5_Oxygen_cylinder': "",
                        'amb_5_First_Aid_Kit': "",
                    }
                ],
            },
            "GlobalParameters": {}
        });
        var options = {
            "method": "POST",
            "hostname": "ussouthcentral.services.azureml.net",
            "path": "/workspaces/14a8ecdaabe341f3bfe05fea08521732/services/d3b5de9914f34d6da3bace468a034942/execute?api-version=2.0&format=swagger",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer xvXCChsNdG9g5OvWZg+v6AZLygk/ZiXyvuM/CsfRNcjSwdQ2zPnHpDwcU2SyjDzalEEsNaxoNdwflyk5wRPrKg==",
                "cache-control": "no-cache",
            }
        };
        var req1 = http.request(options, (res1) => {
            var chunks = [];
            res1.on("data", (chunk) => {
                chunks.push(chunk);
                // res.status(200).send({
                //     'status': 'success',
                //     'msg': 'Get Data',
                //     "data": chunks
                // });
            });
            res1.on("end", () => {
                var body_data = Buffer.concat(chunks);
                console.log(body_data.toString());
                var body = JSON.parse(body_data.toString());
                console.log(body);
                let ambulances_num = body['Results']["output1"][0]["Scored Labels"];
                let ambulance_num_obj = ambulances_num.split(",");
                let ambulance_num1 = ambulance_num_obj[0];
                let ambulance_num2 = ambulance_num_obj[1];
                //
                try {
                    Ambulance_1.default.findOne({ where: { ambulance_number: ambulance_num1, available_status: 1 } }).then((ambulance_data) => {
                        if (ambulance_data) {
                            //AssignAmbulance.sync();
                            //
                            let ambulance_id = ambulance_data.ambulance_id;
                            let params = {
                                vaichal_id: ambulance_id,
                                user_id: userid
                            };
                            AssignAmbulance_1.default.sync();
                            AssignAmbulance_1.default.create(params).then((assign) => {
                                // res.status(200).send({
                                //     'status': 'success',
                                //     'msg': 'Registration successfully done',
                                //     'data': assign
                                // });
                                console.log("assign:", assign);
                                Ambulance_1.default.update({ available_status: 0 }, { where: { ambulance_id: ambulance_id } }).then((data) => {
                                    console.log(data);
                                    // res.status(200).json({
                                    //     'status': 'success',
                                    //     'msg': 'Pickup Done',
                                    //     'data': data
                                    // });
                                });
                            });
                            res.status(200).send({
                                'status': 'success',
                                'msg': 'Found an ambulance',
                                'data': ambulance_data
                            });
                        }
                        else {
                            Ambulance_1.default.findOne({ where: { ambulance_number: ambulance_num2, available_status: 1 } }).then((ambulance_data) => {
                                if (ambulance_data) {
                                    //AssignAmbulance.sync();
                                    //
                                    let ambulance_id = ambulance_data.ambulance_id;
                                    let params = {
                                        vaichal_id: ambulance_id,
                                        user_id: userid
                                    };
                                    AssignAmbulance_1.default.sync();
                                    AssignAmbulance_1.default.create(params).then((assign) => {
                                        // res.status(200).send({
                                        //     'status': 'success',
                                        //     'msg': 'Registration successfully done',
                                        //     'data': assign
                                        // });
                                        console.log("assign:", assign);
                                    });
                                    res.status(200).send({
                                        'status': 'success',
                                        'msg': 'Found an ambulance',
                                        'data': ambulance_data
                                    });
                                }
                                else {
                                    res.status(200).send({
                                        'status': 'error',
                                        'msg': 'No ambulance is available now',
                                    });
                                }
                            });
                            // res.status(200).send({
                            //     'status': 'error',
                            //     'msg': 'No ambulance is available now',
                            //     //'data': user
                            // });
                        }
                    });
                }
                catch (e) {
                    res.status(200).json({
                        'status': 'error',
                        'msg': 'No ambulance is available now',
                        "data": e
                    });
                }
                //return JSON.parse(body.toString());
                // res.status(200).json({
                //     'status': 'success',
                //     'msg': 'Get Data end',
                //     "data": ambulance_num
                // });
            });
        });
        //req1.write("{\n                \"Inputs\": {\n                    \"input1\":\n                        [\n                            {\n                                'Origin_latitiude': \"22.345\",\n                                'Origin_longtitude': \"87.54\",\n                                'Updated_Start_time': \"20:00:00\",\n                                'Congestion_volume': \"45\",\n                            }\n                        ],\n                },\n                \"GlobalParameters\":  {\n                }\n            }");
        req1.write(reqst_body);
        req1.end();
    }
    getAllAmbulanceBooking(req, res) {
        let ambulance_id = req.body.ambulance_id;
        //
        try {
            AssignAmbulance_1.default.findAll({ where: { vaichal_id: ambulance_id }, order: [['assign_id', 'DESC']] }).then((assign_data) => {
                console.log("assign_data:", assign_data);
                if (assign_data) {
                    res.status(200).send({
                        'status': 'success',
                        'msg': 'Booking found',
                        'data': assign_data
                    });
                }
                else {
                    res.status(200).send({
                        'status': 'error',
                        'msg': 'No booking is available now',
                    });
                }
            });
        }
        catch (e) {
            res.status(200).json({
                'status': 'error',
                'msg': 'No booking is available',
                "data": e
            });
        }
    }
    ambulancePickupDropStatus(req, res) {
        let assign_id = req.body.assign_id;
        let status_for = req.body.status_for; // drop/pickup
        let status = req.body.status; // 0/1
        let vaichal_id = req.body.vaichal_id;
        console.log(req.body);
        let params = {};
        let vaichal_available_status = 1;
        switch (status_for) {
            case "drop":
                params = { drop_to_hospital_status: status };
                vaichal_available_status = 1;
                break;
            case "pickup":
                params = { pickup_status: status };
                vaichal_available_status = 0;
                break;
        }
        let where = { where: { assign_id: assign_id } };
        AssignAmbulance_1.default.update(params, where).then((data) => {
            console.log(data);
            Ambulance_1.default.update({ available_status: vaichal_available_status }, { where: { ambulance_id: vaichal_id } }).then((data) => {
                console.log(data);
                // res.status(200).json({
                //     'status': 'success',
                //     'msg': 'Pickup Done',
                //     'data': data
                // });
            });
            res.status(200).json({
                'status': 'success',
                'msg': 'Pickup Done',
                'data': data
            });
        });
        // AssignAmbulance.update(
        //     //{ pickup_status: 1 },
        //     updateObj,
        //     { where: { assign_id: assign_id } }
        // )
        //     .success(result =>
        //         res.status(200).json({
        //             'status': 'success',
        //             'msg': 'Pickup Done',
        //             'data': result
        //         })
        //
        //     )
        //     .error(err =>
        //         res.status(200).json({
        //             'status': 'error',
        //             'msg': 'Pickup fail',
        //             'data': err
        //         })
        //     )
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map