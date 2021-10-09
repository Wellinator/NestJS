"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'pguser',
    password: 'pgpassword',
    database: 'nestjs',
    entities: ["dist/**/*.entity.js"],
    synchronize: true,
};
exports.default = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map