import React, { Component } from 'react'
import axios from 'axios';

export default class AuthService extends Component {
    constructor() {
        super();

        let service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
        this.service = service;
    }

    signup = (username, password, campus, course) => {
        return this.service.post('/auth/signup', { username, password, campus, course })
            .then(res => res.data);
    }

    login = (username, password) => {
        return this.service.post('/auth/login', { username, password })
            .then(res => res.data);
    }

    upload = (file) => {
        return this.service.post('/auth/upload', { file })
            .then(res => res.data);
    }

    edit = (username, password, campus, course) => {
        return this.service.post('/auth/edit', { username, password, campus, course })
            .then(res => res.data);
    }

    logout = () => {
        return this.service.get('/auth/logout')
            .then(res => res.data);
    }

    loggedin = () => {
        return this.service.get('/auth/loggedin')
            .then(res => res.data);
    }
}