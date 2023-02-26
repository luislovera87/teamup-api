import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { PaymentMethod, PaymentMethodSchema } from './schemas/payment-method.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name : User.name, schema: UserSchema }, { name: PaymentMethod.name, schema: PaymentMethodSchema }])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
