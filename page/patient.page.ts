import { Locator, Page } from '@playwright/test';

export class PatientsPage {

    readonly patientsMenu: Locator;
    readonly PatientList: Locator;
    readonly addPatientBtn: Locator;
    readonly quickRegistrationBtn: Locator;
    readonly fullRegistrationBtn: Locator;

    constructor(private page: Page) {

        this.patientsMenu = this.patientsMenu = page.getByText('Patients', {exact: true});

        this.PatientList = page.getByText('Patients List', { exact: true }).first();

        this.addPatientBtn = page.getByRole('button', {name: 'Add New Patient'});

        this.quickRegistrationBtn = page.getByText('Quick Registration', { exact: true }).first();

        this.fullRegistrationBtn = page.getByRole('button', {name: 'Full Registration'});
    }

    async openPatients() {
        await this.patientsMenu.click();
        await this.PatientList.click();
    }

    async openQuickRegistration() {

        await this.addPatientBtn.click();

        await this.quickRegistrationBtn.click();

    }

    async openFullRegistration() {

        await this.addPatientBtn.click();

        await this.fullRegistrationBtn.click();

    }

}