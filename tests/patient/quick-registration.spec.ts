import { test } from '@playwright/test';
import { LoginPage } from '../../page/login.page';
import { PatientsPage } from '../../page/patient.page';
import { QuickRegistrationPage } from '../../page/quickRegistration.page';
import { PatientFactory } from '../../data/patientFactory';

test.describe('Patient Module', () => {

    test('Quick Registration', async ({ page }) => {

        const loginPage = new LoginPage(page);

        const patientsPage = new PatientsPage(page);

        const quickRegistration = new QuickRegistrationPage(page);

        const patient = PatientFactory.create();

        console.log('PATIENT DATA:', patient);

        // Open Dashboard
        await page.goto('');

        // Login
        await loginPage.login(
            process.env.TEST_EMAIL!,
            process.env.TEST_PASSWORD!
        );

        // Open Patient Module
        await patientsPage.openPatients();

        // Open Quick Registration
        await patientsPage.openQuickRegistration();

        // =========================
        // Debug Translation
        // =========================

        await quickRegistration.firstNameEn.fill(patient.firstName);

        console.log(
            'English value:',
            await quickRegistration.firstNameEn.inputValue()
        );

        await page.waitForTimeout(2000);

        console.log(
            'Arabic value:',
            await quickRegistration.firstNameAr.inputValue()
        );

        // =========================
        // Create Patient
        // =========================

        await quickRegistration.createPatient(patient);

        // Verify Success
        await quickRegistration.verifySuccess();

    });

});