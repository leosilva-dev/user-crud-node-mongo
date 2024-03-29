import { StatusCodes } from 'http-status-codes';
import {Request, Response} from 'express'
import {User} from '../models/User'

const getById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const userById = await User.findById(id)
        res.status(StatusCodes.OK).json(userById)        
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({error:error})
    }
}

const getAll = async (_:Request, res: Response) => {
    try {
        const allUsers = await User.find()
        res.status(StatusCodes.OK).json(allUsers)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({error:error})
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body
        const newUser = await new User({name, email, password})
        newUser.save()
        res.status(StatusCodes.CREATED).json(newUser)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({error:error})
    }
}

const updateById = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const {name, email, password} = req.body
        const userUpdated = await User.findByIdAndUpdate(id, {name, email, password})
        res.status(StatusCodes.OK).json({userUpdated})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({error:error})
    }
}

const deleteById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const resultOfAction = await User.deleteOne({_id: id})
        res.status(StatusCodes.OK).json({msg:resultOfAction})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({error:error})
    }
}

export const UserController = {
    getById,
    getAll,
    create,
    updateById,
    deleteById
}