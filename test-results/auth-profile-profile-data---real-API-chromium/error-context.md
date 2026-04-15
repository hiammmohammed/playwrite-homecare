# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\profile.spec.ts >> profile data - real API
- Location: tests\auth\profile.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Sign In/i })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - generic:
      - generic:
        - generic: Sehaconnect — Stage
  - generic:
    - alertdialog
  - generic [ref=e4]:
    - complementary [ref=e6]:
      - generic [ref=e7]:
        - link "Alborg logo" [ref=e8] [cursor=pointer]:
          - /url: /
          - img "Alborg logo" [ref=e9]
        - button "Toggle menu" [ref=e10] [cursor=pointer]:
          - generic [ref=e11]: 
      - generic [ref=e12]:
        - link " Dashboard" [ref=e14] [cursor=pointer]:
          - /url: /dashboard
          - generic [ref=e16]: 
          - generic [ref=e17]: Dashboard
        - generic [ref=e18]:
          - generic [ref=e19] [cursor=pointer]:
            - generic [ref=e21]: 
            - generic [ref=e22]: Patients
            - generic [ref=e23]: 
          - generic:
            - link " Patients List" [ref=e24] [cursor=pointer]:
              - /url: /patients
              - generic [ref=e26]: 
              - generic [ref=e27]: Patients List
            - link " Deleted Patients" [ref=e28] [cursor=pointer]:
              - /url: /patients/deleted
              - generic [ref=e30]: 
              - generic [ref=e31]: Deleted Patients
        - generic [ref=e32]:
          - generic [ref=e33] [cursor=pointer]:
            - generic [ref=e36]: Requests
            - generic [ref=e37]: 
          - generic:
            - link " Create Request" [ref=e38] [cursor=pointer]:
              - /url: /dispatched-orders/create
              - generic [ref=e40]: 
              - generic [ref=e41]: Create Request
            - link "Dispatch Panel" [ref=e42] [cursor=pointer]:
              - /url: /dispatched-orders/dispatch-panel
              - generic [ref=e45]: Dispatch Panel
            - link " App Requests" [ref=e46] [cursor=pointer]:
              - /url: /dispatched-orders/pending-app-requests
              - generic [ref=e48]: 
              - generic [ref=e49]: App Requests
            - link " Slot Management" [ref=e50] [cursor=pointer]:
              - /url: /slots/manage
              - generic [ref=e52]: 
              - generic [ref=e53]: Slot Management
        - generic [ref=e54]:
          - generic [ref=e55] [cursor=pointer]:
            - generic [ref=e57]: 
            - generic [ref=e58]: Staff
            - generic [ref=e59]: 
          - generic:
            - link "Onboarding" [ref=e60] [cursor=pointer]:
              - /url: /onboardings
              - generic [ref=e63]: Onboarding
            - link "Specialists" [ref=e64] [cursor=pointer]:
              - /url: /specialists
              - generic [ref=e67]: Specialists
            - link " Rosters" [ref=e68] [cursor=pointer]:
              - /url: /rosters
              - generic [ref=e70]: 
              - generic [ref=e71]: Rosters
            - link " Deleted Staff" [ref=e72] [cursor=pointer]:
              - /url: /specialists/deleted
              - generic [ref=e74]: 
              - generic [ref=e75]: Deleted Staff
        - generic [ref=e76]:
          - generic [ref=e77] [cursor=pointer]:
            - generic [ref=e80]: Payers & Contracts
            - generic [ref=e81]: 
          - generic:
            - link "Payers" [ref=e82] [cursor=pointer]:
              - /url: /payers
              - generic [ref=e85]: Payers
            - link "Contracts" [ref=e86] [cursor=pointer]:
              - /url: /contracts
              - generic [ref=e89]: Contracts
        - generic [ref=e90]:
          - generic [ref=e91] [cursor=pointer]:
            - generic [ref=e94]: SLA
            - generic [ref=e95]: 
          - link " Follow Up Plans" [ref=e96] [cursor=pointer]:
            - /url: /follow-up-plans
            - generic [ref=e98]: 
            - generic [ref=e99]: Follow Up Plans
        - generic [ref=e100]:
          - generic [ref=e101] [cursor=pointer]:
            - generic [ref=e103]: 
            - generic [ref=e104]: Providers
            - generic [ref=e105]: 
          - link " Providers List" [ref=e106] [cursor=pointer]:
            - /url: /providers
            - generic [ref=e108]: 
            - generic [ref=e109]: Providers List
        - generic [ref=e110]:
          - generic [ref=e111] [cursor=pointer]:
            - generic [ref=e114]: Services Catalogue
            - generic [ref=e115]: 
          - link "Categories & Services" [ref=e116] [cursor=pointer]:
            - /url: /service-categories
            - generic [ref=e119]: Categories & Services
        - generic [ref=e120]:
          - generic [ref=e121] [cursor=pointer]:
            - generic [ref=e124]: Geo. Management
            - generic [ref=e125]: 
          - generic:
            - link " Countries" [ref=e126] [cursor=pointer]:
              - /url: /countries
              - generic [ref=e128]: 
              - generic [ref=e129]: Countries
            - link " Regions" [ref=e130] [cursor=pointer]:
              - /url: /regions
              - generic [ref=e132]: 
              - generic [ref=e133]: Regions
            - link " Cities" [ref=e134] [cursor=pointer]:
              - /url: /cities
              - generic [ref=e136]: 
              - generic [ref=e137]: Cities
            - link " Districts" [ref=e138] [cursor=pointer]:
              - /url: /districts
              - generic [ref=e140]: 
              - generic [ref=e141]: Districts
        - generic [ref=e142]:
          - generic [ref=e143] [cursor=pointer]:
            - generic [ref=e145]: 
            - generic [ref=e146]: System Configurations
            - generic [ref=e147]: 
          - generic:
            - link "Skills" [ref=e148] [cursor=pointer]:
              - /url: /skills
              - generic [ref=e151]: Skills
            - link " Organizations" [ref=e152] [cursor=pointer]:
              - /url: /organizations
              - generic [ref=e154]: 
              - generic [ref=e155]: Organizations
            - link " Work Titles" [ref=e156] [cursor=pointer]:
              - /url: /work-titles
              - generic [ref=e158]: 
              - generic [ref=e159]: Work Titles
            - link " Work Types" [ref=e160] [cursor=pointer]:
              - /url: /work-types
              - generic [ref=e162]: 
              - generic [ref=e163]: Work Types
            - link "Insurance Companies" [ref=e164] [cursor=pointer]:
              - /url: /insurance-companies
              - generic [ref=e167]: Insurance Companies
            - link " Reschedule Reasons" [ref=e168] [cursor=pointer]:
              - /url: /reschedule-reasons
              - generic [ref=e170]: 
              - generic [ref=e171]: Reschedule Reasons
            - link " Handover Reasons" [ref=e172] [cursor=pointer]:
              - /url: /handover-reasons
              - generic [ref=e174]: 
              - generic [ref=e175]: Handover Reasons
            - link " Cancellation Reasons" [ref=e176] [cursor=pointer]:
              - /url: /cancellation-reasons
              - generic [ref=e178]: 
              - generic [ref=e179]: Cancellation Reasons
            - link " Banks" [ref=e180] [cursor=pointer]:
              - /url: /banks
              - generic [ref=e182]: 
              - generic [ref=e183]: Banks
            - link " Apps Configuration" [ref=e184] [cursor=pointer]:
              - /url: /apps-config
              - generic [ref=e186]: 
              - generic [ref=e187]: Apps Configuration
            - link " General Pages" [ref=e188] [cursor=pointer]:
              - /url: /general-pages
              - generic [ref=e190]: 
              - generic [ref=e191]: General Pages
        - generic [ref=e192]:
          - generic [ref=e193] [cursor=pointer]:
            - generic [ref=e196]: Users Management
            - generic [ref=e197]: 
          - generic:
            - link " Users" [ref=e198] [cursor=pointer]:
              - /url: /users
              - generic [ref=e200]: 
              - generic [ref=e201]: Users
            - link " Roles & Permissions" [ref=e202] [cursor=pointer]:
              - /url: /administration/roles
              - generic [ref=e204]: 
              - generic [ref=e205]: Roles & Permissions
        - generic [ref=e206]:
          - generic [ref=e207] [cursor=pointer]:
            - generic [ref=e209]: 
            - generic [ref=e210]: LDM Integration
            - generic [ref=e211]: 
          - generic:
            - link " API Logs" [ref=e212] [cursor=pointer]:
              - /url: /ldm-logs
              - generic [ref=e214]: 
              - generic [ref=e215]: API Logs
            - link " Import Logs" [ref=e216] [cursor=pointer]:
              - /url: /ldm-logs/import
              - generic [ref=e218]: 
              - generic [ref=e219]: Import Logs
        - generic [ref=e220]:
          - generic [ref=e221] [cursor=pointer]:
            - generic [ref=e223]: 
            - generic [ref=e224]: Analytics
            - generic [ref=e225]: 
          - generic:
            - link " Patient Analytics" [ref=e226] [cursor=pointer]:
              - /url: /analytics/patients
              - generic [ref=e228]: 
              - generic [ref=e229]: Patient Analytics
            - link " Specialist Analytics" [ref=e230] [cursor=pointer]:
              - /url: /analytics/specialists
              - generic [ref=e232]: 
              - generic [ref=e233]: Specialist Analytics
            - link "Payer & Contracts Analytics" [ref=e234] [cursor=pointer]:
              - /url: /analytics/payers
              - generic [ref=e237]: Payer & Contracts Analytics
            - link " Roster Analytics" [ref=e238] [cursor=pointer]:
              - /url: /analytics/rosters
              - generic [ref=e240]: 
              - generic [ref=e241]: Roster Analytics
    - generic [ref=e242]:
      - generic [ref=e243]:
        - generic: 
        - generic [ref=e244]:
          - button "Toggle theme" [ref=e245] [cursor=pointer]:
            - generic [ref=e246]: 
          - button "" [ref=e247] [cursor=pointer]:
            - generic [ref=e249]: 
          - button "" [ref=e250] [cursor=pointer]:
            - generic [ref=e251]: 
      - generic [ref=e254]:
        - generic [ref=e255]:
          - generic [ref=e258]:
            - generic [ref=e259]:
              - heading "Home Healthcare Orchestration Platform" [level=1] [ref=e260]
              - paragraph [ref=e261]: Welcome back! Your dashboard is ready
            - generic [ref=e263]:
              - button "Quick Actions" [ref=e264] [cursor=pointer]:
                - generic [ref=e265]: 
                - generic [ref=e266]: Quick Actions
              - button "This Month" [ref=e267] [cursor=pointer]:
                - generic [ref=e268]: 
                - generic [ref=e269]: This Month
          - generic [ref=e270] [cursor=pointer]:
            - generic [ref=e271]: Powered by
            - img "Phlebotex" [ref=e272]
        - generic [ref=e274]:
          - generic [ref=e277] [cursor=pointer]:
            - generic [ref=e278]:
              - generic [ref=e280]: 
              - generic [ref=e281]: Total
            - generic [ref=e282]: "5"
            - paragraph [ref=e283]: Registered Patients
            - generic [ref=e284]:
              - generic [ref=e285]:
                - generic [ref=e286]:
                  - generic [ref=e287]: ♂
                  - generic [ref=e288]:
                    - generic [ref=e289]: "2"
                    - generic [ref=e290]: (40%)
                - generic [ref=e291]:
                  - generic [ref=e292]: ♀
                  - generic [ref=e293]:
                    - generic [ref=e294]: "3"
                    - generic [ref=e295]: (60%)
              - generic [ref=e296]:
                - generic [ref=e297]: "+5"
                - generic [ref=e298]: New
          - generic [ref=e301] [cursor=pointer]:
            - generic [ref=e302]:
              - generic [ref=e304]: 
              - generic [ref=e305]: This Month
            - generic [ref=e306]: "28"
            - paragraph [ref=e307]: Dispatched Requests
            - generic [ref=e308]:
              - generic [ref=e309]:
                - generic [ref=e310]: Auto / Manual split
                - generic [ref=e311]: 28 total
              - generic [ref=e315]:
                - generic [ref=e318]:
                  - strong [ref=e319]: "6"
                  - text: Auto (21.4%)
                - generic [ref=e322]:
                  - strong [ref=e323]: "22"
                  - text: Manual (78.6%)
          - generic [ref=e326]:
            - generic [ref=e327]:
              - generic [ref=e329]: 
              - generic [ref=e330]: This Month
            - generic [ref=e331]: 100%
            - paragraph [ref=e332]: Coverage Rate
            - generic [ref=e333]:
              - generic [ref=e334]:
                - generic [ref=e335]: Total Requests
                - generic [ref=e336]: "28"
              - generic [ref=e337]:
                - generic [ref=e338]: Out of Coverage
                - generic [ref=e339]: "0"
          - generic [ref=e342]:
            - generic [ref=e343]:
              - generic [ref=e345]: 
              - generic [ref=e346]: This Month
            - generic [ref=e347]: 2.4%
            - paragraph [ref=e348]: Slot Utilization
            - generic [ref=e349]:
              - generic [ref=e350]:
                - generic [ref=e351]: Total Slots
                - generic [ref=e352]: 2,061
              - generic [ref=e353]:
                - generic [ref=e354]: Booked Slots
                - generic [ref=e355]: "49"
              - generic [ref=e356]:
                - generic [ref=e357]: Blocked Slots
                - generic [ref=e358]: "0"
        - generic [ref=e359]:
          - generic [ref=e362] [cursor=pointer]:
            - generic [ref=e363]:
              - generic [ref=e365]: 
              - generic [ref=e366]:
                - paragraph [ref=e367]: "23"
                - paragraph [ref=e368]: Total Specialists
            - generic [ref=e369]:
              - generic [ref=e370]:
                - generic [ref=e371]:
                  - generic [ref=e372]:
                    - generic [ref=e373]: Status Breakdown
                    - generic [ref=e374]: 23 total
                  - generic [ref=e378]:
                    - generic [ref=e379]:
                      - strong [ref=e381]: "10"
                      - text: Active
                    - generic [ref=e382]:
                      - strong [ref=e384]: "13"
                      - text: Inactive
                - generic [ref=e385]:
                  - generic [ref=e386]: "+64"
                  - generic [ref=e387]: Onboarding
              - generic [ref=e389]:
                - generic [ref=e390]: Patient Gender Distribution
                - generic [ref=e391]: 14♂(62%)|9♀(38%)
          - generic [ref=e397] [cursor=pointer]:
            - generic [ref=e398]:
              - generic [ref=e400]: 
              - generic [ref=e401]:
                - paragraph [ref=e402]: "62"
                - paragraph [ref=e403]: Total Rosters
            - generic [ref=e404]:
              - generic [ref=e405]:
                - generic [ref=e406]:
                  - generic [ref=e407]: Timeline Breakdown
                  - generic [ref=e408]: 62 total
                - generic [ref=e413]:
                  - generic [ref=e414]:
                    - strong [ref=e416]: "40"
                    - text: Past
                  - generic [ref=e417]:
                    - strong [ref=e419]: "12"
                    - text: Current
                  - generic [ref=e420]:
                    - strong [ref=e422]: "10"
                    - text: Upcoming
              - generic [ref=e424]:
                - generic [ref=e425]: Confirmation Status
                - generic [ref=e426]: 45confirmed|14pending
        - generic [ref=e430]:
          - generic [ref=e432]:
            - generic [ref=e434]:
              - generic [ref=e436]: 
              - generic [ref=e437]:
                - heading "Requests by Payer" [level=3] [ref=e438]
                - paragraph [ref=e439]: This Month · 6 total payers
            - generic [ref=e447]:
              - generic [ref=e448]:
                - generic [ref=e449]: "1"
                - generic [ref=e451]:
                  - generic [ref=e452]: Walkin Saudi
                  - generic [ref=e453]: "26"
                - generic [ref=e456]: 92.9%
              - generic [ref=e457]:
                - generic [ref=e458]: "2"
                - generic [ref=e460]:
                  - generic [ref=e461]: Bupa Arabia
                  - generic [ref=e462]: "2"
                - generic [ref=e465]: 7.1%
          - generic [ref=e467]:
            - generic [ref=e468]:
              - generic [ref=e470]: 
              - generic [ref=e471]:
                - heading "Top Requested Services" [level=3] [ref=e472]
                - paragraph [ref=e473]: This Month · Top 10
            - generic [ref=e474]:
              - generic [ref=e475]:
                - generic [ref=e476]: "1"
                - generic [ref=e478]:
                  - generic [ref=e479]: Complete Blood Count - (CBC)
                  - generic [ref=e480]: "13"
                - generic [ref=e483]: 41.9%
              - generic [ref=e484]:
                - generic [ref=e485]: "2"
                - generic [ref=e487]:
                  - generic [ref=e488]: Zakat, 2024
                  - generic [ref=e489]: "6"
                - generic [ref=e492]: 19.4%
              - generic [ref=e493]:
                - generic [ref=e494]: "3"
                - generic [ref=e496]:
                  - generic [ref=e497]: Vaginitis Screening panel by Real-Time PCR
                  - generic [ref=e498]: "4"
                - generic [ref=e501]: 12.9%
              - generic [ref=e502]:
                - generic [ref=e503]: "4"
                - generic [ref=e505]:
                  - generic [ref=e506]: Vitamin D (25 OH-Vit D -Total)
                  - generic [ref=e507]: "2"
                - generic [ref=e510]: 6.5%
              - generic [ref=e511]:
                - generic [ref=e512]: "5"
                - generic [ref=e514]:
                  - generic [ref=e515]: Liver Care Basic
                  - generic [ref=e516]: "1"
                - generic [ref=e519]: 3.2%
              - generic [ref=e520]:
                - generic [ref=e521]: "6"
                - generic [ref=e523]:
                  - generic [ref=e524]: Sehaty AISJ Program – Random
                  - generic [ref=e525]: "1"
                - generic [ref=e528]: 3.2%
              - generic [ref=e529]:
                - generic [ref=e530]: "7"
                - generic [ref=e532]:
                  - generic [ref=e533]: Sehaty Silver with Vitamin B12 and HbA1c
                  - generic [ref=e534]: "1"
                - generic [ref=e537]: 3.2%
              - generic [ref=e538]:
                - generic [ref=e539]: "8"
                - generic [ref=e541]:
                  - generic [ref=e542]: The General Secretariat Package
                  - generic [ref=e543]: "1"
                - generic [ref=e546]: 3.2%
              - generic [ref=e547]:
                - generic [ref=e548]: "9"
                - generic [ref=e550]:
                  - generic [ref=e551]: Urine Analysis and Culture
                  - generic [ref=e552]: "1"
                - generic [ref=e555]: 3.2%
              - generic [ref=e556]:
                - generic [ref=e557]: "10"
                - generic [ref=e559]:
                  - generic [ref=e560]: WAHA
                  - generic [ref=e561]: "1"
                - generic [ref=e564]: 3.2%
        - generic [ref=e565]:
          - generic [ref=e567]:
            - generic [ref=e568]:
              - generic [ref=e570]: 
              - generic [ref=e571]:
                - heading "Requests by City" [level=3] [ref=e572]
                - paragraph [ref=e573]: This Month · Ranked
            - generic [ref=e574]:
              - generic [ref=e575]:
                - generic [ref=e576]: "1"
                - generic [ref=e578]:
                  - generic [ref=e579]: Jeddah
                  - generic [ref=e580]: "9"
                - generic [ref=e583]: 32%
              - generic [ref=e584]:
                - generic [ref=e585]: "2"
                - generic [ref=e587]:
                  - generic [ref=e588]: Riyadh
                  - generic [ref=e589]: "9"
                - generic [ref=e592]: 32%
              - generic [ref=e593]:
                - generic [ref=e594]: "3"
                - generic [ref=e596]:
                  - generic [ref=e597]: Al Ula
                  - generic [ref=e598]: "3"
                - generic [ref=e601]: 11%
              - generic [ref=e602]:
                - generic [ref=e603]: "4"
                - generic [ref=e605]:
                  - generic [ref=e606]: Shebeen El-Kom
                  - generic [ref=e607]: "1"
                - generic [ref=e610]: 4%
          - generic [ref=e612]:
            - generic [ref=e614]:
              - generic [ref=e616]: 
              - generic [ref=e617]:
                - heading "Requests by Time Slot" [level=3] [ref=e618]
                - paragraph [ref=e619]: This Month
            - img [ref=e623]
        - generic [ref=e624]:
          - generic [ref=e626]:
            - generic [ref=e628]:
              - generic [ref=e630]: 
              - generic [ref=e631]:
                - heading "Orders Trend" [level=3] [ref=e632]
                - paragraph [ref=e633]: Last 6 months
            - img [ref=e637]
          - generic [ref=e639]:
            - generic [ref=e641]:
              - generic [ref=e643]: 
              - generic [ref=e644]:
                - heading "New Patients" [level=3] [ref=e645]
                - paragraph [ref=e646]: Last 6 months
            - img [ref=e650]
      - generic [ref=e652]:
        - text: Developed by ©
        - link "Barmagli" [ref=e653] [cursor=pointer]:
          - /url: https://barmagli.com
        - text: "2026"
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { environment } from '../config/environment';
  3  | 
  4  | export class LoginPage {
  5  |   constructor(private page: Page) {}
  6  | 
  7  |   async goto() {
  8  |     await this.page.goto(`${environment.baseUrl}/auth/login`);
  9  |   }
  10 | 
  11 |   get emailInput() {
  12 |     return this.page.locator('[formcontrolname="email"]');
  13 |   }
  14 | 
  15 |   get passwordInput() {
  16 |     return this.page.locator('input[type="password"]');
  17 |   }
  18 | 
  19 |   get rememberMeCheckbox() {
  20 |     return this.page.locator('input[type="checkbox"]');
  21 |   }
  22 | 
  23 |   get loginBtn() {
  24 |     return this.page.getByRole('button', { name: /Sign In/i });
  25 |   }
  26 | 
  27 |   get errorMessage() {
  28 |     return this.page.getByText('Invalid credentials'); 
  29 |     
  30 |   }
  31 | 
  32 |  async login(email: string, password: string) {
  33 |   await this.emailInput.fill(email);
  34 |   await this.passwordInput.fill(password);
  35 | 
  36 |   await Promise.all([
  37 |     this.page.waitForNavigation(),
  38 |     this.loginBtn.click()
  39 |   ]);
  40 | 
  41 |     // if (rememberMe) {
  42 |     //   await this.rememberMeCheckbox.check();
  43 |     // }
  44 | 
> 45 |     await this.loginBtn.click();
     |                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  46 |   }
  47 | 
  48 |   async expectLoginSuccess() {
  49 |     await expect(this.page).not.toHaveURL(/auth\/login/);
  50 |   }
  51 | 
  52 |   async expectLoginFailed() {
  53 |     await expect(this.errorMessage).toBeVisible();
  54 |   }
  55 | 
  56 | }
```