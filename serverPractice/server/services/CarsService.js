import {dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors";

class CarsService {
    removeCar(body) {
        
    }

    async editCar(body) {
        const original = await this.getCarById(body.id)
        if (original.creatorId.toString() !== body.creatorId){
            throw new Forbidden('You do not have permission')
        }
        original.make = body.make ? body.make : original.make
        original.model = body.model ? body.model : original.model
        original.year = body.year ? body.year : original.year 
        original.price = body.price ? body.price : original.price
        original.imgUrl = body.imgUrl ? body.imgUrl : original.price

        await original.save({ runValidators: true})
        return original
    }
    async createCar(body) {
        const car = await dbContext.Cars.create(body)
        return car
    }
    async getCarById(id) {
        const car = await dbContext.Cars.findById(id)
        if(!car) {
            throw new BadRequest('invalid car id') 
        }
        return car
    }
    async getAllCars(query) {
      const cars = await dbContext.Cars.find(query)
      return cars
    }
}

export const carsService = new CarsService()