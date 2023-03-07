import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { PaymentMethod, PaymentMethodSchema } from './schemas/payment-method.schema';
import { Channel, ChannelSchema } from './schemas/channel.schema';
import { UtilsService } from 'src/shared/utils.service';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdef', 10);

@Module({
  imports: [MongooseModule.forFeatureAsync([
    {
      name: User.name,
      useFactory: () => {
        const schema = UserSchema;
          schema.pre('save', function () {
            this.user_id = nanoid(7);
          });
          return schema;
      }
    },
    {
      name: PaymentMethod.name,
      useFactory: () => {
        return PaymentMethodSchema;
      }
    },
    {
      name: Channel.name,
      useFactory: () => {
        return ChannelSchema;
      }
    }
  ]
  )],
  controllers: [UsersController],
  providers: [UsersService, UtilsService]
})
export class UsersModule { }
