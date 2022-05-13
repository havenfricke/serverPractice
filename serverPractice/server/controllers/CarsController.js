import { Auth0Provider } from "@bcwdev/auth0provider";
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
    removeCar(req, res, next) {
          try {
            
        } catch (error) {
            next(error)
        }
    }
    editCar(req, res, next) {
          try {
            
        } catch (error) {
            next(error)
        }
    }
    createCar(req, res, next) {
          try {
            
        } catch (error) {
            next(error)
        }
    }
    getCarById(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }
    getAllCars(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }
}