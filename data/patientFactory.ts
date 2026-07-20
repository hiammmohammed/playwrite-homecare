import { faker } from '@faker-js/faker';

export interface Patient {

  // Basic Info
  firstName: string;
  secondName: string;
  lastName: string;

  gender: 'Male' | 'Female';

  birthDate: string;

  nationality: string;

  phone: string;

  idType: string;

  idNumber: string;

  // Address
  addressName: string;

  addressType: string;

  region: string;

  city: string;

}

export class PatientFactory {

  static create(overrides: Partial<Patient> = {}): Patient {

    return {

      firstName: faker.person.firstName(),

      secondName: faker.person.firstName(),

      lastName: faker.person.lastName(),

      gender: faker.helpers.arrayElement([
        'Male',
        'Female'
      ]),

      birthDate: '01/01/1995',

      nationality: 'Saudi Arabia',

      phone: `05${faker.string.numeric(8)}`,

      idType: 'National ID',

      idNumber: faker.string.numeric(10),

      addressName: faker.location.street(),

      addressType: 'Home',

      region: 'Riyadh',

      city: 'Riyadh',

      ...overrides

    };

  }

}