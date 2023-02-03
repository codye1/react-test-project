
import React from "react";
import axios from "axios";
import { posts } from "./Pages/Posts";
import { weather } from "./Pages/Pogoda";

interface comms extends posts{
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export default class PostService{

    static async getAll(limit=10, page=2){
            const response = await axios.get<posts[]>('https://jsonplaceholder.typicode.com/posts',{
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response;
    }
    static async getPostById(id?:string){
        const response = await axios.get<posts>('https://jsonplaceholder.typicode.com/posts/'+ id)
        return response;
    }
    static async getComsById(id?:string){
        const response = await axios.get<comms[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
    static async getCord(city:string,countryCode:string){
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=1&appid=7f0b365e8005dbb34ccb9d850e3a76cb&units=imperial`)
        return response
    }
    static async getPogoda(lat:number,lon:number){
        const response = await axios.get<weather>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7f0b365e8005dbb34ccb9d850e3a76cb&units=metric&lang=ru`)
        return response
    }

}