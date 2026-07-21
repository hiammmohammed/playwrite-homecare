import { expect, Locator, Page } from '@playwright/test';
import { Patient } from '../data/patientFactory';
import { Help } from '../utils/help';

export class QuickRegistrationPage {

    private help: Help;

    // ===========================
    // Basic Information
    // ===========================

    readonly firstNameEn: Locator;
    readonly firstNameAr: Locator;

    readonly secondNameEn: Locator;
    readonly secondNameAr: Locator;

    readonly lastNameEn: Locator;
    readonly lastNameAr: Locator;

    readonly male: Locator;
    readonly female: Locator;

    readonly birthDate: Locator;

    readonly nationality: Locator;

    readonly phone: Locator;

    readonly idType: Locator;

    readonly idNumber: Locator;

    // ===========================
    // Address
    // ===========================

    readonly addressName: Locator;

    readonly addressType: Locator;

    readonly region: Locator;

    readonly city: Locator;

    // ===========================

    readonly createPatientBtn: Locator;

    readonly successMessage: Locator;

    constructor(private page: Page) {

        this.help = new Help(page);

        // ===========================
        // Basic Information
        // ===========================

        // First Name EN
        this.firstNameEn = page.locator('input[aria-label="english name"]').nth(0);

        // First Name AR
        this.firstNameAr = page.locator('input[aria-label="arabic name"]').nth(0);

        // Second Name EN
        this.secondNameEn = page.locator('input[aria-label="english name"]').nth(1);

        // Second Name AR
        this.secondNameAr = page.locator('input[aria-label="arabic name"]').nth(1);

        // Last Name EN
        this.lastNameEn = page.locator('input[aria-label="english name"]').nth(2);

        // Last Name AR
        this.lastNameAr = page.locator('input[aria-label="arabic name"]').nth(2);

        // Gender
        this.male = page.locator('#qr_gender_male');

        this.female = page.locator('#qr_gender_female');

        // Birth Date
        this.birthDate = page.locator('p-datepicker[formcontrolname="birth"]');
        // Nationality
        this.nationality = page.locator('p-select[formcontrolname="country_id"]');

        // Phone
        this.phone = page.locator('#phoneNumberFullRegistration');

        // ID Type
        this.idType = page.locator('p-select[formcontrolname="personal_id_type"]');

        // ID Number
        this.idNumber = page.locator('input[formcontrolname="personal_id_number"]');

        // ===========================
        // Address
        // ===========================

        this.addressName = page.locator('input[formcontrolname="address_name"]');

        // Address Type
        this.addressType = page.locator('p-select[formcontrolname="address_type"]');

        // Region
        this.region = page.locator('p-select[formcontrolname="address_region_id"]');

        // City
        this.city = page.locator('p-select[formcontrolname="address_city_id"]');


        // ===========================
        // Buttons
        // ===========================

        // Create Patient
        this.createPatientBtn = page.getByRole('button', {
            name: 'Create Patient'
        });
        this.successMessage = page.getByText('Patient created successfully');
    }

    //test 


    async fillBasicInfo(patient: Patient) {

        await this.firstNameEn.fill(patient.firstName);
        await this.help.verifyTranslated(this.firstNameAr);

        await this.secondNameEn.fill(patient.secondName);
        await this.help.verifyTranslated(this.secondNameAr);

        await this.lastNameEn.fill(patient.lastName);
        await this.help.verifyTranslated(this.lastNameAr);

        if (patient.gender === 'Male')
            await this.male.click();
        else
            await this.female.click();

        await this.birthDate.click();

        const birthDateInput = this.page.locator('p-datepicker[formcontrolname="birth"] input');

        await birthDateInput.click();
        await birthDateInput.fill(patient.birthDate);
        await birthDateInput.press('Enter');

        await expect(birthDateInput).toHaveValue(patient.birthDate);

        await this.help.selectDropdown(this.nationality, patient.nationality);

        await this.phone.fill(patient.phone);

        await this.help.selectDropdown(this.idType, patient.idType);

        await this.idNumber.fill(patient.idNumber);
    }

    async fillAddress(patient: Patient) {

        await this.addressName.fill(patient.addressName);

        await this.help.selectDropdown(this.addressType, patient.addressType);

        await this.help.selectDropdown(this.region, patient.region);

        await this.help.selectDropdown(this.city, patient.city);
    }

    async createPatient(patient: Patient) {

        await this.fillBasicInfo(patient);

        await this.fillAddress(patient);

        await this.createPatientBtn.click();
    }

    async verifySuccess() {

        await expect(this.successMessage).toBeVisible();

    }



}