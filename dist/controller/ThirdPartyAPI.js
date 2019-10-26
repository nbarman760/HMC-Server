"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("https");
class ThirdPartyAPI {
    constructor() {
        this.get_nearest_ambulance = (params) => __awaiter(this, void 0, void 0, function* () {
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
            var req1 = yield http.request(options, function (res1) {
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
        });
        //User.sync();
    }
    getAzureResponse_consetion_clearance_time_pred(req, res) {
        var reqst_body = JSON.stringify({
            "Inputs": {
                "input1": [
                    {
                        'Origin_latitiude': "22.345",
                        'Origin_longtitude': "87.54",
                        'Updated_Start_time': "20:00:00",
                        'Congestion_volume': "45",
                    }
                ],
            },
            "GlobalParameters": {}
        });
        var options = {
            "method": "POST",
            "hostname": "ussouthcentral.services.azureml.net",
            "path": "/workspaces/14a8ecdaabe341f3bfe05fea08521732/services/1b18b5b7bacb4b7e9b9cef3f32f2b339/execute?api-version=2.0&format=swagger",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer c3E6GwjFRzxDSbF34I1aaGfoCEWnPVycXstA+Ys3q1HSZx+Zu93DldeX7hWETSQ/LgfTFPq0bA2yyDTJYcr9iw==",
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
                res.status(200).json({
                    'status': 'success',
                    'msg': 'Get Data end',
                    "data": JSON.parse(body.toString())
                });
            });
        });
        //req1.write("{\n                \"Inputs\": {\n                    \"input1\":\n                        [\n                            {\n                                'Origin_latitiude': \"22.345\",\n                                'Origin_longtitude': \"87.54\",\n                                'Updated_Start_time': \"20:00:00\",\n                                'Congestion_volume': \"45\",\n                            }\n                        ],\n                },\n                \"GlobalParameters\":  {\n                }\n            }");
        req1.write(reqst_body);
        req1.end();
    }
    getAzureResponse_nearest_car_selection(req, res) {
        let userid = req.body.userid;
        let patient_lat = req.body.points.latitude;
        let patient_lon = req.body.points.longitude;
        let diseases = req.body.diseases;
        console.log("userid:", userid, "patient_lat:", patient_lat, "patient_lon:", patient_lon, "diseases:", diseases);
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
        // var reqst_body = JSON.stringify({
        //     "Inputs": {
        //         "input1":
        //             [
        //                 {
        //                     'Patient_lat': "1",
        //                     'Patient_long': "1",
        //                     'amb_1_lat': "1",
        //                     'amb_1_long': "1",
        //                     'amb1Blood_bank': "",
        //                     'amb_1_Oxygen_cylinder': "",
        //                     'amb_1_First_Aid_Kit': "",
        //                     'amb_2_lat': "1",
        //                     'amb_2_long': "1",
        //                     'amb_2_Blood_bank': "",
        //                     'amb_2_Oxygen_cylinder': "",
        //                     'amb_2_First_Aid_Kit': "",
        //                     'amb_3_lat': "1",
        //                     'amb_3_long': "1",
        //                     'amb_3_Blood_bank': "",
        //                     'amb_3_Oxygen_cylinder': "",
        //                     'amb_3_First_Aid_Kit': "",
        //                     'amb_4_lat': "1",
        //                     'amb_4_long': "1",
        //                     'amb_4_Blood_bank': "",
        //                     'amb_4_Oxygen_cylinder': "",
        //                     'amb_4_First_Aid_Kit': "",
        //                     'amb_5_lat': "1",
        //                     'amb_5_long': "1",
        //                     'amb_5_Blood_bank': "",
        //                     'amb_5_Oxygen_cylinder': "",
        //                     'amb_5_First_Aid_Kit': "",
        //                 }
        //             ],
        //     },
        //     "GlobalParameters":  {
        //     }
        // });
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
                res.status(200).json({
                    'status': 'success',
                    'msg': 'Get Data end',
                    "data": JSON.parse(body.toString())
                });
            });
        });
        //req1.write("{\n                \"Inputs\": {\n                    \"input1\":\n                        [\n                            {\n                                'Origin_latitiude': \"22.345\",\n                                'Origin_longtitude': \"87.54\",\n                                'Updated_Start_time': \"20:00:00\",\n                                'Congestion_volume': \"45\",\n                            }\n                        ],\n                },\n                \"GlobalParameters\":  {\n                }\n            }");
        req1.write(reqst_body);
        req1.end();
    }
    getAzureResponse_nearest_hospital_selection(req, res) {
        var reqst_body = JSON.stringify({
            "Inputs": {
                "input1": [
                    {
                        'Patient_lat': "1",
                        'Patient_long': "1",
                        'Patient_type': "",
                        'H1_type': "",
                        'H_1_lat': "1",
                        'H_1_long': "1",
                        'H2_type': "",
                        'H_2_lat': "1",
                        'H_2_long': "1",
                        'H3_type': "",
                        'H_3_lat': "1",
                        'H_3_long': "1",
                        'H4_type': "",
                        'H_4_lat': "1",
                        'H_4_long': "1",
                    }
                ],
            },
            "GlobalParameters": {}
        });
        var options = {
            "method": "POST",
            "hostname": "ussouthcentral.services.azureml.net",
            "path": "/workspaces/14a8ecdaabe341f3bfe05fea08521732/services/39b81a59cafa4d388d19b3f28cac350d/execute?api-version=2.0&format=swagger",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer DQnQ1/LNL8+wDhNspYYlF2+O1PaUN2Vl4pWqYa1SfTkpnYyBtgqr6il8XzC58zqahgjjLvEqmO7ayyEVdY7NSQ==",
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
                res.status(200).json({
                    'status': 'success',
                    'msg': 'Get Data end',
                    "data": JSON.parse(body.toString())
                });
            });
        });
        //req1.write("{\n                \"Inputs\": {\n                    \"input1\":\n                        [\n                            {\n                                'Origin_latitiude': \"22.345\",\n                                'Origin_longtitude': \"87.54\",\n                                'Updated_Start_time': \"20:00:00\",\n                                'Congestion_volume': \"45\",\n                            }\n                        ],\n                },\n                \"GlobalParameters\":  {\n                }\n            }");
        req1.write(reqst_body);
        req1.end();
    }
    getSignalControll_python(req, res) {
        let spawn = require("child_process").spawnSync;
        //let process = spawn('python3',['./testing.py',JSON.stringify({"type":req.body.type,"data":req.body.data})]);
        let process = spawn('python', ['./python.py', JSON.stringify({ "type": req.body.type, "data": req.body.data })]);
        //let trafic = spawn('python',['http://10.62.90.31/home/pi/Desktop/traffic/traffic.py',JSON.stringify({"type":req.body.type,"data":req.body.data})]);
        //console.log("trafic:", trafic);
        console.log(process.stderr.toString());
        console.log("stdout:", process.stdout.toString());
        res.status(200).send(process.stdout.toString());
    }
}
exports.default = ThirdPartyAPI;
//# sourceMappingURL=ThirdPartyAPI.js.map