# Frontend Developer Test - Product Card Component

## Overview
This project implements a responsive Product Card UI component as part of a Frontend Developer Test. The component displays products with category-specific variant options, real-time stock management, and responsive design.

## Features Implemented
- ✅ Product image, name, price display
- ✅ Category-specific variant dropdowns:
  - **Clothing**: Size options (Small, Medium, Large, XL)
  - **Jewelry**: Material options (Gold, Silver, Platinum)
  - **Electronics**: Color options (Gray, White, Black)
- ✅ Add to Cart functionality with Redux integration
- ✅ Out-of-stock handling with disabled states
- ✅ Star ratings with review counts
- ✅ Real-time stock management (5 items per variant)
- ✅ Responsive Bootstrap layout
- ✅ Toast notifications for user feedback

## Run Locally

Clone the project

```bash
  git clone https://dredsoftlabs-admin@bitbucket.org/dredsoftlabs/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

## Technical Implementation

**Layout Approach:** Implemented a responsive product card component using Bootstrap's grid system with flexbox layout, ensuring consistent card heights and optimal spacing across different screen sizes. The component features a clean, modern design with product image, title, description, star ratings, category-specific variant dropdowns, and dynamic pricing.

**Responsiveness Considerations:** The layout uses Bootstrap's responsive column classes to display 3 cards per row on desktop, 2 on tablet, and 1 on mobile devices, with proper spacing and card scaling that maintains readability and usability across all viewport sizes.
