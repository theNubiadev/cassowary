This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# LoadLink — Product Requirements Document

**Version:** 1.0
**Status:** Draft
**Date:** March 2026
**Team:** LoadLink Engineering — Enyata × Interswitch Hackathon
**Confidential**

## Contributors

Ajaiyeoba John Ajibola - Full Stack Developer [ajaiyeobajibola@gmail.com](ajaiyeobajibola@gmail.com)

Bankole Ogooluwakitan - Product Designer [bankoleogooluwakiitan1407@gmail.com](bankoleogooluwakiitan1407@gmail.com)

---

## Table of Contents

1. Executive Summary
2. Problem Statement
3. Product Vision & Goals
4. Target Users & Personas
5. Features & Requirements
6. User Stories
7. Technical Architecture
8. Interswitch Payment Integration
9. Non-Functional Requirements
10. Success Metrics
11. Risks & Mitigations
12. Post-Hackathon Roadmap
13. Appendix

---

## 1. Executive Summary

LoadLink is a two-sided marketplace platform that connects cargo owners with verified truck drivers across Nigeria. Modelled after the on-demand economy — think Uber for haulage — LoadLink digitises the traditionally fragmented and informal logistics sector by providing a structured, transparent, and payment-secured environment for cargo transportation.

The platform targets two primary user personas: **Cargo Owners** who need to move goods between Nigerian states, and **Truck Drivers** who want to fill their trucks with verified, paying cargo. LoadLink handles discovery, matching, booking, and secure payment — end to end.

> **Hackathon Context:** LoadLink is built for the Enyata × Interswitch Hackathon, targeting the Transportation vertical. The Interswitch payment gateway is a core integration requirement and central to the product's booking and settlement flow.

---

## 2. Problem Statement

### 2.1 The Status Quo

Nigeria's haulage industry is estimated to be worth over ₦2 trillion annually, yet it operates almost entirely through informal channels: phone calls, roadside negotiations, and personal referrals. This creates significant pain for both sides of the market.

### 2.2 Pain Points — Cargo Owners

| Pain Point                    | Detail                                                                              |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| No centralised directory      | Cargo owners have no way to browse available trucks or drivers by route or capacity |
| Opaque pricing                | Rates are negotiated ad hoc with no market benchmarks — owners routinely overpay    |
| No driver vetting             | No background checks or track records — cargo theft and damage are common           |
| Cash-only payments            | Creates security risk, no paper trail, reconciliation nightmares                    |
| No tracking or accountability | Once cargo leaves, there is no visibility until it arrives (or doesn't)             |

### 2.3 Pain Points — Truck Drivers

| Pain Point           | Detail                                                                               |
| -------------------- | ------------------------------------------------------------------------------------ |
| Idle trucks          | Trucks return empty after deliveries (deadhead trips) — up to 40% of all km driven   |
| Middlemen and touts  | Clearing agents take 15–25% commission on every load secured                         |
| No digital record    | No trip history makes it impossible to build a reputation or access logistics credit |
| Cash collection risk | Collecting large sums in cash creates physical safety risks and payment delays       |

### 2.4 Market Opportunity

Nigeria has over 300,000 registered commercial trucks and a logistics deficit estimated at 40% of GDP. Digital penetration in haulage is below 3%. LoadLink addresses a large, underserved market with a proven global playbook (Uber Freight, Convoy, Kobo360).

---

## 3. Product Vision & Goals

### 3.1 Vision Statement

> _"To become the operating system for cargo movement in Nigeria — making haulage as simple, safe, and transparent as booking a ride."_

### 3.2 Mission

To eliminate information asymmetry in Nigeria's haulage sector by connecting the right driver to the right cargo, at a fair price, with a payment experience trusted by millions.

### 3.3 Goals for Hackathon MVP

1. Demonstrate a working end-to-end booking flow: Register → Search Driver → Book → Pay via Interswitch → Confirmed
2. Integrate Interswitch Quickteller/Webpay as the primary payment channel
3. Support dual user roles (Cargo Owner, Truck Driver) with role-based dashboards
4. Seed realistic Nigerian demo data (routes, truck types, drivers) for live demonstration
5. Deliver a polished, functional UI that clearly communicates the product's value

---

## 4. Target Users & Personas

### 4.1 Persona A — The Cargo Owner

**Name:** Emeka Okonkwo
**Role:** SME owner / FMCG distributor
**Location:** Lagos Island, Lagos

**Background:**
Emeka runs a rice distribution business and ships goods to Abuja, Kano, and Port Harcourt regularly. He currently finds trucks through a network of contacts and park touts. It usually takes 2–3 days of phone calls to secure a truck, and he never knows if the driver is reliable until the cargo arrives.

**Goals:**

- Find a reliable truck for his specific route quickly
- Know the price upfront before committing
- Pay digitally and have a record of the transaction
- Know his cargo is safe and trackable

**Frustrations:**

- Wasted time negotiating by phone
- Has had two cargo theft incidents in three years
- Cannot get insurance without proof of shipment documentation

**Tech Comfort:** Uses WhatsApp, Opay, and mobile banking daily. Comfortable with web apps on mobile.

---

### 4.2 Persona B — The Truck Driver

**Name:** Chukwudi Nwachukwu
**Role:** Independent truck owner-operator
**Location:** Apapa, Lagos (base)

**Background:**
Chukwudi owns a 30-tonne container truck and has been driving the Lagos–Abuja corridor for 10 years. He gets most of his loads through a clearing agent at Apapa port who takes a 20% cut. His truck sits idle 3–4 days a week. He has no formal record of his trips or earnings.

**Goals:**

- Fill his truck for every Lagos–Abuja run (and the return leg)
- Get paid directly — no middlemen taking commission
- Build a verifiable track record he can show to banks for a truck loan
- Reduce cash handling risk

**Frustrations:**

- Lost ₦180,000 to a bad cargo owner who never paid
- Empty return trips cost him fuel with no revenue
- Banks won't give him credit because he has no income documentation

**Tech Comfort:** Uses Android smartphone. Comfortable with bank transfers and USSD. Uses WhatsApp for business communication.

---

## 5. Features & Requirements

### 5.1 Feature Priority Definitions

| Priority      | Definition                                                                |
| ------------- | ------------------------------------------------------------------------- |
| P0 — Critical | Must ship for hackathon demo. Product is broken without it.               |
| P1 — High     | Should ship for hackathon. Significantly improves the demo and usability. |
| P2 — Medium   | Nice to have for hackathon. Required for beta launch.                     |
| P3 — Future   | Post-hackathon roadmap.                                                   |

---

### 5.2 Full Feature List

#### Authentication & Onboarding

| Feature                             | Description                                                                              | Priority |
| ----------------------------------- | ---------------------------------------------------------------------------------------- | -------- |
| Dual-role registration              | Users register as either Cargo Owner or Driver — role determines their entire experience | P0       |
| Email/password login                | Standard credentials-based authentication with bcrypt hashing                            | P0       |
| Google OAuth                        | Sign in with Google as an alternative to email/password                                  | P0       |
| Role-based session                  | JWT session carries role and onboardingComplete — used by middleware and UI              | P0       |
| Driver onboarding gate              | Drivers who haven't completed onboarding are redirected to the setup flow automatically  | P0       |
| Driver onboarding — Step 1 (Truck)  | Capture truck type, model, year, plate number, capacity, base location, bio              | P0       |
| Driver onboarding — Step 2 (Routes) | Add one or more origin→destination state routes with estimated transit days              | P0       |
| Driver onboarding — Step 3 (Rates)  | Set rate per km and minimum charge in naira                                              | P0       |

#### Discovery & Search

| Feature                    | Description                                                                                      | Priority |
| -------------------------- | ------------------------------------------------------------------------------------------------ | -------- |
| Driver search              | Search drivers by origin state, destination state, truck type, and minimum capacity              | P0       |
| Search results with cards  | Display driver cards showing name, truck type, capacity, rate/km, rating, routes, verified badge | P0       |
| Pagination                 | Paginated search results (12 per page), ordered by rating then total trips                       | P0       |
| Driver profile page        | Full public profile: truck details, all routes, rate, bio, reviews, Book Now CTA                 | P1       |
| Cargo listings for drivers | Drivers can browse open cargo jobs posted by owners                                              | P1       |

#### Booking System

| Feature                  | Description                                                                                  | Priority |
| ------------------------ | -------------------------------------------------------------------------------------------- | -------- |
| Create booking           | Cargo owner books a driver — specifies agreed amount, pickup date, notes                     | P0       |
| Booking status lifecycle | PENDING → ACCEPTED → PAYMENT_PENDING → PAID → IN_TRANSIT → DELIVERED (or CANCELLED/DISPUTED) | P0       |
| Driver accepts/declines  | Driver can accept (→ ACCEPTED) or decline (→ CANCELLED) a pending booking                    | P0       |
| Owner cancels            | Cargo owner can cancel at PENDING or ACCEPTED — blocked after payment                        | P0       |
| Mark In Transit          | Driver marks shipment as IN_TRANSIT once cargo is picked up (only from PAID)                 | P1       |
| Mark Delivered           | Driver marks shipment as DELIVERED on drop-off (only from IN_TRANSIT)                        | P1       |
| Booking detail page      | Full booking view with status timeline, payment info, driver contact, actions                | P1       |
| Cargo posting form       | Guided form for cargo owners: title, cargo type, weight, origin, destination, date, budget   | P1       |

#### Payments (Interswitch)

| Feature              | Description                                                                            | Priority |
| -------------------- | -------------------------------------------------------------------------------------- | -------- |
| Payment initiation   | POST /api/payments/initiate generates Interswitch Quickteller URL                      | P0       |
| Interswitch redirect | User redirected to Interswitch hosted checkout (card/bank/USSD)                        | P0       |
| Payment verification | POST /api/payments/verify calls Interswitch API to confirm transaction                 | P0       |
| Success/failure page | /payment/verify page shows real-time result with booking link or retry option          | P0       |
| Payment retry        | If payment fails, booking reverts to ACCEPTED so the owner can try again               | P0       |
| Transaction record   | Every payment attempt is persisted with Interswitch reference, amount, channel, status | P0       |

#### Dashboards

| Feature               | Description                                                                 | Priority |
| --------------------- | --------------------------------------------------------------------------- | -------- |
| Cargo owner dashboard | Active shipments, quick actions (Find Driver, Post Cargo), booking history  | P0       |
| Driver dashboard      | New requests (accept/decline), active jobs, stats (pending, active, earned) | P0       |
| Owner Pay Now button  | Inline payment button on ACCEPTED bookings — triggers initiate flow         | P0       |
| Driver earnings stats | Total earned (from DELIVERED bookings), trip count on dashboard             | P1       |

#### Platform

| Feature                 | Description                                                                                 | Priority |
| ----------------------- | ------------------------------------------------------------------------------------------- | -------- |
| Route-based middleware  | Protects all pages: unauthenticated → /login, wrong role → correct dashboard                | P0       |
| Database seed           | 4 demo drivers with full profiles, routes across major Nigerian corridors, 2 cargo listings | P0       |
| Reviews & ratings       | Post-delivery 1–5 star rating with optional comment                                         | P2       |
| Real-time notifications | In-app alerts: booking accepted, payment confirmed, in transit, delivered                   | P2       |
| Admin panel             | Driver KYC verification, dispute resolution, platform metrics                               | P2       |
| In-app chat             | Owner–driver messaging during active bookings                                               | P3       |
| Insurance integration   | Cargo insurance add-on at booking checkout                                                  | P3       |
| Route optimisation      | Suggest return loads to drivers to reduce deadhead trips                                    | P3       |

---

## 6. User Stories

### 6.1 Authentication

| ID    | Story                                                                                                                    | Acceptance Criteria                                                                              | Priority |
| ----- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | -------- |
| US-01 | As a new user, I want to register as either a Cargo Owner or Truck Driver so that I get the right experience for my role | Role picker shown on register page; role is saved; user lands on correct onboarding or dashboard | P0       |
| US-02 | As a returning user, I want to log in with email and password so that I can access my account                            | Valid credentials create a JWT session; redirected to role-appropriate dashboard                 | P0       |
| US-03 | As a user, I want to log in with Google so that I don't need to remember a password                                      | OAuth flow completes; role defaults to CARGO_OWNER if first login (can be changed)               | P0       |
| US-04 | As a driver who just registered, I want to be automatically directed to onboarding so I can set up my truck              | Middleware checks onboardingComplete; redirects unboarded drivers to /onboarding/driver          | P0       |

### 6.2 Driver Onboarding & Profile

| ID    | Story                                                                                                                         | Acceptance Criteria                                                                            | Priority |
| ----- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------- |
| US-05 | As a driver, I want to enter my truck details (type, model, year, plate, capacity) so cargo owners know what I'm driving      | All fields validated; profile saved; truck appears in search results                           | P0       |
| US-06 | As a driver, I want to add routes I cover so cargo owners searching those routes can find me                                  | Minimum 1 route required; stored with origin and destination states                            | P0       |
| US-07 | As a driver, I want to set my rate per km and minimum charge so owners know my pricing upfront                                | Rates saved; displayed on driver card in search and on profile page                            | P0       |
| US-08 | As a cargo owner, I want to view a driver's full profile — truck, routes, rating, reviews — so I can make an informed booking | Profile page shows all driver details, route list, average rating, and up to 10 recent reviews | P1       |

### 6.3 Search & Matching

| ID    | Story                                                                                                                  | Acceptance Criteria                                                                  | Priority |
| ----- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------- |
| US-09 | As a cargo owner, I want to search drivers by origin and destination state so I find drivers who cover my route        | Results filtered by matching routes; API accepts origin and destination query params | P0       |
| US-10 | As a cargo owner, I want to filter by truck type so I find the right vehicle for my cargo                              | Truck type filter applied; only matching type shown                                  | P0       |
| US-11 | As a cargo owner, I want to filter by minimum capacity so I only see trucks that can carry my load                     | minCapacity filter applied; drivers with capacity below threshold excluded           | P0       |
| US-12 | As a cargo owner, I want search results sorted by best drivers first so I don't have to manually evaluate every result | Results ordered by avgRating descending, then totalTrips descending                  | P0       |

### 6.4 Booking

| ID    | Story                                                                                                                    | Acceptance Criteria                                                                            | Priority |
| ----- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | -------- |
| US-13 | As a cargo owner, I want to book a driver by specifying agreed amount and pickup date so we have a confirmed arrangement | Booking created in PENDING; duplicate check prevents double-booking same driver for same cargo | P0       |
| US-14 | As a driver, I want to accept or decline a booking request so I only take jobs I can fulfill                             | ACCEPT → ACCEPTED with acceptedAt timestamp; DECLINE → CANCELLED with optional reason          | P0       |
| US-15 | As a cargo owner, I want to cancel a booking before payment if my plans change                                           | Cancel allowed at PENDING or ACCEPTED; blocked at PAYMENT_PENDING, PAID, IN_TRANSIT, DELIVERED | P0       |
| US-16 | As a driver, I want to mark a shipment as In Transit when I collect cargo                                                | Status updates to IN_TRANSIT; only allowed from PAID                                           | P1       |
| US-17 | As a driver, I want to mark a shipment as Delivered on completion                                                        | Status updates to DELIVERED; actualDelivery timestamp recorded; review prompt shown to owner   | P1       |

### 6.5 Payments

| ID    | Story                                                                                                                               | Acceptance Criteria                                                                             | Priority |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------- |
| US-18 | As a cargo owner, I want to pay for an accepted booking via card, bank transfer, or USSD so the driver is secured                   | Interswitch payment URL generated and returned from /api/payments/initiate; user redirected     | P0       |
| US-19 | As a cargo owner, after paying I want to see a clear success or failure message so I know the outcome                               | /payment/verify page calls verify API; success shows booking confirmation; failure shows retry  | P0       |
| US-20 | As the platform, I want to verify every payment with Interswitch before marking a booking PAID so no fraudulent confirmations occur | Verify API called with OAuth token and SHA-512 hash; ResponseCode "00" required for PAID status | P0       |
| US-21 | As a cargo owner, if my payment fails I want to retry without losing the booking                                                    | FAILED transaction reverts booking to ACCEPTED; retry triggers a new payment initiation         | P0       |

---

## 7. Technical Architecture

### 7.1 Technology Stack

| Layer           | Technology                     | Rationale                                                                                   |
| --------------- | ------------------------------ | ------------------------------------------------------------------------------------------- |
| Framework       | Next.js 16 (App Router)        | Full-stack React framework; API routes co-located with UI; excellent for hackathon velocity |
| Language        | TypeScript (strict)            | Type safety across full stack; catches bugs at compile time                                 |
| Styling         | Tailwind CSS v4                | Utility-first; fast to iterate; custom design tokens via CSS variables                      |
| ORM             | Prisma v7                      | Type-safe DB queries; migration system; excellent DX                                        |
| Database        | PostgreSQL                     | Relational; foreign keys enforce booking integrity; Neon.tech for free cloud hosting        |
| Authentication  | NextAuth v5 (beta)             | Handles OAuth + credentials; JWT strategy with PrismaAdapter                                |
| Payments        | Interswitch Quickteller Webpay | Hackathon requirement; supports card, bank transfer, USSD; hosted checkout = no PCI burden  |
| Validation      | Zod                            | Runtime schema validation on all API inputs                                                 |
| Package Manager | pnpm                           | Faster installs; disk-efficient                                                             |

### 7.2 Project Structure

```
cassowary/                        ← project root (your codebase name)
├── middleware.ts                  ← route protection (auth + role guards)
├── app/
│   ├── layout.tsx                 ← root layout with SessionProvider
│   ├── page.tsx                   ← landing page
│   ├── globals.css                ← design tokens + global styles
│   ├── login/page.tsx
│   ├── register/page.tsx          ← dual-role registration
│   ├── onboarding/driver/page.tsx ← 3-step driver setup
│   ├── search/page.tsx            ← driver search + filters
│   ├── dashboard/
│   │   ├── owner/page.tsx
│   │   └── driver/page.tsx
│   ├── payment/verify/page.tsx    ← post-Interswitch redirect
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── auth/register/route.ts
│       ├── drivers/profile/route.ts
│       ├── drivers/search/route.ts
│       ├── drivers/[id]/route.ts
│       ├── cargo/listings/route.ts
│       ├── bookings/route.ts
│       ├── bookings/[id]/route.ts
│       ├── payments/initiate/route.ts
│       └── payments/verify/route.ts
├── lib/
│   ├── prisma.ts                  ← Prisma singleton client
│   ├── auth.ts                    ← NextAuth configuration
│   └── interswitch.ts             ← Interswitch SDK wrapper
├── prisma/
│   ├── schema.prisma              ← database schema (10 models)
│   └── seed.ts                    ← demo data seeder
└── types/
    ├── index.ts                   ← shared app types + constants
    └── next-auth.d.ts             ← session type augmentation
```

### 7.3 Database Schema

#### Enums

```prisma
enum Role             { DRIVER, CARGO_OWNER }
enum BookingStatus    { PENDING, ACCEPTED, PAYMENT_PENDING, PAID,
                        IN_TRANSIT, DELIVERED, CANCELLED, DISPUTED }
enum TransactionStatus{ INITIATED, SUCCESSFUL, FAILED, REVERSED }
enum TruckType        { FLATBED, REFRIGERATED, TANKER, CONTAINER,
                        TIPPER, VAN, LOWBED, CURTAINSIDER }
enum CargoType        { GENERAL, PERISHABLE, FRAGILE, HAZARDOUS,
                        LIVESTOCK, LIQUID, MACHINERY, ELECTRONICS }
```

#### Core Models

| Model             | Key Fields                                                                                                                          | Relations                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| User              | id, name, email, password (hashed), phone, role, onboardingComplete                                                                 | → DriverProfile, CargoListings, Bookings, Reviews          |
| DriverProfile     | truckType, truckModel, truckYear, plateNumber, capacityTons, ratePerKm, minimumCharge, baseState, avgRating, totalTrips, isVerified | → User, Routes, Bookings                                   |
| Route             | driverProfileId, originState, destState, estimatedDays                                                                              | → DriverProfile                                            |
| CargoListing      | ownerId, title, cargoType, weightTons, originState, destState, neededBy, budget                                                     | → User, Bookings                                           |
| Booking           | cargoListingId, ownerId, driverId, driverProfileId, status, agreedAmount, pickupDate, acceptedAt, actualDelivery                    | → CargoListing, User×2, DriverProfile, Transaction, Review |
| Transaction       | bookingId, transactionReference, amountKobo, status, paymentReference, channel, responseCode                                        | → Booking                                                  |
| Review            | bookingId, giverId, receiverId, rating (1-5), comment                                                                               | → Booking, User×2                                          |
| Account           | NextAuth OAuth account link                                                                                                         | → User                                                     |
| Session           | NextAuth session                                                                                                                    | → User                                                     |
| VerificationToken | NextAuth email verification                                                                                                         | —                                                          |

### 7.4 API Reference

| Method | Endpoint               | Auth            | Description                                   |
| ------ | ---------------------- | --------------- | --------------------------------------------- |
| POST   | /api/auth/register     | Public          | Register with role (DRIVER or CARGO_OWNER)    |
| GET    | /api/drivers/profile   | Driver          | Fetch own driver profile                      |
| POST   | /api/drivers/profile   | Driver          | Create driver profile (onboarding)            |
| PUT    | /api/drivers/profile   | Driver          | Update driver profile                         |
| GET    | /api/drivers/search    | Any             | Search drivers with filters                   |
| GET    | /api/drivers/[id]      | Any             | Fetch single driver + reviews                 |
| GET    | /api/cargo/listings    | Auth            | List cargo jobs (all or own)                  |
| POST   | /api/cargo/listings    | Owner           | Create new cargo listing                      |
| GET    | /api/bookings          | Auth            | List own bookings (role-filtered)             |
| POST   | /api/bookings          | Owner           | Create booking request                        |
| GET    | /api/bookings/[id]     | Owner or Driver | Fetch booking detail                          |
| PATCH  | /api/bookings/[id]     | Owner or Driver | Accept / decline / cancel / transit / deliver |
| POST   | /api/payments/initiate | Owner           | Generate Interswitch payment URL              |
| POST   | /api/payments/verify   | Owner           | Verify transaction, update booking to PAID    |

### 7.5 Booking State Machine

```
                    ┌─────────────┐
                    │   PENDING   │ ← Created by cargo owner
                    └──────┬──────┘
              Accept ↓           ↓ Decline / Cancel
                    ┌──────▼──────┐    ┌────────────┐
                    │  ACCEPTED   │    │ CANCELLED  │
                    └──────┬──────┘    └────────────┘
           Pay Now ↓
                    ┌──────▼──────────┐
                    │ PAYMENT_PENDING │ ← Interswitch redirect
                    └──────┬──────────┘
        Verified ↓          ↓ Failed → reverts to ACCEPTED
                    ┌──────▼──────┐
                    │    PAID     │
                    └──────┬──────┘
         Driver ↓
                    ┌──────▼──────┐
                    │ IN_TRANSIT  │
                    └──────┬──────┘
         Driver ↓
                    ┌──────▼──────┐
                    │  DELIVERED  │
                    └─────────────┘
```

---

## 8. Interswitch Payment Integration

### 8.1 Overview

Interswitch is the primary and mandatory payment processor for LoadLink. The integration uses the **Quickteller Webpay** hosted checkout, which handles PCI compliance on Interswitch's servers — LoadLink never touches or stores raw card data.

### 8.2 Credentials Required

| Credential                | Source                         | Purpose                                   |
| ------------------------- | ------------------------------ | ----------------------------------------- |
| INTERSWITCH_CLIENT_ID     | developer.interswitchgroup.com | OAuth token request                       |
| INTERSWITCH_CLIENT_SECRET | developer.interswitchgroup.com | OAuth token request + hash generation     |
| INTERSWITCH_MERCHANT_CODE | Quickteller Webpay dashboard   | Identifies merchant on payment page       |
| INTERSWITCH_PAY_ITEM_ID   | Quickteller Webpay dashboard   | Identifies product/service being paid for |

### 8.3 Payment Flow — Step by Step

```
1. OWNER BOOKS DRIVER
   POST /api/bookings → Booking{ status: PENDING }

2. DRIVER ACCEPTS
   PATCH /api/bookings/[id] { action: ACCEPT }
   → Booking{ status: ACCEPTED }

3. OWNER INITIATES PAYMENT
   POST /api/payments/initiate { bookingId }
   ↓
   Backend:
   • Creates Transaction{ status: INITIATED, ref: "LL-{cuid}" }
   • Updates Booking{ status: PAYMENT_PENDING }
   • Builds Interswitch URL with merchant code, amount (kobo), ref
   ↓
   Returns: { paymentUrl, transactionRef, amountNaira }

4. BROWSER REDIRECTS TO INTERSWITCH
   https://sandbox.interswitchng.com/collections/w/pay?...
   User pays via Card / Bank Transfer / USSD

5. INTERSWITCH REDIRECTS BACK
   GET /payment/verify?ref=LL-xxx&bookingId=yyy

6. FRONTEND CALLS VERIFY
   POST /api/payments/verify { transactionRef, bookingId }
   ↓
   Backend:
   • Fetches OAuth token from Interswitch
   • Generates SHA-512 hash
   • GET Interswitch verify endpoint
   ↓
   ResponseCode "00" → SUCCESS
   ResponseCode other → FAILED

7a. SUCCESS PATH
    Transaction{ status: SUCCESSFUL, paymentReference }
    Booking{ status: PAID }
    → User sees success page with booking link

7b. FAILURE PATH
    Transaction{ status: FAILED }
    Booking{ status: ACCEPTED }  ← reverted for retry
    → User sees failure page with retry button
```

### 8.4 Hash Generation

Interswitch requires a SHA-512 hash for transaction verification to prevent tampering:

```
hash = SHA512(transactionRef + amountKobo + payItemId + clientId + clientSecret)
```

This is computed server-side in `lib/interswitch.ts` and sent as the `Hash` header on verify requests.

### 8.5 Amount Handling

All amounts are stored and transmitted in **kobo** (1 naira = 100 kobo) to avoid floating-point errors:

```
agreedAmount = 240000   (naira, stored in DB as Float)
amountKobo   = 24000000 (kobo, sent to Interswitch)
```

### 8.6 Environment Configuration

| Variable             | Sandbox                           | Production                       |
| -------------------- | --------------------------------- | -------------------------------- |
| INTERSWITCH_BASE_URL | https://sandbox.interswitchng.com | https://webpay.interswitchng.com |
| INTERSWITCH_ENV      | TEST                              | LIVE                             |

Switching from sandbox to production requires only these two env var changes — no code changes needed.

---

## 9. Non-Functional Requirements

### 9.1 Performance

- Driver search results must return in under 1 second for up to 500 active drivers
- Payment initiation must generate and return the redirect URL within 3 seconds
- All pages must load in under 3 seconds on a 4G mobile connection
- Prisma queries use indexed fields (email, userId, bookingId) — no full table scans

### 9.2 Security

| Requirement              | Implementation                                                           |
| ------------------------ | ------------------------------------------------------------------------ |
| Password hashing         | bcrypt with 12 salt rounds                                               |
| Session security         | JWT with NEXTAUTH_SECRET; short expiry; refreshed from DB                |
| Route protection         | Middleware checks auth + role on every non-public route                  |
| Input validation         | Zod schemas on all POST/PUT API routes                                   |
| SQL injection prevention | Prisma ORM uses parameterised queries exclusively                        |
| Payment credentials      | Interswitch keys are server-side env vars only — never in client bundle  |
| Amount integrity         | Amounts stored in kobo (integers) to prevent floating-point manipulation |
| Replay attack prevention | Unique transactionReference per booking (LL-{cuid})                      |

### 9.3 Usability

- Mobile-first responsive design — primary device for target users is Android smartphone
- Nigerian state list, truck types, and cargo types are all pre-populated (no free text for these)
- Status labels use plain English ("Awaiting driver", "Pay Now", "In Transit") not technical codes
- Booking flow requires minimum user decisions — sensible defaults throughout

### 9.4 Reliability

- Prisma `$transaction` used for all multi-step database operations (booking creation, payment confirmation)
- Payment failure gracefully reverts booking status — no stuck states
- Prisma client singleton prevents connection pool exhaustion in Next.js serverless environment
- `upsert` used in seed and payment flows to make operations idempotent

### 9.5 Accessibility

- All interactive elements accessible via keyboard
- Colour contrast meets WCAG AA on primary text
- Form fields use semantic `<label>` elements
- Focus visible indicator styled with brand colour

---

## 10. Success Metrics

### 10.1 Hackathon Demo Success Criteria

| Criterion           | Definition of Done                                                                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| End-to-end flow     | A judge registers as cargo owner, finds a driver, books, pays via Interswitch sandbox, and sees the booking confirmed as PAID — without any errors |
| Driver onboarding   | A judge registers as a driver, completes the 3-step form, and immediately appears in search results                                                |
| Payment integration | Interswitch payment URL is generated, the hosted checkout loads successfully, and the verify endpoint correctly updates booking to PAID            |
| Role separation     | A driver cannot access cargo owner pages; a cargo owner cannot access driver pages; middleware redirects correctly in both directions              |
| Demo data           | Seeded drivers cover Lagos→Abuja, FCT→Kano, Oyo→Lagos, Rivers→Abia with realistic rates and ratings                                                |
| Resilience          | Payment failure shows a clear retry path — booking does not get stuck                                                                              |

### 10.2 Post-Hackathon KPIs

| Metric                                 | Target (90 days post-launch) |
| -------------------------------------- | ---------------------------- |
| Registered drivers                     | 500+ verified and active     |
| Registered cargo owners                | 1,000+                       |
| Bookings created                       | 2,000+                       |
| Bookings completed (DELIVERED)         | 60%+ completion rate         |
| GMV through Interswitch                | ₦50M+                        |
| Driver NPS                             | 50+                          |
| Cargo owner retention (repeat booking) | 40%+                         |
| Average search-to-booking time         | Under 10 minutes             |

---

## 11. Risks & Mitigations

| Risk                                                      | Likelihood | Impact                                                             | Mitigation                                                                                                      |
| --------------------------------------------------------- | ---------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Interswitch sandbox credentials not available before demo | Medium     | High — entire payment flow cannot be demonstrated                  | Obtain credentials from developer.interswitchgroup.com early; prepare a screen-recorded walkthrough as fallback |
| Prisma v7 breaking changes vs. documentation              | High       | Medium — import paths, client generation differ from tutorials     | Document all Prisma v7 specifics in SETUP.md; import from `generated/prisma/client`                             |
| NextAuth v5 beta API differences                          | Medium     | Medium — auth may break on certain edge cases                      | Pin to `next-auth@5.0.0-beta.30`; test login/register/session flow in first sprint                              |
| Database connectivity on demo environment                 | Low        | High — app is unusable without DB                                  | Use Neon.tech free-tier cloud Postgres; test connection string before demo day                                  |
| Driver onboarding too long for quick demo                 | Low        | Low — judges may not complete the full flow                        | Pre-seed demo driver accounts (driver1@loadlink.ng) so judges can log straight in                               |
| Next.js 16 + React 19 stability                           | Low        | Medium — some third-party packages may not support latest versions | Use `skipLibCheck: true` in tsconfig; test all dependencies explicitly                                          |

---

## 12. Post-Hackathon Roadmap

### Phase 1 — Hackathon MVP (Current)

- Core booking flow (search → book → pay via Interswitch)
- Driver onboarding (truck, routes, rates)
- Dual-role dashboards
- Seed data across major Nigerian corridors

### Phase 2 — Beta (Months 1–3)

- Driver public profile page with review system
- Cargo posting form for owners
- Booking detail page with status timeline
- Real-time in-app notifications
- Driver earnings dashboard with payout history
- SMS notifications via Termii or Twilio
- Admin panel for driver KYC verification

### Phase 3 — Growth (Months 3–6)

- Cargo insurance add-on at checkout
- Return load matching (reduce driver deadhead trips)
- In-app messaging between owner and driver during active bookings
- Mobile app (React Native) for iOS and Android
- Driver credit scoring based on trip history

### Phase 4 — Scale (Months 6–12)

- Fleet management dashboard for logistics companies (B2B)
- Escrow-based payment with milestone releases
- Integration with FIRS for e-waybill and freight compliance
- Expansion to Ghana and Kenya
- API for third-party logistics systems integration

---

## 13. Appendix

### A. Demo Credentials (After `pnpm prisma db seed`)

| Role                          | Email               | Password    |
| ----------------------------- | ------------------- | ----------- |
| Cargo Owner                   | owner@loadlink.ng   | password123 |
| Driver (Container, Lagos)     | driver1@loadlink.ng | password123 |
| Driver (Flatbed, Abuja)       | driver2@loadlink.ng | password123 |
| Driver (Refrigerated, Ibadan) | driver3@loadlink.ng | password123 |
| Driver (Van, Port Harcourt)   | driver4@loadlink.ng | password123 |

### B. Required Environment Variables

```env
DATABASE_URL                  # PostgreSQL connection string
NEXTAUTH_URL                  # http://localhost:3000 (dev)
NEXTAUTH_SECRET               # openssl rand -base64 32
INTERSWITCH_CLIENT_ID         # From developer.interswitchgroup.com
INTERSWITCH_CLIENT_SECRET     # From developer.interswitchgroup.com
INTERSWITCH_MERCHANT_CODE     # From Quickteller Webpay dashboard
INTERSWITCH_PAY_ITEM_ID       # From Quickteller Webpay dashboard
INTERSWITCH_BASE_URL          # https://sandbox.interswitchng.com (test)
INTERSWITCH_ENV               # TEST or LIVE
NEXT_PUBLIC_APP_URL           # http://localhost:3000 (dev)
```

### C. Key Dependencies

| Package              | Version       | Purpose                                 |
| -------------------- | ------------- | --------------------------------------- |
| next                 | 16.1.7        | Framework                               |
| next-auth            | 5.0.0-beta.30 | Authentication                          |
| @prisma/client       | ^7.5.0        | Database client                         |
| @auth/prisma-adapter | ^2.11.1       | NextAuth ↔ Prisma bridge                |
| bcryptjs             | ^3.0.3        | Password hashing                        |
| zod                  | ^4.3.6        | Input validation                        |
| react-hook-form      | ^7.71.2       | Form state management                   |
| @hookform/resolvers  | ^5.2.2        | Zod integration for forms               |
| date-fns             | ^4.1.0        | Date formatting                         |
| tsx                  | ^4.21.0       | TypeScript execution for seed           |
| @paralleldrive/cuid2 | latest        | Unique transaction reference generation |

### D. Glossary

| Term               | Definition                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------- |
| Cargo Owner        | A user who needs to move goods and books drivers through LoadLink                            |
| Driver             | A user who owns or operates a truck and accepts cargo jobs                                   |
| Booking            | A confirmed arrangement between a cargo owner and a driver for a specific shipment           |
| Deadhead           | An empty truck journey (no cargo) — a key inefficiency LoadLink addresses                    |
| Kobo               | Smallest unit of Nigerian naira (1 NGN = 100 kobo) — used for all Interswitch amounts        |
| Quickteller Webpay | Interswitch's hosted payment page — handles card/bank/USSD without exposing data to LoadLink |
| CUID               | Collision-resistant unique ID — used for transaction references (e.g. LL-k2tz3mfw…)          |
| Onboarding         | The process by which a driver sets up their truck profile before appearing in search         |

---

_End of Document — LoadLink PRD v1.0_
_Enyata × Interswitch Hackathon — Transportation Vertical_
