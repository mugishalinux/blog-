import {Injectable, Param} from '@nestjs/common';

@Injectable()
export class AppService {
    getStudent() {
        return "hello this citizen service";
    }
}
