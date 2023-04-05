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
exports.AddressController = void 0;
const CreateAddressService_1 = require("../../services/AddressServices/CreateAddressService");
const DeleteAddressService_1 = require("../../services/AddressServices/DeleteAddressService");
const ListAllAdresses_1 = require("../../services/AddressServices/ListAllAdresses");
const ListOneAddress_1 = require("../../services/AddressServices/ListOneAddress");
const UpdateAddressService_1 = require("../../services/AddressServices/UpdateAddressService");
const utils_1 = require("../../utils");
class AddressController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { street, number, district, zip, city, state } = req.body;
            if (!(0, utils_1.verifySuperadminPermissions)(req)) {
                return res.status(401).json('User not authorized!');
            }
            const service = new CreateAddressService_1.CreateAddressService();
            const result = yield service.execute({
                street,
                number,
                district,
                zip,
                city,
                state
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { param } = req.params;
            const { street, number } = req.body;
            const service = new ListOneAddress_1.ListOneAddressService();
            const result = yield service.execute({
                param,
                street,
                number,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new ListAllAdresses_1.ListAllAdressesService();
            const result = yield service.execute();
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query } = req.params;
            const service = new DeleteAddressService_1.DeleteAddressService();
            const result = yield service.execute({ query });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { street, number, district, zip, city, state } = req.body;
            const { address_id } = req.params;
            const service = new UpdateAddressService_1.UpdateAddressService();
            const result = yield service.execute({
                address_id,
                street,
                number,
                district,
                zip,
                city,
                state
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
}
exports.AddressController = AddressController;
//# sourceMappingURL=index.js.map