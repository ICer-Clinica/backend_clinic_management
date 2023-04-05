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
exports.ListOneAddressService = void 0;
const typeorm_1 = require("typeorm");
const AddressEntitie_1 = require("../../entities/AddressEntitie");
class ListOneAddressService {
    execute({ param, street, number }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(AddressEntitie_1.Address);
            try {
                const address = yield repo.findOne({ where: { id: param } });
                if (!address) {
                    return new Error('Address does not exists!');
                }
                return address;
            }
            catch (error) {
                return new Error(error);
            }
        });
    }
}
exports.ListOneAddressService = ListOneAddressService;
//# sourceMappingURL=ListOneAddress.js.map