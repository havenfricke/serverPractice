import { Auth0Provider } from "@bcwdev/auth0provider";
import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController{
    constructor(){
        super('cars')
        this.router
        .get('', this.getAllCars)
        .get('/:id', this.getCarById)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createCar)
        .put('/:id', this.editCar)
        .delete('/:id', this.removeCar)
    }
    async removeCar(req, res, next) {
          try {
            req.body.creatorId = req.userInfo.id
            const car = await carsService.removeCar(req.body)
            return res.send(car)
        } catch (error) {
            next(error)
        }
    }
    async editCar(req, res, next) {
          try {
            req.body.creatorId = req.userInfo.id
            req.body.id = req.params.id
            const update = await carsService.editCar(req.body)
            return res.send(update)
        } catch (error) {
            next(error)
        }
    }
    async createCar(req, res, next) {
          try {
            req.body.creatorId = req.userInfo.id
            const car = await carsService.createCar(req.body)
        } catch (error) {
            next(error)
        }
    }
    async getCarById(req, res, next) {
        try {
            const car = await carsService.getCarById(req.params.id)
            return res.send(car)
        } catch (error) {
            next(error)
        }
    }
    async getAllCars(req, res, next) {
        try {
            const cars = await carsService.getAllCars(req.query)
            res.send(cars)
        } catch (error) {
            next(error)
        }
    }
}