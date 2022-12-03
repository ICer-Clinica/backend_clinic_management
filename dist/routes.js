"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var AddressController_1 = require("./controllers/AddressController");
var SuperadminController_1 = require("./controllers/SuperadminController");
var ClinicController_1 = require("./controllers/ClinicController");
var AuthController_1 = require("./controllers/AuthController");
var AuthMiddleware_1 = __importDefault(require("./middlewares/AuthMiddleware"));
var ClinicAdministratorsController_1 = require("./controllers/ClinicAdministratorsController");
var HealthSecretaryController_1 = require("./controllers/HealthSecretaryController");
var TherapistsController_1 = require("./controllers/TherapistsController");
var ProcedureController_1 = require("./controllers/ProcedureController");
var PatientsController_1 = require("./controllers/PatientsController");
var CoordinatorsController_1 = require("./controllers/CoordinatorsController");
var AdministrativeSecretaryController_1 = require("./controllers/AdministrativeSecretaryController");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/', function (req, res) {
    res.json({
        API: 'running',
        message: 'Developed by Geovane and Guilherme, 2022.',
    });
});
//authentication route
routes.post('/auth', new AuthController_1.AuthController().authenticate);
// superadmin routes
routes.post('/superadmin', new SuperadminController_1.SuperadminController().create);
routes.use(AuthMiddleware_1.default);
routes.get('/superadmin', new SuperadminController_1.SuperadminController().listAll);
routes.get('/superadmin/:query', new SuperadminController_1.SuperadminController().listOne);
routes.delete('/superadmin/:query', new SuperadminController_1.SuperadminController().delete);
// address routes
routes.post('/address', new AddressController_1.AddressController().create);
routes.get('/address', new AddressController_1.AddressController().listAll);
routes.get('/address/:param', new AddressController_1.AddressController().listOne);
routes.delete('address/:query', new AddressController_1.AddressController().delete);
// clinics routes
routes.post('/clinic', new ClinicController_1.ClinicController().create);
routes.get('/clinic', new ClinicController_1.ClinicController().listAll);
routes.get('/clinic/:param', new ClinicController_1.ClinicController().listOne);
routes.delete('/clinic/:query', new ClinicController_1.ClinicController().delete);
routes.put('/clinic/:clinic_id', new ClinicController_1.ClinicController().update);
routes.get('/clinic/adm/:clinic_id', new ClinicController_1.ClinicController().listClinicAdmService);
// clinic administrators routes
routes.post('/clinic-adm', new ClinicAdministratorsController_1.ClinicAdministratorsController().create);
routes.get('/clinic-adm', new ClinicAdministratorsController_1.ClinicAdministratorsController().listAll);
routes.get('/clinic-adm/:param', new ClinicAdministratorsController_1.ClinicAdministratorsController().listOne);
routes.get('/clinic-adm/clinic/:clinic_id', new ClinicAdministratorsController_1.ClinicAdministratorsController().listAllByClinicID);
routes.delete('/clinic-adm/:clinicAdm_id', new ClinicAdministratorsController_1.ClinicAdministratorsController().delete);
// health secretaries routes
routes.post('/health-secretaries', new HealthSecretaryController_1.HealthSecretaryController().create);
routes.get('/health-secretaries', new HealthSecretaryController_1.HealthSecretaryController().listAll);
routes.delete('/health-secretaries/:query', new HealthSecretaryController_1.HealthSecretaryController().delete);
// therapists routes
routes.post('/therapist', new TherapistsController_1.TherapistsController().create);
routes.get('/therapist/:clinic_id', new TherapistsController_1.TherapistsController().listAll);
routes.delete('/therapist/:therapist_id', new TherapistsController_1.TherapistsController().delete);
routes.put('/therapist/:therapist_id', new TherapistsController_1.TherapistsController().update);
//procedures routes
routes.post('/procedure', new ProcedureController_1.ProcedureController().create);
routes.get('/procedure/:clinic_id', new ProcedureController_1.ProcedureController().listAll);
routes.delete('/procedure/:procedure_id', new ProcedureController_1.ProcedureController().delete);
//patients routes
routes.post('/patients', new PatientsController_1.PatientsController().create);
routes.get('/patients/:clinic_id', new PatientsController_1.PatientsController().listAll);
routes.delete('/patients/:patient_id', new PatientsController_1.PatientsController().delete);
//coordinators routes
routes.post('/coordinators', new CoordinatorsController_1.CoordinatorController().create);
routes.get('/coordinators/:clinic_id', new CoordinatorsController_1.CoordinatorController().listAll);
routes.delete('/coordinators/:coordinator_id', new CoordinatorsController_1.CoordinatorController().delete);
// administrative secretary routes
routes.post('/adm-secretary', new AdministrativeSecretaryController_1.AdministrativeSecretaryController().create);
routes.get('/adm-secretary/:clinic_id', new AdministrativeSecretaryController_1.AdministrativeSecretaryController().listAll);
routes.delete('/adm-secretary/:admSecretary_id', new AdministrativeSecretaryController_1.AdministrativeSecretaryController().delete);
//# sourceMappingURL=routes.js.map