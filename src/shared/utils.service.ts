import { Injectable } from '@nestjs/common';
import { customAlphabet } from 'nanoid'

@Injectable()
export class UtilsService {
    generateId() {
        const nanoid = customAlphabet('1234567890abcdef', 10)
        return nanoid(7);
    }
}
