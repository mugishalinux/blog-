import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Citizen } from './entity/citizen';

@Injectable()
export class CitizenService {
    async createCitizen(citizen: Citizen) {
        const citizenObj = new Citizen();
        citizenObj.firstName = citizen.firstName;
        citizenObj.lastName = citizen.lastName;
        citizenObj.phone = citizen.phone;
        citizenObj.email = citizen.email;
        try{
            return citizenObj.save();
        }catch(error){
            throw new InternalServerErrorException("something wrong : " , error);
        }
      }
      findAllCitizen() {
        return Citizen.find();
      }
      async getSingleCitizen(id: string): Promise<Citizen> {
        const citizenExist = await Citizen.findOneBy({ id: id });
        if (!citizenExist)
         throw new BadRequestException("this citizen don't exit into our databse");
        return Citizen.findOneBy({ id });
      }

      async updateCitizen(id: string, citizen: Citizen) {
       
        const citizenExist = await Citizen.findOneBy({ id: id });
        if (!citizenExist)
        throw new BadRequestException("this citizen don't exit into our databse");

        const citizenObj = new Citizen();
        citizenExist.firstName = citizen.firstName;
        citizenExist.lastName = citizen.lastName;
        citizenExist.phone = citizen.phone;
        citizenExist.email = citizen.email;
        try{
            return Citizen.update(id,citizenExist);
        }catch(error){
            throw new InternalServerErrorException("something wrong : " , error);
        }
      }
      async deleteCitizen(id: string) {
        const citizenExist = await Citizen.findOneBy({ id: id });
        if (!citizenExist)
          throw new BadRequestException("this citizen don't exit into our databse");
        try{
            return Citizen.delete(id);
        }catch(error){
            throw new InternalServerErrorException("something wrong : " , error);
        }
      }
}
