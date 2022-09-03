import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { Citizen } from './entity/citizen';

@Controller('citizen')
export class CitizenController {
    constructor(private citizenService: CitizenService) {}
    @Post()
    createCitizen(@Body() citizen: any) {
      return this.citizenService.createCitizen(citizen);
    }
    @Get()
    getAllCitizen() {
      return this.citizenService.findAllCitizen();
    }
    @Get(':id')
    getSingleCitizenById(@Param() params): Promise<Citizen> {
      return this.citizenService.getSingleCitizen(params.id);
    }
    @Put(':id')
    updateCitizen(
      @Param('id') id: string,
      @Body() citizen: Citizen,
    ) {
      return this.citizenService.updateCitizen(
        id,
        citizen,
      );
    }
    @Delete(':id')
    deleteCitizen(@Param('id') id: string) {
      return this.citizenService.deleteCitizen(id);
    }
}
