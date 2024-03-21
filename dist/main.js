"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const dotenv_1 = require("dotenv");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['https://dapp.gotem.io', 'http://localhost:4200'],
    });
    const documentBuilder = new swagger_1.DocumentBuilder()
        .setTitle('GOTEM API')
        .setDescription('GOTEM NestJS API Documentation')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, documentBuilder);
    swagger_1.SwaggerModule.setup('api', app, document);
    (0, dotenv_1.config)();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map