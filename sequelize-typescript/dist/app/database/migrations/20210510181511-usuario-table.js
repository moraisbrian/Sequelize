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
const sequelize_1 = require("sequelize");
module.exports = {
    up(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield queryInterface.createTable('Usuario', {
                id: {
                    type: sequelize_1.DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                nome: {
                    type: sequelize_1.DataTypes.STRING(60),
                    allowNull: false
                },
                sobrenome: {
                    type: sequelize_1.DataTypes.STRING(60),
                    allowNull: false
                },
                email: {
                    type: sequelize_1.DataTypes.STRING(60),
                    allowNull: false
                },
                createdAt: sequelize_1.DataTypes.DATE,
                updatedAt: sequelize_1.DataTypes.DATE
            });
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield queryInterface.dropTable('Usuario');
        });
    }
};
