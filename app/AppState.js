import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1996,
      price: 4000,
      mileage: 250000,
      hasCleanTitle: false,
      engineType: '4 cylinder',
      isManualTransmission: true,
      color: 'yellow',
      imgUrl: 'https://images.unsplash.com/photo-1620882814836-88a2c98c0f6d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlhdGF8ZW58MHx8MHx8fDI%3D'
    }),
    new Car({
      make: 'toyota',
      model: 'tacoma',
      year: 1993,
      price: 5000,
      mileage: 175000,
      hasCleanTitle: false,
      engineType: '6 cylinder',
      isManualTransmission: false,
      color: 'blue',
      imgUrl: 'https://images.unsplash.com/photo-1583031849506-4f35952c3fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhY29tYXxlbnwwfHwwfHx8Mg%3D%3D'
    }),
    new Car({
      make: 'porsche',
      model: '911 turbo',
      year: 2018,
      price: 95000,
      mileage: 4000,
      hasCleanTitle: true,
      engineType: '6 cylinder',
      isManualTransmission: true,
      color: 'white',
      imgUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnNjaGV8ZW58MHx8MHx8fDI%3D'
    }),
    new Car({
      make: 'subaru',
      model: 'baja',
      year: 2002,
      price: 16000,
      mileage: 89000,
      hasCleanTitle: true,
      engineType: 'boxer',
      isManualTransmission: false,
      color: 'yellow',
      imgUrl: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/02q4/267343/subaru-baja-photo-9829-s-original.jpg?fill=1:1&resize=1200:*'
    }),
  ]

  houses = [
    new House({
      year: 1968,
      price: 400000,
      squareFootage: 7500,
      bedrooms: 4,
      bathrooms: 2,
      address: '5645 N Fake St, Boise, ID, 83701',
      isAvailable: true,
      imgUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new House({
      year: 2015,
      price: 1750000,
      squareFootage: 20000,
      bedrooms: 6,
      bathrooms: 4,
      address: '6765 W Real St, Boise, ID, 83702',
      isAvailable: true,
      imgUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new House({
      year: 5,
      price: 666000,
      squareFootage: 50,
      bedrooms: 0,
      bathrooms: 0,
      address: '666 W Fire Rd, 1st circle, HL, 32449',
      isAvailable: true,
      imgUrl: 'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/xe3dxr95ohjeid0zivk7.jpg'
    }),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())