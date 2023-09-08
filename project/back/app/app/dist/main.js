"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const mongoose = require('mongoose');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
async function checkdb() {
    try {
        await mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to database');
        const Cat = mongoose.model('Cat', { name: String, age: Number });
        const kitty = new Cat({ name: 'Zildjian', age: 1 });
        await kitty.save();
        const foundCat = await Cat.find({ name: 'Zildjian' }).exec();
        console.log(foundCat);
    }
    catch (error) {
        console.error('Error:', error);
    }
    finally {
        mongoose.disconnect();
    }
}
checkdb();
bootstrap();
//# sourceMappingURL=main.js.map