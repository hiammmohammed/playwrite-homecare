import { faker } from '@faker-js/faker';

export class FakeData {

    static phone() {

        return `05${faker.string.numeric(8)}`;

    }

    static nationalId() {

        return faker.string.numeric(10);

    }

    static firstName() {

        return faker.person.firstName();

    }

    static lastName() {

        return faker.person.lastName();

    }

    static address() {

        return faker.location.street();

    }

}